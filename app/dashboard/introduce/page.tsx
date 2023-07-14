"use client";
import Sidebar from "@/components/dashboard/sidebar/AIHelpContainer";
import { useState } from "react";

export default function NewPage() {
  const [essayData, setEssayData] = useState("");

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEssayData(e.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen p-16 ml-24 bg-white">
      <div className="flex flex-col">
        <div>
          <h1 className="text-4xl font-bold text-black">New Page Title</h1>
          <p className="my-4 text-black whitespace-pre-line text-md">
            Add your text here.
          </p>
        </div>
        <p className="my-12 text-lg">Title: Your New Page Title</p>
      </div>
      <textarea
        className="w-3/4 h-full min-h-[400px] text-black"
        value={essayData}
        onChange={handleTextChange}></textarea>

      <Sidebar currentPage={"introduce"} essayData={essayData} />
    </div>
  );
}
