import { Inter } from 'next/font/google'
import Carousel from '@/Components/Carousel'
import HomeSection from '@/Components/HomeSection'
import { Channels } from './api/homeData'

const inter = Inter({ subsets: ['latin'] })
export default function App() {
  return (
    <div className='text-text px-[1.875rem] pt-2'>
      <main className="flex flex-col px-[1rem]">
        <Carousel />
        <HomeSection
          sectionTitle="Lives that we think you'll like"
          channels={Channels}
        />
        <HomeSection
          sectionTitle="Recommended Brazilian Twitchers"
          channels={Channels}
        />
        <HomeSection
          sectionTitle="What's hot"
          channels={Channels}
        />
      </main>
    </div>
  )
}
