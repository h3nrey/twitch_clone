import { ArrowLeft, ArrowRight } from "phosphor-react";
import { useState } from "react";

export default function Carousel(){
    const [currentIndex, setCurrentIndex] = useState(0);
    const [CarouselPos, setCarouselPos] = useState(0);

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
    ];

    const carouselSlide = {
        transform: `translateX(-${CarouselPos}px)`
    }
    function MoveSlide(){
        console.log(currentIndex)
        const pos = currentIndex * 750;
        setCarouselPos(pos);
    }
    return(
        <>
        <div className="flex w-full justify-between items-center h-fit mt-4">

            {/* button left */}
            <button 
                className="p-2 hover:bg-gray rounded-md hover:outline hover:outline-2 hover:outline-principal transition"
                onClick={() => {
                    const index = (currentIndex - 1 + lives.length) % lives.length;
                    setCurrentIndex(index)
                    MoveSlide();
                }}
            >
                <ArrowLeft size={32} weight="bold"/>
            </button>

            {/* Carousel */}
            <div className="w-[750px] h-[300px] overflow-x-hidden">
                <div className={`flex w-full h-full transition`} style={carouselSlide}>

                    {/* Carousel Cell  */}
                    {lives.map(live => 
                        <div className="w-[750px] inline bg-darkgray rounded shadow-md shadow-gray drop-shadow-md">
                            <div className="w-[750px] flex gap-2">
                                <img src={live.livePreview} className="w-[530px] h-[300px]" alt="" />
                                <div>
                                    <header className="flex gap-2 items-start mt-2">
                                        <img src={live.channelAvatar} alt="" className="rounded-full h-10" />
                                        <div className="flex flex-col">
                                            <h3 className="text-principal">{live.channelName}</h3>
                                            <p className="text-principal text-[0.8125rem]">{live.liveSubject}</p>
                                            <span className="text-[0.8125rem]">{live.liveViewers} viewers</span>
                                        </div>
                                    </header>
                                    <div className="flex gap-2 mt-2">
                                        {live.liveTags.map( tag => 
                                            <span className="py-[1px] px-2 text-[0.8125rem] bg-gray rounded-2xl">{tag}</span>
                                        )}
                                    </div>
                                    <p className="text-[0.8125rem] mt-2">{live.liveDescription}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                
            </div>

            {/* button Right */}
            <button
                className="p-2 hover:bg-gray rounded-md hover:outline hover:outline-2 hover:outline-principal transition"
                onClick={() => {
                    const index = (currentIndex + 1) % lives.length;
                    setCurrentIndex(index)
                    MoveSlide();
                }}
            > 
                <ArrowRight size={32} weight="bold"/>
            </button>
        </div>
        </>
    )
}