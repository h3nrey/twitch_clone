import { ArrowLineLeft, ArrowLineRight, ArrowsDownUp } from "phosphor-react";
import { useEffect, useState } from "react";
import SidebarChannel from "./SidebarChannel";

interface SideBarProps {
    onStateChange: (state: boolean) => void;
}

export default function SideBar({ onStateChange }: SideBarProps) {
    const [hidden, setHidden] = useState(true);

    useEffect(() => {
        onStateChange(hidden)
    }, [hidden])

    return (
        <div
            className="fixed left-0 z-0 bg-darkgray dark:bg-lightMode_thinGray pt-2 flex flex-col w-[15rem] text-text dark:text-lightMode_black h-[93vh] items-start"
            style={{ width: hidden ? "fit-content" : "15rem" }}
        >
            <header className="flex justify-between p-2 items-center w-full">
                <h2 className={`font-semibold text-[1.125rem] ${hidden ? "hidden" : "block"}`}>Para Você</h2>
                <button
                    className="flex items-center justify-center p-[0.3rem] rounded-md
                    hover:bg-gray dark:hover:bg-lightMode_darkGray hover:outline hover:outline-2 hover:outline-principal dark:hover:outline-lightMode_thinBlack transition group md:hidden"
                    onClick={() => setHidden(!hidden)}
                >
                    {hidden ? (
                        <ArrowLineRight weight="bold" size={20} />
                    ) : (
                        <ArrowLineLeft weight="bold" size={20} />
                    )
                    }


                </button>
            </header>

            {!hidden &&
                <div className="flex items-center justify-between p-2 w-full">
                    <p className={`uppercase text-[0.8125rem] font-semibold ${hidden ? "hidden" : "block"}`}>canais seguidos</p>
                    <button className={`${hidden ? "hidden" : "block"} p-[0.3rem]`}>
                        <ArrowsDownUp weight="bold" />
                    </button>
                </div>
            }


            <SidebarChannel
                hidden={hidden}
                channelAvatar="https://static-cdn.jtvnw.net/jtv_user_pictures/7b68f6a2-1316-47c9-98e6-4413dad16837-profile_image-70x70.jpg"
                channelName="OCarteiroCosmico"
                channelURL="/vitongemaplys"
            />
        </div>
    )
}