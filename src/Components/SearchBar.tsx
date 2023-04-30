import { MagnifyingGlass } from "phosphor-react"

export default function SearchBar(){
    return(
        <div className="flex h-[70%]">
            <input type="text h-[70%]" 
                className="bg-bg border-solid border-text border-2 text-text  w-[17.5rem] px-2 rounded-tl rounded-bl"
                placeholder="Search"
            />
            <button 
            className="rounded rounded-tl-none rounded-bl-none bg-gray p-2"
            >
                <MagnifyingGlass weight="bold" fontSize={24}/>
            </button>
        </div>
    )
}