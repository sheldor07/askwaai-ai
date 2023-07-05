"use client";

import Image from "next/image";
import { useState } from "react";

export default function FeedbackNotepad(props: any) {
  const [chatScreen, setChatScreen] = useState(true);

  const feedbackNotes = [
    {
      id: 1,
      title: "Blog 1",
      content: "This is the content of blog 1",
      date: "2021-09-01",
    },
    {
      id: 2,
      title: "Blog 2",
      content: "This is the content of blog 2",
      date: "2021-09-02",
    },
    {
      id: 3,
      title: "Blog 3",
      content: "This is the content of blog 3",
      date: "2021-09-03",
    },
    {
      id: 4,
      title: "Blog 4",
      content: "This is the content of blog 4",
      date: "2021-09-04",
    },
  ];

  return (
    <div className="z-20 shadow-lg bg-white flex rounded-xl flex-col min-w-[300px] min-h-[500px] h-full align-items-center">
      <div className="flex flex-col justify-between p-2 border-2 border-slate-100">
        <div className="flex flex-row justify-end">
          <button
            onClick={() => {
              props.toggleChatWindow();
            }}>
            <img src="/navbar-svg/close.svg" alt="AI Help Bot" />
          </button>
        </div>
        <div className="w-full pb-2 text-center">
          <p className="font-bold text-blue-500">Feedback Notepad </p>
        </div>
      </div>
      <div className="flex flex-col w-full my-auto align-middle h-5/6">
        <div className="flex flex-col px-4 py-8 mx-2 text-center rounded-md text-slate-500 bg-slate-200">
          Nothing here
          <br></br>
          Add item by pressing &apos; + &apos; button
          <div className="w-8 h-8 mx-auto mt-4">
            <img
              src="/dashboard/sidebar/FeedbackAIBot.svg"
              alt="AI Help Bot"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
