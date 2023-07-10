import Link from "next/link"
import SearchBar from "./SearchBar"
import TooltipBox, { BoxPositions } from "./TooltipBox"
import { Chat, CrownSimple, CurrencyEth, DotsThreeOutlineVertical, Tray, TwitchLogo } from "phosphor-react"
import Button from "./Button"
import { PopoverContent, PopoverRoot, PopoverTrigger } from "./PopOver"
import ThemeSwitcher from "./Header/ThemeSwitcher"
import { ThemeContext } from "@/ThemeContext"
import { CSSProperties, useContext, useState } from "react"
import PageLink from "./Header/PageLink"
export default function Header() {
    const [pageOpenned, setPageOpenned] = useState("");

    return (
        <header
            className="fixed top-0 flex z-10 bg-darkgray dark:bg-lightMode_white gap-2 text-text px-4 w-full justify-between items-center shadow-black dark:shadow-lightMode_thinBlack/20 shadow-sm"
        >
            <nav className="flex items-center gap-6 dark:text-lightMode_black">
                <Link href="/" onClick={() => setPageOpenned("")}>
                    <TwitchLogo weight="bold" size={28} className="text-principal" />
                </Link>
                <PageLink
                    currentPage={pageOpenned}
                    setCurrentPage={() => setPageOpenned("following")}
                    linkName="Following"
                    url="following"
                />
                <PageLink
                    currentPage={pageOpenned}
                    setCurrentPage={() => setPageOpenned("browse")}
                    linkName="Browse"
                    url="browse"
                />
                <TooltipBox description="More" boxPos={BoxPositions.bottomCenter}>
                    <button
                        className="bg-transparent hover:bg-white/30 dark:hover:bg-lightMode_thinGray rounded transition w-[1.875rem] h-[1.875rem] flex justify-center items-center">
                        <DotsThreeOutlineVertical weight="fill" size={20} />
                    </button>
                </TooltipBox>
            </nav>

            <SearchBar />

            <div className="flex items-center gap-4 text-lext dark:text-lightMode_black">
                {/* Options  */}
                <TooltipBox
                    description="Prime loot"
                    boxPos={BoxPositions.bottomCenter}>
                    <Button
                        clickCallback={() => alert("you dont have any loot at the moment")}>
                        <CrownSimple weight="bold" size={20} />
                    </Button>
                </TooltipBox>
                <TooltipBox
                    description="Notifications"
                    boxPos={BoxPositions.bottomCenter}>
                    <Button clickCallback={() => { }}>
                        <div className="relative">
                            <Tray weight="bold" size={20} />
                            <div className="absolute flex items-center justify-center top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-red rounded-full px-[4px] py-[2px]">
                                <span className="text-[12px] font-bold">10</span>
                            </div>
                        </div>
                    </Button>
                </TooltipBox>
                <TooltipBox
                    description="Whispers"
                    boxPos={BoxPositions.bottomCenter}>
                    <Button clickCallback={() => alert("you dont have any whispers at the moment")}>
                        <Chat weight="bold" size={20} />
                    </Button>
                </TooltipBox>
                <TooltipBox description="Get Bits" boxPos={BoxPositions.bottomCenter}>
                    <Button clickCallback={() => { }}>
                        <CurrencyEth weight="fill" size={20} />
                    </Button>
                </TooltipBox>

                {/* user  */}
                <PopoverRoot>
                    <PopoverTrigger asChild>
                        <button>
                            <img src="https://avatars.githubusercontent.com/u/56360819?v=4"
                                className="rounded-full h-[1.875rem]"
                                alt=""
                            />
                        </button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <div
                            className="absolute inline right-0 bg-darkgray dark:bg-lightMode_white rounded -translate-x-2 drop-shadow-lg shadow-black  p-[0.625rem] z-50"
                            style={{ boxShadow: "0 0 10px 1px rgba(0,0,0,0.5)" }}>
                            <a href="https://github.com/h3nrey" target="_blank" className="flex gap-1 items-center pb-4 border-b-[1px] border-gray">
                                <figure>
                                    <img src="https://avatars.githubusercontent.com/u/56360819?v=4"
                                        className="rounded-full h-10"
                                        alt=""
                                    />
                                </figure>
                                <h2>h3nrey</h2>
                            </a>

                            <div className="mt-1">
                                <ThemeSwitcher />
                                {/* <p>Lorem ipsum, dolor sit amet</p> */}
                            </div>
                        </div>
                    </PopoverContent>
                </PopoverRoot>

            </div>
        </header>

    )
}