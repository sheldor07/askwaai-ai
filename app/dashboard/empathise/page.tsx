"use client";
import ImplicitExplicit from "@/components/dashboard/empathise/ImplicitExplicit";
import Blog1 from "@/components/dashboard/empathise/Blog1";
import AEIOUComp from "@/components/dashboard/empathise/AEIOUItems";
import Sidebar from "@/components/dashboard/sidebar/AIHelpContainer";
import { useState } from "react";

const colItems = [
  {
    name: "Activity",
    content:
      "Actions that people develop or execute related to the analyzed situation.",
  },
  {
    name: "Environment",
    content: "Physical space where the activity takes place.",
  },
  {
    name: "Interaction",
    content: "Observe in depth behaviors and actions ",
  },
  {
    name: "Object",
    content:
      "Elements related with the situation, context and physical things.",
  },
  {
    name: "User",
    content:
      "The perceptions that the users have related with the situation and interaction.",
  },
];

export default function Page() {
  const [aeiouData, setAeiouData] = useState({
    A: {
      name: "Activity",
      content: " ",
    },
    E: {
      name: "Environment",
      content: " ",
    },
    I: {
      name: "Interaction",
      content: " ",
    },
    O: {
      name: "Object",
      content: " ",
    },
    U: {
      name: "User",
      content: " ",
    },
  });
  console.log(aeiouData);
  const [implicitExplicitData, setImplicitExplicitData] = useState("");
  const [implicitDetailsData, setImplicitDetailsData] = useState("");
  return (
    <>
      <div className="flex flex-row min-h-screen bg-white">
        <div className="ml-24">
          {" "}
          {/* Add this wrapper div */}
          <div className="flex flex-col p-16">
            {" "}
            {/* Add flex-col class */}
            <div>
              <h1 className="text-4xl font-bold text-black">Title: Airport</h1>
              <p className="my-4 text-blue-500 text-md">THEME: PLACES</p>
            </div>
            <div className="ml-auto">
              <p className="p-8 ml-24 text-right text-black rounded-xl bg-violet-200">
                {" "}
                {/* Update the class name */}
                Use the AEIOU framework to categorize and interpret observations
                gathered during your field study.
              </p>
            </div>
          </div>
          <div className="flex flex-row mx-5">
            {colItems.map(
              (item: { name: string; content: string }, index: number) => (
                <AEIOUComp
                  name={item?.name}
                  content={item?.content}
                  key={index}
                  setAeiouData={setAeiouData}
                />
              )
            )}
          </div>
        </div>
      </div>
      <div className="ml-24">
        <ImplicitExplicit
          implicitDetails={implicitDetailsData}
          setImplicitDetails={setImplicitDetailsData}
          aeiouData={aeiouData}
          colItems={colItems}
        />
      </div>

      <Blog1 />
      <div className="fixed bottom-0 right-0 m-4">
        <button className="flex flex-row px-4 py-2 text-lg text-white align-middle bg-blue-500 rounded-md ">
          Proceed
          <div className="inline-block px-1 py-1">
            <img
              src="/dashboard/empathise/proceed_arrow.svg"
              alt="Proceed Arrow"
            />
          </div>
        </button>
        <Sidebar
          currentPage={"empathise"}
          essayData={JSON.stringify(aeiouData)}
        />
      </div>
    </>
  );
}
