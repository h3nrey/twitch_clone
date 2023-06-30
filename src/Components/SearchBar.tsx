import { MagnifyingGlass, X } from "phosphor-react"
import { useState } from "react"

export default function SearchBar() {
    const [searchText, setSearchText] = useState("");

    return (
        <div className="relative flex h-[2.25rem] dark:text-lightMode_black">
            <input type="text"
                className="bg-darkgray dark:text-lightMode_thinBlack dark:bg-lightMode_white border-solid font-semibold border-thingray border-[1px] text-text text-[0.875rem]  w-[22.25rem] px-2 rounded-tl-md rounded-bl-md focus:border-principal focus:border-[4px] focus:outline-none"
                placeholder="Search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            {searchText.length > 0 &&
                <button
                    className="absolute right-[12%] top-1/2 -translate-y-1/2"
                    onClick={() => setSearchText("")}
                >
                    <X weight="bold" fontSize={20} />
                </button>
            }
            <button
                className={`rounded-md rounded-tl-none rounded-bl-none bg-gray dark:bg-lightMode_thinGray p-[0.3125rem] flex items-center justify-center transition
            ${searchText.length > 0 ? 'hover:bg-gray/70 cursor-pointer' : 'cursor-not-allowed'}`}
            >
                <MagnifyingGlass weight="bold" fontSize={24} />
            </button>
        </div>
    )
}