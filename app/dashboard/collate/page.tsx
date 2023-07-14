"use client";
import { useState } from "react";
import SourceCollate from "@/components/dashboard/collate/SourceCollate";
import Sidebar from "@/components/dashboard/sidebar/AIHelpContainer";
export default function Page() {
  const sourceList = [
    {
      sourceId: 1,
      title: "Science article",
      link: "https://www.google.com",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra at sed egestas.",
      isChosen: true,
    },
    {
      sourceId: 2,
      title: "Youtube video",
      link: "https://www.bing.com",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra at sed egestas.",
      isChosen: true,
    },
  ];
  const [sourceData, setSourceData] = useState({
    1: { title: "", link: "", userInput: "" },
    2: { title: "", link: "", userInput: "" },
  });

  const handleUserInput = (sourceId: number, userInput: string) => {
    setSourceData({
      ...sourceData,
      [sourceId]: {
        ...sourceData[sourceId],
        userInput,
      },
    });
  };
  console.log(sourceData);
  return (
    <>
      <div className="flex flex-row min-h-screen bg-white">
        <div className="p-16 ml-24">
          <div className="text-left ">
            <h1 className="text-4xl font-bold">Comprehend & Collate</h1>
            <p className="my-2 text-lg text-black whitespace-pre-line">
              Read carefully and collate phrases; key ideas & supporting details
              that may address your question direction directly or indirectly
            </p>
          </div>
          <div className="my-18">
            {sourceList.map((source) => {
              return (
                <SourceCollate
                  key={source.sourceId}
                  sourceId={source.sourceId}
                  title={source.title}
                  link={source.link}
                  isChosen={source.isChosen}
                  ifParaphrase={true}
                  content={source.content}
                  handleUserInput={handleUserInput}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Sidebar currentPage={"collate"} essayData={sourceData} />
    </>
  );
}
