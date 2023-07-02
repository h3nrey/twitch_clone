"use server"
import { ThemeContext } from "@/ThemeContext";
import { Moon, Check } from "phosphor-react";
import { useContext } from "react";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useContext(ThemeContext)

    function switchTheme() {
        if (theme == "dark") {
            setTheme("light")
            window.localStorage.setItem("theme", "light")
        } else if (theme == "light") {
            setTheme("dark")
            window.localStorage.setItem("theme", "dark")
        }
    }
    return (
        <div className="flex justify-between">
            <span className="flex gap-1">
                <Moon weight="bold" size={20} />
                Dark Theme
            </span>
            <button
                onClick={() => switchTheme()}
                className="bg-bg dark:bg-transparent relative w-[2.5rem] border-principal dark:border-lightMode_black border-2 rounded-full p-[1px]">
                <Check className="text-principal" weight="bold" />
                <span
                    className="absolute transition  w-4 h-4 top-1/2 left-0 -translate-y-1/2 rounded-full flex items-center justify-center p-[1px]"
                    style={{ transform: theme == "dark" ? "translate(0, -50%)" : "translate(120%, -50%)" }}
                >
                    <span className="w-full h-full bg-principal dark:bg-lightMode_black rounded-full"></span>
                </span>
            </button>
        </div>
    )
}