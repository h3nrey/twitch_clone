import { ChangeEvent, useEffect, useState } from 'react'
import Link from 'next/link'
 
// Data 
import { categories, games } from './api/browseData'

// Components 
import SideBar from '@/Components/Sidebar'
import SortSelect, { Option } from '@/Components/Browse/SortSelect'
import CategoryCard, { Card } from '@/Components/Browse/CategoryCard'

// Icons 
import { Search } from 'lucide-react'

export default function App() {
  const [sidebarHidden, setSideBarHidden] = useState(false)
  const [filteredGames, setFilteredGames] = useState<Card[]>()
  const [searchedTag, setSearchedTag] = useState("")

  function FilterGames() {
    const gamesResult = games.filter(game => {
      const result = game.tags.filter(tag => {
        return tag.toLowerCase().includes(searchedTag.toLowerCase());
      }).length > 0
      return result
    })
    setFilteredGames(gamesResult);
  }

  useEffect(FilterGames, [searchedTag])

  

  function HandleTagSearch(event: ChangeEvent<HTMLInputElement>) {
    setSearchedTag(event.target.value);
  }
  function HandleSideBar(state: boolean) {
    setSideBarHidden(state)
  }

  function DoThing(param: Option) {
    alert(param)
  }
  const style = {
    marginLeft: sidebarHidden ? '3rem' : '12.5rem',
  }
  return (
    <div className="bg-bg pt-[3rem] px-4" style={style}>
      <SideBar onStateChange={HandleSideBar} />
      <h2 className="text-[3.375rem] font-bold text-text">Browse</h2>

      {/* Categories nav  */}
      <div className="flex gap-2">
        {categories.map((categorie) => (
          <Link
            key={categorie.title}
            href={`/browse/${categorie.title}`}
            className="pl-4 pr-16 py-1 w-[25%] bg-principal hover:bg-bg hover:ring-4 hover:ring-principal rounded transition z-0 relative"
          >
            <p className="font-bold text-text text-[1.5rem]">
              {categorie.title}
            </p>
            <img
              className="absolute left-56 top-1/2 -translate-y-1/2 -translate-x-1/2 z-1"
              src="https://static-cdn.jtvnw.net/c3-vg/verticals/gaming.svg"
              alt=""
            />
          </Link>
        ))}
      </div>
      
      {/* Categories Options  */}
      <nav className="mt-8 text-[1.125rem] font-bold flex items-center gap-2">
        <Link
          href="/browse/"
          className="border-b-4 border-principal p-2 text-text"
        >
          Categories
        </Link>
        <Link href="/browse/" className="border-b-4 border-principal p-2 text-text">Live Channels</Link>
      </nav>

      {/* Categories Search  */}
      <div className="flex justify-between items-center mt-[1.25rem]">
        {/* Input search tag  */}
        <div className="py-[0.3125rem] px-[0.625rem] bg-darkgray flex  gap-2 rounded border border-[2px] border-thingray text-text">
          <span>
            <Search className="text-text font-bold" />
          </span>
          <input
            type="text"
            placeholder="Search Category Tags"
            className="bg-darkgray  text-text font-bold focus-within:outline-none"
            value={searchedTag}
            onChange={HandleTagSearch}
          />
        </div>
        {/* Sort Thing  */}
        <div className="flex items-center gap-4">
          <label className="text-[0.8125rem] text-text font-bold">
            Sort by
          </label>
          <SortSelect emitSelection={DoThing} />
        </div>
      </div>
      
      {/* Games grid  */}
      <div className="grid grid-cols-6 mt-[1.25rem] gap-[0.625rem]">
        {filteredGames.map((game, index) => {
          return (
            <CategoryCard
              key={index}
              url={game.url}
              gameTitle={game.gameTitle}
              imageURL={game.imageURL}
              viewers={game.viewers}
              tags={game.tags}
            />
          )
        })}
      </div>
    </div>
  )
}
