import { dir } from "console";
import { ArrowLeft, ArrowRight } from "phosphor-react";
import { useState } from "react";

const lives = [
    {
        channelName: "vitongemaplys",
        channelAvatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/7b68f6a2-1316-47c9-98e6-4413dad16837-profile_image-70x70.jpg",
        liveSubject: "Just Chatting",
        liveViewers: 1000,
        liveTags: ["chatting", "dark"],
        liveDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur architecto veniam obcaecati illum voluptatibus, amet animi eum eaque, facilis eveniet similique magnam nam at ea ad. Vel, magni. Voluptatibus, quibusdam!",
        livePreview: "https://t.ctcdn.com.br/j8werVFrE-lnpEhJS9Zs05bXjaM=/1001x563/smart/i567711.jpeg",
    },
    {
        channelName: "OCarteiroCosmico",
        channelAvatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/264ad721-4c28-4465-8a65-0a1bbb2ecdba-profile_image-70x70.png",
        liveSubject: "Street Fight",
        liveViewers: 24,
        liveTags: ["lutinha"],
        liveDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur architecto veniam obcaecati illum voluptatibus, amet animi eum eaque, facilis eveniet similique magnam nam at ea ad. Vel, magni. Voluptatibus, quibusdam!",
        livePreview: "https://pop.proddigital.com.br/wp-content/uploads/sites/8/2021/11/batman.jpg",
    },
    {
        channelName: "kksaiko",
        channelAvatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/3d1f7393-00cf-4bef-91dd-3361a4014bd6-profile_image-70x70.png",
        liveSubject: "Postal 2",
        liveViewers: 24,
        liveTags: ["lutinha"],
        liveDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur architecto veniam obcaecati illum voluptatibus, amet animi eum eaque, facilis eveniet similique magnam nam at ea ad. Vel, magni. Voluptatibus, quibusdam!",
        livePreview: "https://gameplayscassi.com.br/wp-content/uploads/2022/04/Postal-2.jpg",
    },
    {
        channelName: "Jogando Foddaci",
        channelAvatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/3d1f7393-00cf-4bef-91dd-3361a4014bd6-profile_image-70x70.png",
        liveSubject: "Postal 2",
        liveViewers: 24,
        liveTags: ["lutinha"],
        liveDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur architecto veniam obcaecati illum voluptatibus, amet animi eum eaque, facilis eveniet similique magnam nam at ea ad. Vel, magni. Voluptatibus, quibusdam!",
        livePreview: "https://gameplayscassi.com.br/wp-content/uploads/2022/04/Postal-2.jpg",
    },
    {
        channelName: "Yun Li",
        channelAvatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/3d1f7393-00cf-4bef-91dd-3361a4014bd6-profile_image-70x70.png",
        liveSubject: "Postal 2",
        liveViewers: 24,
        liveTags: ["lutinha"],
        liveDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur architecto veniam obcaecati illum voluptatibus, amet animi eum eaque, facilis eveniet similique magnam nam at ea ad. Vel, magni. Voluptatibus, quibusdam!",
        livePreview: "https://gameplayscassi.com.br/wp-content/uploads/2022/04/Postal-2.jpg",
    },
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [moveDir, setMoveDir] = useState(1)
    const [indices, setIndices] = useState([3, 4, 0, 1, 2])

    function handleClick(buttonSense: number) {
        handleIndices(buttonSense)
    }

    function handleIndices(sense: number) {
        let curIndices = indices.map(index => {
            return (index + sense + lives.length) % lives.length
        })
        // console.log(indices)
        setIndices(curIndices)
    }

    function CalcDir(index: number) {
        switch (index) {
            case -2:
                return -172

            case -1:
                return -92

            case 1:
                return -40

            case 2:
                return -25

            case 0:
                return -50
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

        // Zindex
        let zShift = Math.min(cardIndex, lives.length - cardIndex - 1);
        const zIndex = zShift.toString()

        let bright = 0.5
        if (shiftedIndex == 0) bright = 1

        // Show Text Container 
        let showText = false;
        if (shiftedIndex == 0) showText = true

        return { zIndex, scale, dir, showText, bright };
    };
    return (
        <>
            <div className="flex w-full justify-between items-center h-fit mt-4">
                {/* button left */}
                <button
                    className="p-2 hover:bg-gray rounded-md hover:outline hover:outline-2 hover:outline-principal transition"
                    onClick={() => handleClick(1)}
                >
                    <ArrowLeft size={32} weight="bold" />
                </button>

                {/* Carousel */}
                <div className="w-[750px] h-[300px]">
                    <div className={`flex relative w-full h-full transition  z-0`}>
                        {/* Carousel Cell  */}
                        {lives.map((live, index) => {
                            const { zIndex, scale, dir, showText, bright } = setCardsStyle(indices[index]);
                            return (
                                <div
                                    key={index}
                                    className={`absolute w-full rounded overflow-hidden shadow-md shadow-black/20 drop-shadow-md transition-all duration-300 ease-in left-1/2`}
                                    style={{ zIndex, transform: `scale(${scale}) translateX(${dir}%)`, filter: `brightness(${bright})` }}>
                                    <div className="flex">
                                        <img src={live.livePreview} className="w-full h-[300px] object-cover" alt="" />

                                        {showText && (
                                            <div className="bg-darkgray w-[13,75rem] pl-2">
                                                <header className="flex gap-2 items-start mt-2">
                                                    <img src={live.channelAvatar} alt="" className="rounded-full h-10" />
                                                    <div className="flex flex-col">
                                                        <h3 className="text-principal">{live.channelName}</h3>
                                                        <p className="text-principal text-[0.8125rem]">{live.liveSubject}</p>
                                                        <span className="text-[0.8125rem]">{live.liveViewers} viewers</span>
                                                    </div>
                                                </header>
                                                <div className="flex gap-2 mt-2">
                                                    {live.liveTags.map(tag =>
                                                        <span className="py-[1px] px-2 text-[0.8125rem] bg-gray rounded-2xl">{tag}</span>
                                                    )}
                                                </div>
                                                <p className="text-[0.8125rem] mt-2">{live.liveDescription}</p>
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
                    className="p-2 hover:bg-gray rounded-md hover:outline hover:outline-2 hover:outline-principal transition"
                    onClick={() => handleClick(-1)}
                >
                    <ArrowRight size={32} weight="bold" />
                </button>
            </div>
        </>
    )
}