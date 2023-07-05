"use client";
import { useEffect, useState } from "react";
export default function ImplicitDetails(props) {
  const [implicitContent, setImplicitContent] = useState("");
  // create a hook to store the implicit details
  useEffect(() => {
    // fetch the implicit details from the server
    fetch("/api/implicit")
      .then((res) => res.json())
      .then((data) => {
        setImplicitContent(data.implicit);
      });
  }, []);

  return (
    <div className="flex flex-col w-full min-h-full col-span-2 text-center bg-white border-4 border-dashed border-slate-500 rounded-xl ">
      <h1 className="p-12 text-4xl font-bold text-black">Implicit Details </h1>
      {!props.disabled ? (
        <textarea
          disabled
          className="w-full min-h-[450px]  text-black  text-md "></textarea>
      ) : (
        <textarea className="w-full min-h-[450px]  text-black text-md "></textarea>
      )}
    </div>
  );
}
