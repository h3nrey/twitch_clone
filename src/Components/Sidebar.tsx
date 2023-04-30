import { ArrowLineLeft, ArrowLineRight, ArrowsDownUp } from "phosphor-react";
import { useState } from "react";
import SidebarChannel from "./SidebarChannel";

export default function SideBar(){
    const [hidden, setHidden] = useState(true);

    return(
        <div className="bg-darkgray w-fit pt-2 flex flex-col items-center text-text h-[93vh]">
            <header className="flex justify-between p-2 items-center w-full">
                <h2 className={`font-semibold ${hidden ? "hidden": "block"}`}>Para você</h2>
                <button 
                    className="flex items-center justify-center p-[0.3rem] rounded-md
                    hover:bg-gray hover:outline hover:outline-2 hover:outline-purple-600 transition group" 
                    onClick={() => setHidden(!hidden)}
                >   
                    { hidden ? (
                        <ArrowLineRight weight="bold"/>
                    ) :  (
                        <ArrowLineLeft weight="bold"/>
                    )
                    }
                    
                    
                </button>
            </header>
            
            { !hidden && 
                <div className="flex items-center justify-between p-2 w-full">
                    <p className={`uppercase text-[0.8125rem] ${hidden ? "hidden": "block"}`}>canais seguidos</p>
                    <button className={`${hidden ? "hidden": "block"} p-[0.3rem]`}>
                        <ArrowsDownUp weight="bold"/>
                    </button>
                </div>
            }
            

            <SidebarChannel 
                hidden={hidden} 
                channelAvatar="https://static-cdn.jtvnw.net/jtv_user_pictures/7b68f6a2-1316-47c9-98e6-4413dad16837-profile_image-70x70.jpg"
                channelName="vitongemaplys"
                channelURL="/vitongemaplys" 
            />
        </div>
    )
}