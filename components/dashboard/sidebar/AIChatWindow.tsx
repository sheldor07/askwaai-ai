import { useState, useContext, useEffect, useRef, use } from "react";
import { pairedPrompts } from "@/app/utils/pairedPrompts";
import { UserContext } from "@/app/dashboard/layout";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

type ChatHistoryItem = {
  message: string;
  response: any;
};

export default function AIChatWindow(props: any) {
  const user = useContext(UserContext);
  const supabase = createClientComponentClient();
  const currentPage = props.currentPage;
  const essayData = props.essayData;
  const [chatScreen, setChatScreen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [gotResponse, setGotResponse] = useState(false);
  const [response, setResponse] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const toggleChatScreen = () => {
    setChatScreen(!chatScreen);
  };
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);
  useEffect(() => {
    console.log("Updated essayData: ", essayData);
  }, [essayData]);

  async function fetchChatHistory() {
    try {
      let { data: chat_histories, error } = await supabase
        .from("chat_histories")
        .select("*")
        .eq("user_uuid", user?.id);
      if (error) {
        console.error("Error fetching chat history:", error);
      } else {
        setChatHistory(chat_histories);
      }
    } catch (error) {
      console.error("Error fetching chat history:", error);
    }
  }

  async function insertChatHistory(question: string, response: string) {
    try {
      const { data, error } = await supabase
        .from("chat_histories")
        .insert([{ message: question, response, user_uuid: user?.id }]);

      if (error) {
        console.error("Error inserting chat history:", error);
      } else {
        fetchChatHistory();
      }
    } catch (error) {
      console.error("Error inserting chat history:", error);
    }
  }
  async function sendPrompt(question: string) {
    // Set loading state
    fetchChatHistory();
    setLoading(true);
    toggleChatScreen();

    console.log("Sending data: ", essayData);
    // Send the request to the completion API
    const response = await fetch(`/api/completion?query=${question}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        essayData,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        // Set error state
        setGotResponse(true);
        // Insert error message into chat history
        return "Error: " + err;
      });

    // Once we have the response, insert it into the chat history
    // And then refresh the chat history
    await insertChatHistory(question, response?.verdict);
    setLoading(false);

    setGotResponse(true);
    fetchChatHistory();
  }

  const selectedPrompts = pairedPrompts[currentPage];

  return (
    <div className="z-30 shadow-lg bg-white flex rounded-xl flex-col overflow-auto min-w-[500px] max-w-[500px] max-h-[600px] h-full align-items-center p-2">
      <div className="flex flex-row justify-between p-2 mb-4 bg-gray-100 border-2 rounded-lg shadow-lg border-slate-100">
        <div className="flex flex-row w-full">
          <div className="w-5 h-5 my-auto mr-2">
            <img src="/dashboard/sidebar/AIHelpBot.svg" alt="AI Help Bot" />
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-blue-500">AI Chat</p>
            <span className="flex flex-row ">
              <span className="w-2 h-2 my-auto mr-2 bg-green-500 rounded-full"></span>
              <p className="text-[10px] text-green-500">Online</p>
            </span>
          </div>
        </div>
        <button
          onClick={() => {
            props.toggleChatWindow();
          }}>
          <div className="w-5 h-5 mx-auto">
            <img src="/navbar-svg/close.svg" alt="Close" />
          </div>
        </button>
      </div>
      {loading ? (
        <div>Loading...</div> // replace this with a spinner or loading animation
      ) : chatScreen ? (
        <div className="overflow-auto h-96">
          {chatHistory.map(
            (item, index) =>
              item && (
                <div key={index}>
                  <div className="flex justify-end w-full p-2 my-2">
                    {" "}
                    <p className="p-2 text-sm text-white bg-blue-500 rounded-xl">
                      {item.message}
                    </p>
                  </div>
                  <div className="flex justify-start w-full p-2 my-2">
                    {" "}
                    <p className="p-2 text-sm text-white bg-slate-500 rounded-xl">
                      {item.response}
                    </p>
                  </div>
                </div>
              )
          )}
        </div>
      ) : (
        <div className="flex flex-col justify-center w-full p-6 h-5/6">
          <div className="flex flex-col justify-center w-full my-2 text-center h-1/2">
            {/* ...rest of the code */}
            {Object.keys(selectedPrompts).map((key, index) => (
              <div key={index}>
                <p>{key}</p>
                {Array.isArray(selectedPrompts[key])
                  ? selectedPrompts[key].map((promptPair: any, i: number) => (
                      <button
                        className="w-full p-2 my-2 text-sm text-center rounded-md text-slate-800 bg-slate-100"
                        key={i}
                        onClick={() => {
                          sendPrompt(promptPair.question);
                        }}>
                        {promptPair.question}
                      </button>
                    ))
                  : null}
              </div>
            ))}
            {chatScreen && gotResponse ? <div ref={messagesEndRef} /> : null}
          </div>

          {/* <div className="flex flex-col justify-center w-full my-2 text-center h-1/2">
              <div className="w-6 mx-auto">
                <Image src={FeedbackAIBot} alt="AI Help Bot" />
              </div>
              <p>Feedback & Edit</p>
              {Object.keys(selectedFeedbackQuestions).map((question, index) => (
                <button
                  className="w-full p-2 my-2 text-sm text-center rounded-md text-slate-800 bg-slate-100"
                  key={index}
                  onClick={() => {
                    sendPrompt(question);
                  }}>
                  {question}
                </button>
              ))}
            </div> */}
        </div>
      )}
    </div>
  );
}
