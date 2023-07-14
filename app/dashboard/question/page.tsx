"use client";
import { useEffect, useState } from "react";
import Sidebar from "@/components/dashboard/sidebar/AIHelpContainer";
export default function Page() {
  const listOne = [
    "Give motivation to one’s writing",
    "Be open-ended",
    "Be manageable in scope",
    "Spark research",
  ];

  const listTwo = [
    "Not be definitively answerable",
    "Be rooted in your observational writing",
    "Be interesting to you and your audience",
    "Deal with concepts rather than issues",
  ];
  const gridContent = [
    {
      header:
        "What topic, problem, or issue are you  interested in based on your field study?",
      subheader:
        "Break down topic and group ideas in clusters (use reverse). Pick one cluster or part of one.",
    },
    {
      header: "List a few possible questions about your specific topic area..",
      subheader: "Ask: What? Who? When? Where? Why? How?",
    },
    {
      header: "Choose one to be your main research question. ",
      subheader: "Why and How questions could be better.",
      placeholder: "Input 3",
    },
    {
      header: "Make your question as clear and specific as possible.",
      subheader:
        "Specify who, what where, when you are talking about. Clearify any vague words.",
    },
  ];
  const [inputValues, setInputValues] = useState<{
    [key: string | number]: string;
  }>({
    0: "",
    1: "",
    2: "",
    3: "",
    researchQuestion: "",
  });

  const handleInputChange =
    (index: any) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setInputValues({
        ...inputValues,
        [index]: e.target.value,
      });
    };
  useEffect(() => {
    console.log(inputValues);
  }, [inputValues]);
  return (
    <div className="flex flex-col min-h-screen p-16 ml-24 bg-white">
      <div className="flex flex-col w-full ">
        <div className="text-left">
          <h1 className="text-4xl font-bold">Craft Research Question</h1>
          <p className="my-5 font-normal leading-relaxed text-black text-md">
            A good research question for an op-ed (opinion editorial) should be{" "}
            <br></br>
            focused, thought-provoking, and relevant to the target audience. It
            should <br></br> spark curiosity, invite critical thinking, and
            allow for a nuanced exploration <br></br> of the topic. Here are
            some key considerations for crafting a strong <br></br>research
            question for an op-ed:
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 px-4 py-2">
          <ul className="list-disc">
            {listOne.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <ul className="list-disc">
            {listTwo.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-14">
        {gridContent.map((item, index) => (
          <div key={index} className="p-2 border-2 rounded border-slate-500">
            <h1 className="mb-2 font-bold text-md">{item.header}</h1>
            <h2 className="mb-2 text-sm italic text-gray-500">
              {item.subheader}
            </h2>
            <textarea
              className="w-full min-h-[200px] p-2 border rounded"
              value={inputValues[index] || ""}
              onChange={handleInputChange(index)}
            />
          </div>
        ))}
        <div className="col-span-2 p-2 border-2 rounded bg-slate-200">
          <h1 className="mb-2 font-bold text-md">
            What is your research question?
          </h1>
          <h2 className="mb-2 text-sm italic text-gray-500">
            Write your research question here.
          </h2>
          <textarea
            className="w-full min-h-[200px] p-2 border rounded"
            value={inputValues["researchQuestion"] || ""}
            onChange={handleInputChange("researchQuestion")}
          />
        </div>
      </div>
      <Sidebar currentPage={"question"} essayData={inputValues} />
    </div>
  );
}
