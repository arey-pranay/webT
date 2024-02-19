import logo from "./assets/girlDc.gif";
import Header from "./components/Header";
import VanillaTilt from "vanilla-tilt";
import { LampDemo } from "./components/ui/lamp";
import { useEffect, useRef } from "react";
export default function App() {
  const leftImageRef = useRef(null);
  useEffect(() => {
    const element = leftImageRef.current;

    if (element) {
      VanillaTilt.init(element);
      element.addEventListener("tiltChange", callback);
    }

    return () => {
      if (element) {
        element.vanillaTilt.destroy();
      }
    };
  }, []);

  const callback = (event) => {
    console.log("Tilt changed:", event);
  };
  // data-tilt data-tilt-glare data-tilt-max-glare="0.8"

  return (
    <>
      {/* <Header /> */}
      <div className="flex flex-col md:flex-row h-screen w-full md:h-[100vh] bg-slate-500 overflow-x-hidden">
        <div className="w-full md:w-2/3 h-screen md:pt-16 bg-black">
          <LampDemo />
        </div>
        <div className="w-full md:w-1/3 h-[5vh] md:h-screen bg-black flex items-center md:pb-32 overflow-hidden">
          <img
            src={logo}
            alt="logos"
            className="md:max-h-2/3 md:mt-12 scale-200"
            ref={leftImageRef}
            data-tilt
            data-tilt-perspective="150"
            data-tilt-axis="null"
          />
        </div>
      </div>
    </>
  );
}
