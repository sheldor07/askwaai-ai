import ImplicitDetails from "./ImplicitDetails";
export default function Blog1() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 p-16 ml-24">
        <div className="flex flex-col row-span-2">
          <h1 className="my-4 text-2xl font-bold">Blog1</h1>
          <div className="flex flex-col p-12 border-2 border-black ">
            <div className="flex flex-row justify-between ">
              <p className="text-lg">
                Title: The Decline of Community Service{" "}
              </p>
              <p className="text-sm font-underline">word count:87</p>{" "}
            </div>
            <textarea className="w-full min-h-[400px] outline-none h-1/2"></textarea>
          </div>
        </div>
        <div className="flex flex-col h-full align-middle">
          <ImplicitDetails />
        </div>
      </div>
    </>
  );
}
