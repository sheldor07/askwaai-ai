import { ChangeEvent, Dispatch, SetStateAction } from "react";

export default function AEIOUComp(props: {
  name: string;
  content: string;
  setAeiouData: any;
}) {
  const firstLetter = props.name.substring(0, 1);
  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    props.setAeiouData((prevState: any) => ({
      ...prevState,
      [firstLetter]: {
        name: props.name,
        content: e.target.value,
      },
    }));
  }
  return (
    <div className="flex flex-col text-center border-r-4 border-dashed min-w-72">
      <div className="flex flex-row justify-center ">
        <h1 className="text-5xl text-black">{props.name.substring(0, 1)}</h1>
        <p className="inline-block text-lg text-black align-middle">
          {props.name.substring(1)}
        </p>
      </div>
      <div className="block w-full min-h-[500px]">
        <textarea
          className="p-4 mt-10 overflow-auto text-sm text-left text-gray-900 rounded-lg shadow-sm h-4/5 sm:text-md focus:ring-blue-500 focus:border-blue-500 "
          onChange={(e)=>{handleChange(e)}}></textarea>
      </div>

      <p className="p-2 text-sm text-slate-400">{props.content}</p>
    </div>
  );
}
