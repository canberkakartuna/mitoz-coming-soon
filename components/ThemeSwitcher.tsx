"use client";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="">
      <button
        className="text-slate-500 p-2 bg rounded-full border-slate-50	"
        onClick={() => {
          currentTheme === "light" ? setTheme("dark") : setTheme("light");
        }}
      >
        {currentTheme === "light" ? "DARK" : "LIGHT"}
      </button>
      {/* {currentTheme === "light" ? (
            <MoonIcon
                className="size-5 cursor-pointer text-slate-700"
                onClick={() => {
                    setTheme("dark")
                }}
            />
      ) : (
        <SunIcon
            className="size-5 cursor-pointer text-yellow-400"
            onClick={() => {
                setTheme("light")
            }}
        />
      )} */}
    </div>
  );
};
