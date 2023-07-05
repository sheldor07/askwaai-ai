import { ChangeEvent } from "react";

export default function AEIOUComp(props: {
  name: string;
  content: string;
  setAEIOUData: any;
}) {
  const firstLetter = props.name.substring(0, 1);
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    props.setAeiouData((prevState: any) => ({
      ...prevState,
      [firstLetter]: e.target.value,
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
        <input
          type="text"
          className="p-4 mt-10 text-center text-gray-900 rounded-lg shadow-sm sm:text-md focus:ring-blue-500 focus:border-blue-500 "
          onChange={(e) => {
            handleChange(e);
          }}></input>
      </div>

      <p className="p-2 text-sm text-slate-400">{props.content}</p>
    </div>
  );
}
