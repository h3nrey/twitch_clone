import SortSelect, { Option } from './SortSelect'
import { ChangeEvent, useEffect, useState } from 'react'
import { gamesGenre } from '@/pages/api/browseData'
import { PopoverRoot, PopoverContent, PopoverTrigger } from '../PopOver'
import { MagnifyingGlass } from 'phosphor-react'

interface CategorySearchProps {
    emitTagSearched: (tag: string) => void
}
export default function CategorySearch({ emitTagSearched }: CategorySearchProps) {
    const [searchedTag, setSearchedTag] = useState<string>("")
    const [tagsFilteread, setTagsFiltered] = useState<string[]>(gamesGenre)
    const [tagsPopover, setTagsPopover] = useState(false)

    const trigger = <div className="relative flex rounded  bg-darkgray text-text dark:text-lightMode_black min-w-[14rem]">
        <span className='absolute left-0 top-0 h-full min-w-[1.875rem] flex items-center justify-center'>
            <MagnifyingGlass className="font-bold text-text dark:text-lightMode_thinBlack" strokeWidth={3} width={18} />
        </span>

        <input
            type="text"
            placeholder="Search Category Tags"
            className="bg-darkgray dark:bg-lightMode_gray font-normal w-full text-[0.8125rem]  pl-[1.875rem] py-[0.3125rem] text-text focus-within:outline-none group border-[1px] border-thingray rounded focus:ring-principal focus:ring-2 transition"
            value={searchedTag}
            onChange={handleTagSearch}
            onClick={() => setTagsPopover(true)}
        />
    </div>

    const content = <div className="absolute bg-darkgray dark:bg-lightMode_white dark:text-lightMode_black text-text w-48 top-full z-10 rounded-md left-0 mt-2 overflow-hidden hover:overflow-y-scroll max-h-96 scrollable">
        {tagsFilteread.length > 0 ? tagsFilteread.map((tag, index) => {
            return (
                <button
                    key={index}
                    onClick={() => {
                        emitTagSearched(tag)
                        setTagsPopover(false)
                        setSearchedTag("")
                    }}
                    className='hover:bg-thingray dark:hover:bg-lightMode_darkGray w-full p-2 text-left transition'>
                    {tag}
                </button>
            )
        }) :
            (<p className='w-full p-2 text-left transition rounded'>No result found</p>)
        }

    </div>


    function handleTagSearch(event: ChangeEvent<HTMLInputElement>) {
        setSearchedTag(event.target.value)
    }

    function DoThing(param: Option) {
        alert(param)
    }

    useEffect(handleTagsSearch, [searchedTag])

    function handleTagsSearch() {
        if (searchedTag.length <= 0) setTagsFiltered(gamesGenre);

        const result = gamesGenre.filter(genre => {
            return genre.toLowerCase().includes(searchedTag.toLowerCase())
        })
        console.log(result)
        setTagsFiltered(result);
    }
    return (
        <div className="mt-[1.25rem] relative flex md:flex-col md:items-start md:gap-2 items-center justify-between">

            <PopoverRoot>
                <PopoverTrigger asChild>
                    {trigger}
                </PopoverTrigger>
                <PopoverContent>
                    {content}
                </PopoverContent>
            </PopoverRoot>
            {/* Input search tag  */}


            {/* Sort Thing  */}
            <div className="flex items-center gap-4">
                <label className="text-[0.8125rem] font-bold text-text dark:text-lightMode_black">Sort by</label>
                <SortSelect emitSelection={DoThing} />
            </div>
        </div>
    )
}
