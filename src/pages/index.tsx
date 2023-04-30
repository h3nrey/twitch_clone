import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/Components/Header'
import SideBar from '@/Components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function App() {
  return (
    <div className='text-text pt-[2.7rem]'>
      <main>
        <SideBar />
      </main>
    </div>
  )
}
