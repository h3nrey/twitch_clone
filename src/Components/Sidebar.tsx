import { ArrowLineLeft, ArrowsDownUp } from "phosphor-react";
import { useState } from "react";

export default function SideBar(){
    const [hidden, setHidden] = useState(true);

    return(
        <div className="bg-darkgray w-fit p-2 flex flex-col gap-2 items-center text-text h-[91vh]">
            <header className="flex justify-between items-center w-full">
                <h2 className={`font-semibold ${hidden ? "hidden": "block"}`}>Para você</h2>
                <button onClick={() => setHidden(!hidden)}>
                    <ArrowLineLeft weight="bold"/>
                </button>
            </header>

            <div className="flex items-center justify-between w-full">
                <p className={`uppercase text-[0.8125rem] ${hidden ? "hidden": "block"}`}>canais seguidos</p>
                <button className={`${hidden ? "hidden": "block"}`}>
                    <ArrowsDownUp weight="bold"/>
                </button>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img 
                        className="rounded-full h-6"
                        src="https://static-cdn.jtvnw.net/jtv_user_pictures/7b68f6a2-1316-47c9-98e6-4413dad16837-profile_image-70x70.jpg" alt="" />
                    <p className={`${hidden ? "hidden": "block"}`}>vitongemaplys</p>
                </div>
                <span className={`text-[0.8125rem] text-lightgray ${hidden ? "hidden": "block"}`}>offline</span>
            </div>
        </div>
    )
}