import React, { useEffect, useState } from "react";
import { sportCard } from "../utils/sportData";
import { useSelector } from "react-redux";
const Sports = () => {
  const [data, setdata] = useState([]);
  // console.log(sportCard)
  useEffect(() => {
    setdata(sportCard);
  }, []);
  const darkMode = useSelector((store) => store.data.darkMode);
  return (
    <div className="">
      <h1 className=" font-bold text-2xl border-b-4 border-blue-500 w-20 animate-bounce shadow-md">
        Sports
      </h1>
      <div className="flex flex-row mx-20 my-4">
        {data?.map((item, index) => {
          return (
            <div
              key={index}
              className={`${
                darkMode
                  ? "w-1/5 border-[#3b3e47] border-2 m-1 bg-[#3b3e47] p-2 shadow-xl hover:border-yellow-400 hover:border-4"
                  : "w-1/5 border-bg-[#3b3e47] border-2 m-1 p-2 shadow-xl hover:border-yellow-400 hover:border-4"
              }`}
            >
              <img alt="logo" className="w-full h-64" src={item?.img} />
              <h1 className="mt-2">
                {" "}
                <span className="font-bold">{item?.name}</span>
              </h1>
              <div
                className={`${
                  darkMode
                    ? "flex flex-row justify-between border-2 border-[#292B32] bg-[#292B32] mx-1 my-2 px-2 py-1"
                    : "flex flex-row justify-between border-2 border-gray-100 bg-gray-100 mx-1 my-2 px-2 py-1"
                }`}
              >
                <h1>
                  Total Events <br />{" "}
                  <span className="font-bold">{item?.events} Events</span>
                </h1>
                <h1>
                  Sport <br /> <span className="font-bold">{item?.sport}</span>
                </h1>
              </div>
            </div>
          );
        })}
        <div
          className={`${
            darkMode
              ? "w-1/5 border-2 m-1 p-2 shadow-xl bg-[#3b3e47] border-[#3b3e47] hover:border-yellow-400 hover:border-4"
              : "w-1/5 border-2 m-1 p-2 shadow-xl hover:border-yellow-400 hover:border-4"
          }`}
        >
          <button className="absolute bg-black text-white right-32 px-2">
            Ad
          </button>
          <img
            alt="logo"
            className="w-full h-52"
            src="https://hexleap-project-pied.vercel.app/_next/image?url=%2Fimages%2Fad.jpg&w=1920&q=75"
          />

          <h1 className="font-bold">Advertisement Title</h1>

          <p className="text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sports;
