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
import CategoryNav from '@/Components/Browse/CategoryNav'
import CategorySearch from '@/Components/Browse/CategorySearch'

export default function App() {
  const [sidebarHidden, setSideBarHidden] = useState(false)
  const [filteredGames, setFilteredGames] = useState<Card[]>(games)
  const [tagSearched, setSearchedTag] = useState("")

  function FilterGames(tagSearched: string) {
    const gamesResult = games.filter(game => {
      const result = game.tags.filter(tag => {
        return tag.toLowerCase().includes(tagSearched.toLowerCase());
      }).length > 0
      return result
    })
    setFilteredGames(gamesResult);
  }

  // useEffect(FilterGames, [tagSearched])


  function HandleSideBar(state: boolean) {
    setSideBarHidden(state)
  }
  const style = {
    marginLeft: sidebarHidden ? '3rem' : '15rem',
  }
  return (
    <div className="bg-bg pt-[3rem] px-[1.875rem]" style={style}>
      <SideBar onStateChange={HandleSideBar} />
      <h2 className="text-[3.375rem] font-bold text-text">Browse</h2>

      {/* Categories nav  */}
      <CategoryNav />

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
      <CategorySearch emitTagSearched={FilterGames} />

      {/* Games grid  */}
      <div className={`grid mt-[1.25rem] gap-[0.625rem] ${sidebarHidden ? 'grid-cols-7' : 'grid-cols-5'}`}>
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
