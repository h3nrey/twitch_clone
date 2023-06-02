import SideBar from "@/Components/Sidebar";
import Link from "next/link";
import { useState } from "react";

export default function App(){
    const [sidebarHidden, setSideBarHidden] = useState(false);

    function HandleSideBar(state: boolean) {
        setSideBarHidden(state);
    }

    const categories = [
        {
            icon: "",
            title: "Games"
        },
        {
            icon: "",
            title: "IRL"
        },
        {
            icon: "",
            title: "Music"
        },
        {
            icon: "",
            title: "Esports"
        },
        {
            icon: "",
            title: "Creative"
        },
    ]

    const style = {
        marginLeft: sidebarHidden ? "3rem" : "12.5rem"
      }
    return(
        <div className="bg-bg pt-[3rem] px-4" style={style} >
            <SideBar onStateChange={HandleSideBar}/>
            <h2 className="text-[3.375rem] font-bold text-text">Browse</h2>
            <div className="flex gap-2">
                {categories.map(categorie => (
                    <Link href={`/browse/${categorie.title}`} className="pl-4 pr-16 py-1 w-[25%] bg-principal rounded">
                        <p className="font-bold text-text text-[1.5rem]">{categorie.title}</p>

                    </Link>
                ))}   
            </div>
        </div>

    )
} 