import { SidebarContext } from "@/SidebarContext";
import { Channel } from "@/pages/api/homeData";
import { truncateNumber } from "@/utils";
import { ArrowLeft, ArrowRight, CaretLeft, CaretRight } from "phosphor-react";
import { useContext, useState } from "react";

interface CarouselProps {
    lives: Channel[]
}

export default function Carousel({ lives }: CarouselProps) {
    const [indices, setIndices] = useState([3, 4, 0, 1, 2])
    const sidebarHidden = useContext(SidebarContext);

    function handleClick(buttonSense: number) {
        handleIndices(buttonSense)
    }

    function handleIndices(sense: number) {
        let curIndices = indices.map(index => {
            return (index + sense + lives.length) % lives.length
        })
        setIndices(curIndices)
    }

    function CalcDir(index: number) {
        switch (index) {
            case -2:
                if (!sidebarHidden) return -115
                return -135

            case -1:
                if (!sidebarHidden) return -38
                return -45

            case 1:
                if (!sidebarHidden) return 6
                return 12

            case 2:
                if (!sidebarHidden) return 20
                return 35

            case 0:
                return 0
        }
    }

    function setCardsStyle(cardIndex: number) {
        const shift = Math.floor(lives.length / 2) // the half of the lives array
        const shiftedIndex = cardIndex - shift % lives.length

        // Scale
        const scaleFactor = 0.25
        const scale = 1 - (Math.abs(shiftedIndex) * scaleFactor);

        // Direction
        let dir = CalcDir(shiftedIndex)
        let translate = shiftedIndex * 10

        // Zindex
        let zShift = Math.min(cardIndex, lives.length - cardIndex - 1);
        const zIndex = zShift.toString()

        let bright = 0.5
        if (shiftedIndex == 0) bright = 1

        // Show Text Container 
        let showText = false;
        if (shiftedIndex == 0) showText = true

        let transform = `scale(${scale}) translateX(-50%) translateX(${dir}%)`
        return { zIndex, transform, showText, bright };
    };
    return (
        <>
            <div className="flex w-full justify-between items-center h-fit my-4">
                {/* button left */}
                <button
                    className="p-2 hover:bg-gray rounded-md dark:bg-lightMode_white dark:text-lightMode_black hover:outline hover:outline-2 hover:outline-principal transition"
                    onClick={() => handleClick(1)}
                >
                    <CaretLeft size={32} weight="bold" />
                </button>

                {/* Carousel */}
                <div className="w-[46.875rem] h-[300px]">
                    <div className={`flex relative w-full h-full transition  z-0`}>
                        {/* Carousel Cell  */}
                        {lives.map((live, index) => {
                            const { zIndex, transform, showText, bright } = setCardsStyle(indices[index]);
                            return (
                                <div
                                    key={index}
                                    className={`absolute w-full rounded overflow-hidden shadow-md shadow-black/20 drop-shadow-md transition-all duration-300 ease-in`}
                                    style={{
                                        zIndex,
                                        transform,
                                        filter: `brightness(${bright})`,
                                        left: `50%`
                                    }}>
                                    <div className="flex">
                                        <img
                                            src={live.live.thumbUrl}
                                            className="w-full h-[300px] object-cover"
                                            style={{ width: showText ? "520px" : "100%" }}
                                        />

                                        {showText && (
                                            <div className="bg-darkgray dark:bg-white w-full h-[300px] overflow-hidden px-2 pb-2 lg:hidden">
                                                <header className="flex gap-2 items-start mt-2">
                                                    <img src={live.avatarUrl} alt="" className="rounded-full h-10 w-10 object-cover" />
                                                    <div className="flex flex-col">
                                                        <h3 className="text-principal text-[0.8125rem]">{live.name}</h3>
                                                        <p className="text-principal text-[0.8125rem]">{live.live.category}</p>
                                                        <span className="text-[0.8125rem] dark:text-lightMode_black">{truncateNumber(live.live.viewers)} viewers</span>
                                                    </div>
                                                </header>
                                                <div className="flex gap-2 mt-2">
                                                    {live.live.tags.map(tag =>
                                                        <span className="py-[1px] px-2 text-[0.8125rem] bg-gray dark:bg-lightMode_darkGray dark:text-lightMode_black rounded-2xl">{tag}</span>
                                                    )}
                                                </div>
                                                <p className="text-[0.8125rem] mt-2 dark:text-lightMode_black whitespace-pre-wrap">{live.about}</p>
                                            </div>
                                        )}

                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>

                {/* button Right */}
                <button
                    className="p-2 hover:bg-gray dark:bg-lightMode_white dark:text-lightMode_black z-10 rounded-md hover:outline hover:outline-2 hover:outline-principal transition"
                    onClick={() => handleClick(-1)}
                >
                    <CaretRight size={32} weight="bold" />
                </button>
            </div>
        </>
    )
}