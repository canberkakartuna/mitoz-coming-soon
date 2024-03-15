"use client";
import data from "../../data/data";
import { ThemeSwitcher } from "../../components/ThemeSwitcher";
import React from "react";

export default function Home() {
  const { description, copyrightText, title } = data;
  const [state, setState] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      const endDate = new Date("2024-06-17T23:59:59").getTime();
      const now = new Date().getTime();
      const distance = endDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setState({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
          {state.days > 0 && (
            <p>
              <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-slate-100">
                {state.days}
              </span>
              <span className="text-2xl sm:text-3xl lg:text-4xl font-thin text-slate-800 dark:text-slate-100">
                d &nbsp;
              </span>
              <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-slate-100">
                {state.hours}
              </span>
              <span className="text-2xl sm:text-3xl lg:text-4xl font-thin text-slate-800 dark:text-slate-100">
                h &nbsp;
              </span>
              <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-slate-100">
                {state.minutes}
              </span>
              <span className="text-2xl sm:text-3xl lg:text-4xl font-thin text-slate-800 dark:text-slate-100">
                m &nbsp;
              </span>
              <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-slate-100">
                {state.seconds}
              </span>
              <span className="text-2xl sm:text-3xl lg:text-4xl font-thin text-slate-800 dark:text-slate-100">
                s
              </span>
            </p>
          )}
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
