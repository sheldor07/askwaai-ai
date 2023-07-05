"use client";
import { useState, useEffect } from "react";
export default function ImplicitExplicit(props: any) {
  const [showDetail, setShowDetail] = useState("A");
  useEffect(() => {
    const button = document.getElementById("button" + showDetail);
    button?.classList.add("text-violet-500");
    return () => {
      button?.classList.remove("text-violet-500");
    };
  }, [showDetail]);

  function handleChange(e: any) {
    props.setImplicitDetails(e.target.value);
    
  }
  console.log(props.implicitDetails)

  return (
    <>
      <div className="grid grid-cols-5 gap-4 p-16">
        <div className="flex flex-col w-1/3">
          {Object.keys(props.aeiouData).map((item, index) => (
            <button
              key={index}
              id={"button" + item}
              className="flex flex-row my-12 justify-left"
              onClick={() => {
                setShowDetail(item);
              }}>
              <h1 className="text-5xl text-black">
                {props.aeiouData[item]?.name?.substring(0, 1)}
              </h1>
              <p className="inline-block text-lg align-middle">
                {props.aeiouData[item]?.name?.substring(1)}
              </p>
            </button>
          ))}
        </div>
        <div className="flex flex-col w-full min-h-full col-span-2 text-center bg-white border-4 border-blue-500 border-dashed rounded-xl">
          <h1 className="p-12 text-4xl font-bold text-black">
            Explicit Details
          </h1>
          <p className="my-4 text-black text-md">
            {props.aeiouData[showDetail]?.content}
          </p>
        </div>
        <div className="flex flex-col w-full min-h-full col-span-2 text-center bg-white border-4 border-dashed border-slate-500 rounded-xl">
          <h1 className="p-12 text-4xl font-bold text-black">
            Implicit Details
          </h1>
          <textarea
            className="w-full min-h-[400px] outline-none h-1/2"
            onChange={(e) => {
              handleChange(e);
            }}
            value={props.implicitDetails}></textarea>
        </div>
      </div>
    </>
  );
}
