import { useState, useEffect } from "react";
import ImplicitDetails from "./ImplicitDetails";
export default function ImplicietExplicit(props: any) {
  const [showDetail, setShowDetail] = useState(0);
  //create a hook such that if showdetail changes, then we turn the background color of the button to blue
  useEffect(() => {
    const button = document.getElementById("button" + showDetail);
    button?.classList.add("text-violet-500");
    return () => {
      button?.classList.remove("text-violet-500");
    };
  }, [showDetail]);

  return (
    <>
      <div className="grid justify-between grid-cols-2 p-16 ">
        <div className="flex flex-col">
          {" "}
          {/* Wrap in a div with flex-col */}
          <h1 className="text-4xl font-bold text-black">Gather Insights</h1>
          <p className="my-4 text-blue-500 text-md">THEME: PLACES</p>
        </div>
        <div className="ml-auto">
          {" "}
          {/* Move the purple box and use ml-auto class */}
          <p className="p-8 ml-24 text-right text-black rounded-xl bg-violet-200">
            From the AEIOU exercise that you have done earlier, identity what
            are the implicit details - what can you infer from the observation.
            Find a break in the pattern (an anomaly), what is confusing and
            puzzling? What is unsaid or under the surface?{" "}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4 p-16">
        <div className="flex flex-col w-1/3">
          {props.colItems.map((item, index) => (
            <button
              key={index}
              id={"button" + index}
              className="flex flex-row my-12 justify-left "
              onClick={() => {
                setShowDetail(index);
              }}>
              <h1 className="text-5xl">{item.name.substring(0, 1)}</h1>
              <p className="inline-block text-lg align-middle">
                {item.name.substring(1)}
              </p>
            </button>
          ))}
        </div>
        <div className="flex flex-col w-full min-h-full col-span-2 text-center bg-white border-4 border-blue-500 border-dashed rounded-xl">
          <h1 className="p-12 text-4xl font-bold text-black">
            Explicit Details{" "}
          </h1>
          <p className="my-4 text-black text-md">
            {props.colItems[showDetail].content}
          </p>
        </div>
        <div className="col-span-2">
          <ImplicitDetails disabled={true} />
        </div>
      </div>
    </>
  );
}
