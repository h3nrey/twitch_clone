import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/Components/Header'
import SideBar from '@/Components/Sidebar'
import Carousel from '@/Components/Carousel'
import { useState } from 'react'
import LiveThumbnail from '@/Components/LiveThumbnail'
import { section1Data } from './api/homeData'
import { CaretDown } from 'phosphor-react'

const inter = Inter({ subsets: ['latin'] })
export default function App() {
  const [sidebarHidden, setSideBarHidden] = useState(false);
  const [sectionExtraLivesHidden, setSectionExtraLivesHidden] = useState(false);
  function HandleSideBar(state: boolean) {
    setSideBarHidden(state);
  }

  const style = {
    marginLeft: sidebarHidden ? "3rem" : "12.5rem"
  }
  return (
    <div className='text-text pt-[3rem]'>
      <main className="flex flex-col px-[1rem]" style={style}>
        <SideBar onStateChange={HandleSideBar}/>
        <Carousel />
        <section className='mt-8 pb-2 flex flex-col gap-2 w-full'>
          <h3 className='font-bold'>Lives that we think you'll love :)</h3>
          <div className='flex flex-col gap-y-4'>
            <div className={`grid ${sidebarHidden ? 'grid-cols-4' : 'grid-cols-3'} gap-2`}>
            {section1Data.map((live, index) => index < 4 && (
              !sidebarHidden && index != 3 && 
              <LiveThumbnail 
              channelName = {live.channelName}
              channelSubject= {live.channelSubject}
              channelColor= {live.channelColor}
              liveTitle= {live.liveTitle}
              liveTags={live.liveTags}
              liveViewers= {live.liveViewers}
              onLive={live.onLive}
              thumb={live.thumb}
              channelAvatar={live.channelAvatar}/>
            ))}
            </div>
            {sectionExtraLivesHidden && (
              <div className='flex gap-2'>
              {section1Data.map((live, index) => index >= 4 && (
                <LiveThumbnail 
                channelName = {live.channelName}
                channelSubject= {live.channelSubject}
                channelColor= {live.channelColor}
                liveTitle= {live.liveTitle}
                liveTags={live.liveTags}
                liveViewers= {live.liveViewers}
                onLive={live.onLive}
                thumb={live.thumb}
                channelAvatar={live.channelAvatar}/>
              ))}
              </div>
            )}
            {!sectionExtraLivesHidden && (
              <div className='relative w-full justify-center items-center flex'>
              <hr  className='absolute top-1/2 -translate-y-1/2 text-lightgray w-full z-0'/>
              <div className='bg-bg px-2 z-[1]'>
                <button 
                  onClick={() => setSectionExtraLivesHidden(true)}
                  className="z-1 flex gap-2 items-center text-principal rounded hover:bg-gray hover:text-lightgray font-bold transition p-2">
                Show more 
                <span><CaretDown weight='bold'/></span></button>
              </div>
              
            </div>
            )}
            
          </div>
          
        </section>
      </main>
    </div>
  )
}
