"use client";
import AIChatWindow from "./AIChatWindow";
import FeedbackNotepad from "./FeedbackNotepad";
import { useState } from "react";
import Image from "next/image";
export default function Sidebar(props: any) {
  const [chatWindow, setChatWindow] = useState(false);
  const [feedback, setFeedback] = useState(false);
  const toggleChatWindow = () => {
    setFeedback(false);
    setChatWindow(!chatWindow);
  };
  const toggleFeedback = () => {
    setFeedback(!feedback);
    setChatWindow(false);
  };
  return (
    <>
      <div className="fixed z-10 right-32 bottom-24">
        {feedback ? (
          <FeedbackNotepad {...props} toggleChatWindow={toggleFeedback} />
        ) : null}
      </div>
      <button
        onClick={() => {
          toggleFeedback();
        }}
        className="fixed bg-white rounded-full shadow-xl right-5 bottom-48 ">
        <div className="p-2">
          <img src="/dashboard/sidebar/FeedbackNotebook.svg" alt="AI Help Bot" />
        </div>
      </button>

      <div className="fixed right-32 bottom-24">
        {chatWindow ? (
          <AIChatWindow {...props} toggleChatWindow={toggleChatWindow} />
        ) : null}
      </div>
      <button
        onClick={() => {
          toggleChatWindow();
        }}
        className="fixed bg-white rounded-full shadow-xl right-5 bottom-24 ">
        <div className="p-2">
          <img src="/dashboard/sidebar/AIHelpBot.svg" alt="AI Help Bot" />
        </div>
      </button>
    </>
  );
}
