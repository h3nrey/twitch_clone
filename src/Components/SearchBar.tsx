import { MagnifyingGlass, X } from "phosphor-react"
import { useState } from "react"

export default function SearchBar(){
    const [searchText, setSearchText] = useState("");

    return(
        <div className="relative flex h-8">
            <input type="text h-[100%]" 
                className="bg-darkgray border-solid border-lightgray border-[1px] text-text text-[0.875rem]  w-[17.5rem] px-2 rounded-tl-md rounded-bl-md focus:border-purple-600 focus:border-[4px] focus:outline-none"
                placeholder="Search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            { searchText.length > 0 && 
                    <button 
                        className="absolute right-[15%] top-1/2 -translate-y-1/2"
                        onClick={() => setSearchText("")}
                        >
                        <X fontSize={16}/>
                    </button>
                }
            <button 
            className={`rounded-md rounded-tl-none rounded-bl-none bg-darkgray p-2 flex items-center justify-center transition
            ${searchText.length > 0 ? 'hover:outline hover:outline-4 hover:outline-principal hover:bg-gray cursor-pointer' : 'cursor-not-allowed'}`}
            >
                <MagnifyingGlass weight="bold" fontSize={18}/>
            </button>
        </div>
    )
}