import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import "./lamp.css";
export function LampDemo() {
  return (
    <div className="max-h-full">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: -180 }}
          transition={{
            delay: 0.2,
            duration: 1,
            // ease: "easeInOut",
          }}
          className="mt-0 to-slate-500 pb-16 md:pb-0 md:py-4 text-center text-4xl font-medium  text-black md:text-5xl "
        >
          {" "}
          <div className="cursivee translate-y-24  md:translate-y-36  px-8 md:px-0">
            <h1 className="mb-8">🎧 V-Vibe 🎤</h1>
            <p className="text-[1.5rem]">
              The new way of listening music together
            </p>
          </div>
        </motion.h1>
      </LampContainer>
      <div className="-translate-y-80 md:-translate-y-52 flex flex-col gap-10 max-w-2xl mx-auto ">
        {" "}
        <div className="text-sm text-purple-200 font-mono mb-4  px-8 md:px-0">
          <p>
            Welcome to the ultimate virtual music hostel experience! With our
            platform, you can easily create or join rooms, where you and your
            friends can vibe together to your favorite tunes from anywhere.{" "}
            <br /> <br />{" "}
            <b>
              {" "}
              <i>PS: Try Hovering The Dancer from head to toe..</i>
            </b>
          </p>
        </div>
        <div className=" flex gap-12 justify-around w-full text-lg font-bold  px-8 md:px-0">
          <button className="h-12 w-72 rounded-xl text-black bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-padding backdrop-filter backdrop-blur-lg hover:bg-black hover:text-purple-500 ease-in-out relative overflow-hidden hover:scale-75 transition-all duration-300">
            <span className="absolute inset-0 bg-gradient-to-r from-purple-800 to-purple-500 animate-moveBackground"></span>
            <span className="relative z-10 text-black">Create Party</span>
          </button>
          {/* <button className="h-12 w-72  border border-purple-500 rounded-xl text-purple-500 hover:text-black hover:bg-purple-500  ease-in-out transition-all duration-200"> */}
          <button className="box h-12 w-72 rounded-xl bg-black hover:scale-75 transition-all duration-300">
            Join Party
          </button>
        </div>
      </div>
    </div>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-black w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-purple-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-purple-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-purple-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-purple-400 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-white "
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black "></div>
      </div>

      <div className="relative z-50 flex -translate-y-64 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
