import { Inter } from 'next/font/google'
import Carousel from '@/Components/Carousel'
import HomeSection from '@/Components/HomeSection'

const inter = Inter({ subsets: ['latin'] })
export default function App() {
  return (
    <div className='text-text'>
      <main className="flex flex-col px-[1rem]">
        <Carousel />
        <HomeSection
          sectionTitle="Lives that we think you'll like"
        />
        <HomeSection
          sectionTitle="Lives that we think you'll like"
        />
        <HomeSection
          sectionTitle="Lives that we think you'll like"
        />
      </main>
    </div>
  )
}
