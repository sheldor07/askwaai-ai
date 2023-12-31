"use client";
import Link from "next/link";
import { useState, useContext } from "react";
import { UserContext } from "@/app/dashboard/layout";
const VerticalNavbar = (props: any) => {
  const user = useContext(UserContext);
  const [userEmail, setUserEmail] = useState(user?.email);
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: "Home", link: "/dashboard/home" },
    { name: "Empathise", link: "/dashboard/empathise" },
    { name: "Gather Insights", link: "/dashboard/empathise" },
    { name: "Craft Question", link: "/dashboard/question" },
    { name: "Introduce Op-Ed", link: "/dashboard/introduce" },
    { name: "Find Sources", link: "/dashboard/sources" },
    { name: "Comprehend & Collate", link: "/dashboard/collate" },
    { name: "Identify & Ideate", link: "/dashboard/ideate" },
    { name: "Summarise & Reflect", link: "/dashboard/ideate" },
    { name: "Conclude & Refine", link: "/dashboard/conclude" },
  ];

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`z-30 fixed duration-100 ease-in pb-10  min-h-screen rounded-r-lg   bg-gray-800 text-white flex flex-col  ${
        isOpen ? "w-64" : "w-16"
      }`}>
      <div className="flex flex-row justify-between p-4">
        {!isOpen ? (
          <>
            <button
              className="w-full text-center translate-x-16 bg-white rounded-md "
              onClick={toggleNavbar}>
              <div className="w-5 h-5 mx-auto">
                <img src="/navbar-svg/toggle.svg" alt="Toggle SVG" />
              </div>
            </button>
          </>
        ) : (
          <>
            <h1 className="text-xl font-bold">Roadmap</h1>
            <button
              className="text-center bg-white rounded-md "
              onClick={toggleNavbar}>
              <div className="w-5 h-5 mx-auto">
                <img src="/navbar-svg/close.svg" alt="Close" />
              </div>
            </button>
          </>
        )}
      </div>
      <div className="flex-grow overflow-y-auto">
        <nav className="flex flex-col flex-1 p-2">
          {navItems.map((item, index) => (
            <div key={index} className="flex flex-col">
              <Link
                href={`${item.link}`}
                className="flex flex-row w-full p-2 text-left align-items-center"
                key={index}>
                <div className="w-8 h-8">
                  <img src={`/navbar-svg/${index}.svg`} alt={item.name} />
                </div>
                <span
                  className={`absolute text-sm left-12  ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}>
                  {item.name}
                </span>
              </Link>
            </div>
          ))}
        </nav>
      </div>
      {isOpen ? (
        <div className="flex flex-row w-5/6 p-3 mx-auto text-left rounded-lg bg-slate-600 align-items-center">
          <div className="w-8 h-8">
            <img src={`/navbar-svg/avatar.svg`} alt="use avatar" />
          </div>
          <div className="flex flex-col px-2">
            <span className="font-bold text-md ">{userEmail}</span>
            <span className="text-xs text-slate-300"> {userEmail}</span>
          </div>
        </div>
      ) : (
        <div className="flex flex-row w-full p-2 text-left align-items-center">
          <div className="w-8 h-8">
            <img src={`/navbar-svg/avatar.svg`} alt="use avatar" />
          </div>
        </div>
      )}
    </div>
  );
};

export default VerticalNavbar;
