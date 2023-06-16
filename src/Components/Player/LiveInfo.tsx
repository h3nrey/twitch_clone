import Link from "next/link";
import { HandWaving, Heart, Star, CaretDown, User, Export, DotsThreeOutlineVertical } from "phosphor-react";
import { useState } from "react";

export default function LiveInfo({ liveProgress }: { liveProgress: string }) {
    const [viewers, setViewers] = useState(0)

    return (
        <div className="mt-6">
            <div className="flex justify-between items-start">
                {/* Live Info */}
                <div className="flex gap-3">
                    {/* Avatar Icon  */}
                    <div className="flex flex-col">
                        <img
                            className="rounded-full border-4"
                            src="https://static-cdn.jtvnw.net/jtv_user_pictures/7b68f6a2-1316-47c9-98e6-4413dad16837-profile_image-70x70.jpg" alt=""
                        />
                        <div className="relative h-3">
                            <span className="absolute top-0 left-1/2 -translate-x-1/2  -translate-y-1/2 bg-red uppercase px-1 rounded text-[0.8125rem] text-text font-semibold border-2 border-bg">live</span>
                        </div>
                    </div>

                    {/* Channel Info  */}
                    <div className="text-text">
                        <h2 className="font-bold text-[1.125rem]">Vitongemaplys</h2>
                        <h3 className="text-sm font-semibold">Criando Pitowns</h3>
                        <div className="flex gap-2 items-center">
                            <Link href="/browse/category">
                                <p className="text-principal text-sm">Just Chatting</p>
                            </Link>
                            <div className="flex gap-1">
                                {["jogos", "Música", "Desenho"].map(tag => (
                                    <span key={tag} className="rounded-full bg-darkgray px-2 text-[0.75rem] text-thingray font-semibold">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Live Controls  + Stats */}
                <div className="flex flex-col items-end gap-2">
                    <div className="flex gap-2">
                        <button className="flex text-principal items-center text-[0.8125rem] gap-2 hover:bg-white/40 transition hover:text-text px-2 py-1 rounded font-semibold">
                            <HandWaving size={20} />
                            React
                        </button>
                        <button className="flex items-center text-text text-[0.8125rem] gap-2 bg-principal hover:bg-principal/70 transition hover:text-text px-2 py-1 rounded font-semibold ">
                            <Heart weight="fill" size={20} />
                            React
                        </button>

                        <button className="flex items-center text-text text-[0.8125rem] gap-2 bg-darkgray hover:bg-white/20 transition hover:text-text px-2 py-1 rounded font-semibold ">
                            <Star weight="fill" size={20} />
                            Subscribe
                            <CaretDown weight="bold" size={20} />
                        </button>
                    </div>
                    <div className="flex items-center gap-2 text-[0.8125rem]">
                        <div className="flex items-center text-salmon font-semibold">
                            <User weight="bold" size={16} />
                            <span>{viewers}</span>
                        </div>
                        <span className="text-text font-normal">{liveProgress}</span>
                        <button className="p-1 bg-transparent hover:bg-white/20 transition rounded text-text">
                            <Export weight="bold" size={20} />
                        </button>
                        <button className="p-1 bg-transparent hover:bg-white/20 transition rounded text-text">
                            <DotsThreeOutlineVertical weight="fill" size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}