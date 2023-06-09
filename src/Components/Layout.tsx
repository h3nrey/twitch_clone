"use client"
import { ReactNode, useEffect, useState } from "react"
import { cookies } from "next/headers"
import SideBar from "./Sidebar"
import Header from "./Header"
import { SidebarContext } from "@/SidebarContext"

import { Inter } from 'next/font/google'
import { ThemeContext } from "@/ThemeContext"
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function Layout({ children }: any) {
	const [sidebarHidden, setSideBarHidden] = useState(false)

	const [theme, setTheme] = useState("dark")
	const themeValue = { theme, setTheme };

	function HandleSideBar(state: boolean) {
		setSideBarHidden(state)
	}

	// Loading theme from local storage
	useEffect(() => {
		const localTheme = window.localStorage.getItem("theme")

		// if is loading for the first time and dont have the theme by default is going to be in dark mod
		if (!localTheme) {
			window.localStorage.setItem("theme", "dark")
		}

		if (typeof localTheme == "string") {
			setTheme(localTheme)
		}
	}, [])

	const style = {
		marginLeft: sidebarHidden ? '3.1rem' : '15rem',
	}
	return (
		<ThemeContext.Provider value={themeValue}>
			<div className={`font-sans ${inter.variable} ${theme}`}>
				<Header />
				<main className="mt-[3.2rem] bg-bg dark:bg-lightMode_gray" style={style}>
					<SideBar onStateChange={HandleSideBar} />

					<div className='px-[1.875rim] pte-10' >
						<SidebarContext.Provider value={sidebarHidden}>
							{children}
						</SidebarContext.Provider>
					</div>
				</main>
			</div>
		</ThemeContext.Provider>
	)
}