import TimePoint from "./TimePoint";
export default function Timeline() {
  //create an array of statements that contain the name of the step and whether it is a top or bottom step
  //map through the array and create a TimePoint for each statement
  //return the array of TimePoints
  const steps = [
    {
      name: "Empathize",
      content:
        "You will use the AEIOU framework to categorise and interpret observations gathered during your field study.",
      top: false,
    },
    {
      name: "Gather Insights",
      content: "Abstract implicit details from your explicit findings.",
      top: true,
    },
    {
      name: "Craft Question",
      content: "Come up with potential research questions for your Op-Ed.",
      top: false,
    },
    {
      name: "Introduce Op-Ed",
      content:
        "Narrowing down observations to introduce the readers to your research question.",
      top: true,
    },
    {
      name: "Find Sources",
      content: "Start finding sources to support your stand.",
      top: false,
    },
    {
      name: "Comprehend & Collate",
      content:
        "Collate & compare the key ideas from the 2 sources. Find and list what are the gaps not being addressed that is equally important. ",
      top: true,
    },
    {
      name: "Identify & Ideate",
      content:
        "Write your idea that differs from the perspective of the 2 sources. ",
      top: false,
    },
    {
      name: "Summarise & Reflect",
      content:
        "Put the 2 sources together to have a conversation about your RQ and bring your perspective about it. ",
      top: true,
    },
    {
      name: "Conclude & refine",
      content:
        "Conclude your Op-Ed and do your final checks before submitting on Turnitin.",
      top: false,
    },
  ];
  return (
    <div className="flex mt-48 justify-items-center">
      <div className="container mx-auto">
        <div className="relative ">
          {/* Timeline line */}
          <div className="absolute w-full h-1 transform -translate-y-1/2 bg-blue-500 top-1/2"></div>

          {/* Timeline circles */}
          <div className="flex justify-between w-full">
            {steps.map((step, index) => {
              return (
                <TimePoint
                  name={step.name}
                  top={step.top}
                  key={index}
                  content={step.content}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
