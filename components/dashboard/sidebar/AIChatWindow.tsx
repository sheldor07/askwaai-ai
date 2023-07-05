import { useState } from "react";
import Image from "next/image";
import { pairedPrompts } from "@/app/utils/pairedPrompts";

type ChatHistoryItem = {
  question: string;
  response: any;
};

export default function AIChatWindow(props: any) {
  const currentPage = props.currentPage;
  const essayData = props.essayData;
  const [chatScreen, setChatScreen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [gotResponse, setGotResponse] = useState(false);
  const [response, setResponse] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatHistoryItem[]>([]);

  const toggleChatScreen = () => {
    setChatScreen(!chatScreen);
  };

  async function sendPrompt(question: string) {
    setPrompt(question);
    toggleChatScreen();
    setLoading(true);
    try {
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
        });
      console.log(response);
      setLoading(false);
      setGotResponse(true);
      setResponse(response?.verdict);
      setChatHistory([...chatHistory, { question, response }]);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setGotResponse(true);
      setResponse("Error: " + err);
      return;
    }
  }

  const selectedPrompts = pairedPrompts[currentPage];
  console.log("selected prompts", selectedPrompts);
  return (
    <div className="z-30 shadow-lg bg-white flex rounded-xl flex-col  max-w-[500px]  max-h-[800px] h-full align-items-center">
      <div className="flex flex-row justify-between px-4 py-1 border-2 border-slate-100">
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
          <img src="/navbar-svg/close.svg" alt="AI Help Bot" />
        </button>
      </div>
      {
        // Chat Screen
        chatScreen ? (
          <div>
            <div className="flex flex-col overflow-y-auto">
              <div className="flex flex-row justify-end w-full p-2 my-2 ">
                <p className="p-2 text-sm text-white bg-blue-500 rounded-xl">
                  {prompt}
                </p>
              </div>
              {loading ? (
                <div className="flex flex-row justify-start w-full p-2 my-2 ">
                  <p className="p-2 text-sm text-white bg-slate-500 rounded-xl">
                    Loading...
                  </p>
                </div>
              ) : (
                <div className="flex flex-row justify-start w-full p-2 my-2 ">
                  <p className="p-2 text-sm text-white bg-slate-500 rounded-xl">
                    {response}
                  </p>
                </div>
              )}
            </div>
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
        )
      }
    </div>
  );
}
