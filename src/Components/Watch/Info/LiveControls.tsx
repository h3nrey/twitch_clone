import { CaretDown, HandWaving, Heart, Star } from "phosphor-react";

export default function LiveControls() {
    return (
        <div className="flex gap-2">
            <button
                className="flex text-principal items-center text-[0.8125rem] gap-2 hover:bg-white/40 transition hover:text-text px-2 py-1 rounded font-semibold"
                onClick={() => alert("reacted")}
            >
                <HandWaving size={20} />
                React
            </button>
            <button className="flex items-center text-text text-[0.8125rem] gap-2 bg-principal hover:bg-principal/70 transition hover:text-text px-2 py-1 rounded font-semibold ">
                <Heart weight="bold" size={20} />
                Follow
            </button>

            <button className="flex items-center text-text text-[0.8125rem] gap-2 bg-darkgray hover:bg-white/20 transition hover:text-text px-2 py-1 rounded font-semibold ">
                <Star weight="fill" size={20} />
                Subscribe
                <CaretDown weight="bold" size={20} />
            </button>
        </div>
    )
}