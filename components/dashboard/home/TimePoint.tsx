export default function TimePoint(props: any) {
  return (
    <div>
      {props.top ? (
        <div className="relative flex items-center text-center translate-x-1/2">
          <div className="absolute w-6 h-6 bg-blue-500 rounded-full"></div>

          <p className="absolute text-2xl font-bold text-center text-blue-500 -left-8 bottom-8">
            {props.name}
          </p>
          <p className="absolute p-4 w-[250px] text-sm text-left shadow-xl text-slate-500 -right-32 rounded-md bottom-28">
            {props.content}
          </p>
          <div className="absolute w-full h-2 transform bg-gray-400 left-1/2 top-1/2"></div>
        </div>
      ) : (
        <div className="relative flex items-center">
          <div className="absolute w-6 h-6 bg-blue-500 rounded-full"></div>
          <p className="absolute -mb-32 text-2xl font-bold text-center text-blue-500 -left-8 top-8">
            {props.name}
          </p>
          <p className="absolute p-4 w-[200px] text-sm text-left shadow-xl rounded-md  text-slate-500 -left-24 top-28 ">
            {props.content}
          </p>
          <div className="absolute w-full h-2 transform translate-x-1/2 bg-gray-400 left-1/2 top-1/2"></div>
        </div>
      )}
    </div>
  );
}
