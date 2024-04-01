import { useState } from "react";
import Collection from "./components/Collection";
import Sports from "./components/Sports";
import { useDispatch, useSelector } from "react-redux";
import { changeDarkMode } from "./utils/dataSlice";

function App() {
  const [isDark, setIsDark] = useState("false");
  const dispatch = useDispatch();
  const handleDark = () => {
    dispatch(changeDarkMode());
    setIsDark(!isDark);
  };
  const darkMode = useSelector((store) => store.data.darkMode);
  console.log(darkMode);
  return (
    <div
      className={`${
        darkMode
          ? "bg-[#292B32] text-white min-h-screen flex flex-col justify-center items-center gap-10 p-2 max-sm:p-4"
          : "bg-white text-black min-h-screen flex flex-col justify-center items-center gap-10 p-2 max-sm:p-4"
      }`}
    >
      <button
        className={`${
          darkMode
            ? "ml-auto -bottom-8 border-2 border-white px-3 py-1 text-2xl rounded-xl shadow-md shadow-white"
            : "ml-auto -bottom-8 border-2 border-black shadow-black px-2 py-1 text-2xl rounded-xl shadow-md"
        }`}
        onClick={handleDark}
      >
        {darkMode ? "☾" : "☼"}
      </button>
      <div className="px-7">
        <section className="w-full">
          <div className="">
            <Sports />
          </div>
          <div className="text-center mt-7">
            <button className="bg-blue-400 text-white px-2 py-1">
              See More
            </button>
          </div>
        </section>
        <section>
          <div className={`${darkMode ? "bg-[#292B32]" : "bg-white"}`}>
            <Collection />
          </div>
        </section>
      </div>
    </div>
  );
}
export default App;
