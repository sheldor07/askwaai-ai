"use client";
import { useState } from "react";
import Image from "next/image";
export default function AIChatWindow(props: any) {
  const currentPage = props.currentPage;
  const [chatScreen, setChatScreen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [gotResponse, setGotResponse] = useState(false);
  const [response, setResponse] = useState("");
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
      setResponse(response?.verdict); // assuming the AI's response is in responseData.choices[0].text
    } catch (err) {
      console.log(err);
      setLoading(false);
      setGotResponse(true);
      setResponse("Error: " + err);
      return;
    }

  }

  const explainQuestions = {
    default: [
      "Explain the task I am supposed to do",
      "*Write your own question*",
    ],

    empathise: {
      AEIOU: {
        question: [
          "Evaluate the depth of my AEIOU observations.",
          "Identify any gaps or overlooked areas in my AEIOU observations.",
          "Provide insights on how I can better capture the interactions and activities in my AEIOU observations.",
        ],
      },
      Implicit: [
        "Help me uncover deeper meanings or implications from my observations.",
        "Identify any patterns or trends in my observations that I might have missed.",
        "Provide insights on how I can better analyze the environment and objects in my observations.",
      ],
      Blog1: [
        "Assess the clarity and coherence of my Blog 1.",
        "Evaluate how effectively I've incorporated my AEIOU observations into my Blog 1.",
        "Provide suggestions on how I can better convey the implicit details in my Blog 1.",
      ],
    },

    question: {
      "Research Questions": [
        "Evaluate the openness of my research question. Does it encourage exploration and deep thinking?",
        "Assess the scope of my research question. Is it manageable within the space of the assignment?",
        "Does my research question motivate my piece of writing? Does it give purpose and focus to my writing?",
        "Will my research question lead to new learning about the topic?",
        "Does my research question avoid formulations that lead to policy papers rather than exploratory op-eds?",
      ],
    },

    introduce: {
      "Assignment 1": [
        "Evaluate the vividness of my descriptions. Are they too general or unfocused?",
        "Assess the depth of my analysis. Have I analyzed the significant details from my observations?",
        "Review the specificity and openness of my question. Does it encourage discussion and offer a clear motivation for writing?",
      ],
    },
  };

  const feedbackQuestions = {
    default: ["Can you check my grammar?", "Give me feedback on this"],
    blog1: ["What is the problem?"],
    question: ["What is the problem?"],
  };

  const selectedExplainQuestions = explainQuestions[currentPage];
  console.log("selected questions", selectedExplainQuestions);
  const selectedFeedbackQuestions = feedbackQuestions.default;
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
            <div className="flex flex-col">
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
              <div className="w-6 mx-auto">
                <img
                  src="/dashboard/sidebar/ExplainAIBot.svg"
                  alt="AI Help Bot"
                />
              </div>
              {Object.keys(selectedExplainQuestions).map((key, index) => (
                <div key={index}>
                  <p>{key}</p>
                  {Array.isArray(selectedExplainQuestions[key])
                    ? selectedExplainQuestions[key].map(
                        (question: any, i: number) => (
                          <button
                            className="w-full p-2 my-2 text-sm text-center rounded-md text-slate-800 bg-slate-100"
                            key={i}
                            onClick={() => {
                              sendPrompt(question);
                            }}>
                            {question}
                          </button>
                        )
                      )
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
