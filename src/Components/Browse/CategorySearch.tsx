import { Search } from 'lucide-react'
import SortSelect, { Option } from './SortSelect'
import { ChangeEvent, useEffect, useState } from 'react'
import { gamesGenre } from '@/pages/api/browseData'

interface CategorySearchProps {
    emitTagSearched: (tag: string) => void
}
export default function CategorySearch({ emitTagSearched }: CategorySearchProps) {
    const [searchedTag, setSearchedTag] = useState<string>("")
    const [tagsFilteread, setTagsFiltered] = useState<string[]>(gamesGenre)
    const [tagsPopover, setTagsPopover] = useState(false)

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
        <div className="mt-[1.25rem] flex items-center justify-between">
            {/* Input search tag  */}
            <div className="relative flex gap-2 rounded border-[2px] border-thingray bg-darkgray px-[0.625rem] py-[0.3125rem] text-text group-focus-within:ring-principal group-focus-within:ring-2">
                <span>
                    <Search className="font-bold text-text" strokeWidth={3} width={18} />
                </span>

                <input
                    type="text"
                    placeholder="Search Category Tags"
                    className="bg-darkgray  font-bold text-text focus-within:outline-none group"
                    value={searchedTag}
                    onChange={handleTagSearch}
                    onClick={() => setTagsPopover(true)}
                />

                {tagsPopover && (
                    <div className="absolute bg-darkgray text-text w-48 top-full z-10 rounded-md left-0 mt-2 overflow-hidden hover:overflow-y-scroll max-h-96 scrollable">
                        {tagsFilteread.length > 0 ? tagsFilteread.map((tag, index) => {
                            return (
                                <button
                                    key={index}
                                    onClick={() => {
                                        emitTagSearched(tag)
                                        setTagsPopover(false)
                                        setSearchedTag("")
                                    }}
                                    className='hover:bg-thingray w-full p-2 text-left transition'>
                                    {tag}
                                </button>
                            )
                        }) :
                            (<p className='w-full p-2 text-left transition rounded'>No result found</p>)
                        }

                    </div>
                )}

            </div>

            {/* Sort Thing  */}
            <div className="flex items-center gap-4">
                <label className="text-[0.8125rem] font-bold text-text">Sort by</label>
                <SortSelect emitSelection={DoThing} />
            </div>
        </div>
    )
}
