import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/Components/Header'
import SideBar from '@/Components/Sidebar'
import Carousel from '@/Components/Carousel'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function App() {
  const [sidebarHidden, setSideBarHidden] = useState(false);

  function HandleSideBar(state: boolean) {
    setSideBarHidden(state);
  }

  const style = {
    marginLeft: sidebarHidden ? "1rem" : "12.5rem"
  }
  return (
    <div className='text-text pt-[3rem]'>
      <main className="flex px-[1rem]" style={style}>
        <SideBar onStateChange={HandleSideBar}/>
        <Carousel />
      </main>
    </div>
  )
}
