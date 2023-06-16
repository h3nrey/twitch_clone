import { handleTime } from "@/utils";
import { colors } from "../../../Colors";
import { ChangeEvent, MouseEvent } from "react";

interface ProgressBarProps {
    progress: number,
    duration: number,
    setProgress: (time: number) => void
    handleProgress: (value: number) => void
}
export default function ProgressBar({ progress, duration, setProgress, handleProgress }: ProgressBarProps) {
    const handleProgressBarClick = (event: MouseEvent<HTMLInputElement>) => {
        const progressBarWidth = event.currentTarget.offsetWidth;
        const cursorX = event.clientX - event.currentTarget.getBoundingClientRect().left;
        const newTime = Math.round((cursorX / progressBarWidth) * 100);
        setProgress(newTime)
    };


    const progressPercentage = () => (progress / duration) * 100


    const progressGradient = {
        backgroundImage: `linear-gradient(98deg, ${colors.principal} 0%, ${colors.principal} ${progressPercentage()}%, rgba(255, 0, 0, 0) ${progressPercentage()}% `
    }
    return (
        <div className="w-full flex flex-col justify-center items-center h-4 gap-2 pb-6">
            {/* timestamp  */}
            <div className="flex justify-between w-full text-[0.8125rem]">
                <span>{handleTime(progress)}</span>
                <span>{handleTime(duration)}</span>
            </div>
            {/* Progress Bar  */}
            <div className="w-full flex justify-center items-center h-4">
                <input
                    type="range"
                    min={0}
                    max={duration}
                    value={progress}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleProgress(parseFloat(e.target.value))}
                    onClick={(e) => handleProgressBarClick(e)}
                    className="w-full relative bg-thingray h-1 cursor-pointer"
                    style={progressGradient}
                />
            </div>
        </div>
    )
}