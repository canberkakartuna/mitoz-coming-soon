"use client";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      <button
        className="text-slate-500 p-2 bg rounded-full border-slate-50	"
        onClick={() => {
          currentTheme === "light" ? setTheme("dark") : setTheme("light");
        }}
      >
        {currentTheme === "light" ? "DARK" : "LIGHT"}
      </button>
    </div>
  );
};
