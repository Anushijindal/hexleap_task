import React from "react";
import { useSelector } from "react-redux";

const Collection = () => {
  const darkMode = useSelector((store) => store.data.darkMode);
  return (
    <div
      className={`${
        darkMode
          ? "mt-10 ml-20 mr-20 mb-10 bg-[#1a1b20]"
          : "mt-10 mb-10 mr-20 ml-20"
      }`}
    >
      <h1 className="text-center text-5xl font-bold mt-10 p-4 animate-bounce">
        Collection Spotlight
      </h1>
      <h1 className="text-center w-1/2 ml-auto mr-auto my-5 animate-pulse">
        Discover extraordinary moments with our Spotlight Collection
        metatickets—exclusive access to premium events for an unforgettable
        experience. Grab yours today!
      </h1>
      <div className=" ml-auto mr-auto pb-10 flex flex-row">
        <h1 className="ml-10 mt-auto mb-auto text-3xl mr-6 text-blue-500 border-2 border-blue-500 px-3 py-2">
          {"<"}
        </h1>
        <div
          className={`${
            darkMode
              ? "h-[625px] max-w-[257px] ml-32 border-[#3b3e47] bg-[#3b3e47] border-2 shadow-lg p-3"
              : "h-[625px] max-w-[257px] ml-32  border-2 shadow-lg p-3"
          }`}
        >
          <img
            className={`${
              darkMode
                ? "border-b-2 pb-6 border-white border-dashed"
                : "border-b-2 pb-6 border-black border-dashed"
            }`}
            alt="logo"
            src="https://hexleap-project-pied.vercel.app/_next/image?url=%2Fimages%2Fspotlight-1.jpg&w=1920&q=75"
          />
          <h1 className={`${darkMode?"shadow-[inset_7px_0px_8px_0px_#00000015] w-[20px] h-[20px] bg-[#1a1b20] absolute rounded-full right-[902px]":"shadow-[inset_7px_0px_8px_0px_#00000015] w-[20px] h-[20px] bg-white absolute rounded-full right-[902px]"}`}></h1>
          <h1 className={`${darkMode?"shadow-[inset_-7px_0px_8px_0px_#00000015] w-[20px] h-[20px] bg-[#1a1b20] absolute rounded-full right-[1152px]":"shadow-[inset_-7px_0px_8px_0px_#00000015] w-[20px] h-[20px] bg-white absolute rounded-full right-[1152px]"}`}></h1>
          <h1 className="font-bold my-1">Las Vegas Aviators</h1>
          <div className="flex flex-row my-2 justify-center font-semibold">
            <h1
              className={`${
                darkMode
                  ? "border-r-2 border-white px-2"
                  : "border-r-2 border-black px-2"
              }`}
            >
              OCT 15
            </h1>
            <h1
              className={`${
                darkMode
                  ? "border-r-2 border-white px-2"
                  : "border-r-2 border-black px-2"
              }`}
            >
              SUN
            </h1>
            <h1 className="px-2">4:30 PM</h1>
          </div>
          <h1 className="text-center">Las Vegas Ballpark, Las Vegas, Nevada</h1>
          <button className="bg-black text-white w-full py-1 my-2 hover:bg-slate-900">
            Take Flight Collection
          </button>
        </div>
        <div
          className={`${
            darkMode
              ? "h-[625px] max-w-[257px] mx-6 border-2 border-[#3b3e47] bg-[#3b3e47] shadow-lg p-3"
              : "h-[625px] max-w-[257px] mx-6 border-2 shadow-lg p-3"
          }`}
        >
          <img
            className={`${
              darkMode
                ? "border-b-2 pb-6 border-white border-dashed"
                : "border-b-2 pb-6 border-black border-dashed"
            }`}
            alt="logo"
            src="https://hexleap-project-pied.vercel.app/_next/image?url=%2Fimages%2Fspotlight-2.jpg&w=1920&q=75"
          />
          <h1 className={`${darkMode?"shadow-[inset_7px_0px_8px_0px_#00000015] w-[20px] h-[20px] bg-[#1a1b20] absolute  rounded-full right-[623px]":"shadow-[inset_7px_0px_8px_0px_#00000015] w-[20px] h-[20px] bg-white absolute  rounded-full right-[623px]"}`}></h1>
          <h1 className={`${darkMode?"shadow-[inset_-7px_0px_8px_0px_#00000015] w-[20px] h-[20px] bg-[#1a1b20] absolute  rounded-full right-[875px]":"shadow-[inset_-7px_0px_8px_0px_#00000015] w-[20px] h-[20px] bg-white absolute  rounded-full right-[875px]"}`}></h1>
          <h1 className="font-bold my-1">Sacramento River Cats</h1>
          <div className="flex flex-row my-2 justify-center font-semibold">
            <h1
              className={`${
                darkMode
                  ? "border-r-2 border-white px-2"
                  : "border-r-2 border-black px-2"
              }`}
            >
              OCT 15
            </h1>
            <h1
              className={`${
                darkMode
                  ? "border-r-2 border-white px-2"
                  : "border-r-2 border-black px-2"
              }`}
            >
              SUN
            </h1>
            <h1 className="px-2">4:30 PM</h1>
          </div>
          <h1 className="text-center">
            Sutter Health Park, Sacramento, California
          </h1>
          <button className="bg-black text-white w-full py-1 my-2 hover:bg-slate-900">
            Orange Collection
          </button>
        </div>
        <div
          className={`${
            darkMode
              ? "h-[625px] max-w-[257px] ml-6 mr-32 border-2 border-[#3b3e47] bg-[#3b3e47] shadow-lg p-3"
              : "h-[625px] max-w-[257px] ml-6 mr-32 border-2 shadow-lg p-3"
          }`}
        >
          <img
            className={`${
              darkMode
                ? "border-b-2 pb-6 border-white border-dashed"
                : "border-b-2 pb-6 border-black border-dashed"
            }`}
            alt="logo"
            src="https://hexleap-project-pied.vercel.app/_next/image?url=%2Fimages%2Fspotlight-1.jpg&w=1920&q=75"
          />
          <h1 className={`${darkMode?"shadow-[inset_7px_0px_8px_0px_#00000015] w-[20px] h-[20px] bg-[#1a1b20] absolute  rounded-full right-[323px]":"shadow-[inset_7px_0px_8px_0px_#00000015] w-[20px] h-[20px] bg-white absolute  rounded-full right-[323px]"}`}></h1>
          <h1 className={`${darkMode?"shadow-[inset_-7px_0px_8px_0px_#00000015] w-[20px] h-[20px] bg-[#1a1b20] absolute  rounded-full right-[575px]":"shadow-[inset_-7px_0px_8px_0px_#00000015] w-[20px] h-[20px] bg-white absolute  rounded-full right-[575px]"}`}></h1>
          <h1 className="font-bold my-1">Las Vegas Aviators</h1>
          <div className="flex flex-row my-2 justify-center font-semibold">
            <h1
              className={`${
                darkMode
                  ? "border-r-2 border-white px-2"
                  : "border-r-2 border-black px-2"
              }`}
            >
              OCT 15
            </h1>
            <h1
              className={`${
                darkMode
                  ? "border-r-2 border-white px-2"
                  : "border-r-2 border-black px-2"
              }`}
            >
              SUN
            </h1>
            <h1 className="px-2">4:30 PM</h1>
          </div>
          <h1 className="text-center">Las Vegas Ballpark, Las Vegas, Nevada</h1>
          <button className="bg-black text-white w-full py-1 my-2 hover:bg-slate-900">
            Take Flight Collection
          </button>
        </div>
        <h1 className="mr-10 mt-auto mb-auto text-3xl text-blue-500 border-2 border-blue-500 px-3 py-2">
          {">"}
        </h1>
      </div>
    </div>
  );
};
export default Collection;
