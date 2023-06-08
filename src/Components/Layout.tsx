import { ReactNode, useState } from "react"
import SideBar from "./Sidebar"
import Header from "./Header"
import { SidebarContext } from "@/SidebarContext"

interface LayoutProps {
	Children: React.ElementType
}
export default function Layout({ children }: any) {
	const [sidebarHidden, setSideBarHidden] = useState(false)
	function HandleSideBar(state: boolean) {
		setSideBarHidden(state)
	}

	const style = {
		marginLeft: sidebarHidden ? '3rem' : '15rem',
	}
	return (
		<>
			<Header />
			<main className="pt-[3rem] bg-bg" style={style}>
				<SideBar onStateChange={HandleSideBar} />

				<div className='px-[1.875rem]' >
					<SidebarContext.Provider value={sidebarHidden}>
						{children}
					</SidebarContext.Provider>
				</div>
			</main>
		</>
	)
}