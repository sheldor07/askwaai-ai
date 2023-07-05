import Timeline from "@/components/dashboard/home/Timeline";

export default async function Home() {
  return (
    <div className="flex h-screen bg-white">
      <div className="flex flex-col w-full ml-20">
        <div className="py-10 text-center">
          <p className="text-sm font-light text-violet-400">
            THE ULTIMATE CC0001 WRITING TOOL
          </p>
          <h1 className="py-4 text-5xl font-black text-black">
            Welcome to AskWaai
          </h1>
          <p className="w-full text-sm text-slate-400">
            A workspace to help you brainstorm ideas and write better with an AI
            assistant.
          </p>
        </div>
        <div className="flex flex-col w-2/5 px-10 text-left">
          <h2 className="text-3xl text-black underline">Roadmap</h2>
          <p className="text-lg text-black whitespace-pre-line">
            You will go through each design thinking stages that will guide you
            to write a persuasive Op-Ed
          </p>
        </div>
        <div className="w-5/6 mx-auto mt-10">
          <Timeline />
        </div>
      </div>
    </div>
  );
}
