import data from "../../data/data";
import { ThemeSwitcher } from "../../components/ThemeSwitcher";
import React from "react";

export default function Home() {
  const { description, copyrightText, title } = data;

  return (
    <>
      <main className="h-screen flex flex-col items-center justify-between p-5 lg:p-12">
        <ThemeSwitcher />
        <div className="flex-1 relative flex flex-col  place-items-center ">
          <h2 className="text-center font-heading m-10 text-6xl sm:text-7xl lg:text-8xl leading-[5rem] sm:leading-[7rem] lg:leading-[7rem] font-black	 ">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              {title}
            </span>
            <span className="">⏳</span>
          </h2>
          <p
            className="text-2xl md:text-3xl px-6 max-w-3xl text-center m-5 text-slate-800 dark:text-slate-100 font-thin"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          ></p>
        </div>

        <footer className="text-slate-500 text-center">
          <div>
            <p
              dangerouslySetInnerHTML={{
                __html: copyrightText,
              }}
            ></p>
          </div>
        </footer>
      </main>
    </>
  );
}
