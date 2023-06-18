import Link from "next/link"
import SearchBar from "./SearchBar"
import TooltipBox, { BoxPositions } from "./TooltipBox"
import { Chat, CrownSimple, CurrencyEth, DotsThreeOutlineVertical, Tray } from "phosphor-react"
import Button from "./Button"
import { PopoverContent, PopoverRoot, PopoverTrigger } from "./PopOver"
export default function Header() {
    return (
        <header
            className="fixed top-0 flex z-10 bg-darkgray gap-2 py-2 text-text px-4 w-full justify-between items-center shadow-black shadow-sm"
        >
            <nav className="flex items-center gap-2">
                <Link href="/">
                    <img src="https://www.freepnglogos.com/uploads/twitch-app-logo-png-3.png" className="h-6" alt="" />
                </Link>
                <Link href="/browse" className="transition font-semibold hover:pointer hover:text-principal text-sm">Following</Link>
                <Link href="/browse" className="transition font-semibold hover:pointer hover:text-principal text-sm">Browse</Link>
                <TooltipBox description="More" boxPos={BoxPositions.bottomCenter}>
                    <button
                        className="bg-transparent hover:bg-white/30 rounded transition w-[1.875rem] h-[1.875rem] flex justify-center items-center">
                        <DotsThreeOutlineVertical weight="fill" size={20} />
                    </button>
                </TooltipBox>
            </nav>

            <SearchBar />

            <div className="flex gap-4 text-lext">
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
                            <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/7b68f6a2-1316-47c9-98e6-4413dad16837-profile_image-70x70.jpg"
                                className="rounded-full h-8"
                                alt=""
                            />
                        </button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <div
                            className="absolute inline right-0 bg-darkgray rounded -translate-x-2 drop-shadow-lg shadow-black  p-[0.625rem] z-50"
                            style={{ boxShadow: "0 0 10px 1px rgba(0,0,0,0.5)" }}>
                            <div className="flex gap-1 items-center pb-4 border-b-[1px] border-gray">
                                <figure>
                                    <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/7b68f6a2-1316-47c9-98e6-4413dad16837-profile_image-70x70.jpg"
                                        className="rounded-full h-12"
                                        alt=""
                                    />
                                </figure>
                                <h2>Vitongemaplys</h2>
                            </div>

                            <p>Lorem ipsum, dolor sit amet</p>
                        </div>
                    </PopoverContent>
                </PopoverRoot>

            </div>
        </header>

    )
}