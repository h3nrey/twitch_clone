import { DotsThreeOutlineVertical, Export, User } from "phosphor-react";

interface LiveStatsProps {
    liveProgress: string,
    liveViewers: number,
}
export default function LiveStats({ liveProgress, liveViewers }: LiveStatsProps) {
    return (
        <div className="flex items-center gap-2 text-text dark:text-lightMode_black text-[0.8125rem]">
            <div className="flex items-center text-salmon font-semibold">
                <User weight="bold" size={16} />
                <span>
                    {liveViewers}
                </span>
            </div>
            <span className="font-normal">
                {liveProgress}
            </span>
            <button
                className="p-1 bg-transparent hover:bg-white/20 transition rounded"
                onClick={() => alert("reacted")}
            >
                <Export weight="bold" size={20} />
            </button>
            <button className="p-1 bg-transparent hover:bg-white/20 transition rounded">
                <DotsThreeOutlineVertical weight="fill" size={20} />
            </button>
        </div>
    )
}