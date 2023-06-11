import { ReactNode, useState } from "react"
import SideBar from "./Sidebar"
import Header from "./Header"
import { SidebarContext } from "@/SidebarContext"

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function Layout({ children }: any) {
	const [sidebarHidden, setSideBarHidden] = useState(false)
	function HandleSideBar(state: boolean) {
		setSideBarHidden(state)
	}

	const style = {
		marginLeft: sidebarHidden ? '3rem' : '15rem',
	}
	return (
		<div className={`font-sans ${inter.variable}`}>
			<Header />
			<main className="mt-[3.2rem] bg-bg" style={style}>
				<SideBar onStateChange={HandleSideBar} />

				<div className='px-[1.875rem] pt-10' >
					<SidebarContext.Provider value={sidebarHidden}>
						{children}
					</SidebarContext.Provider>
				</div>
			</main>
		</div>
	)
}