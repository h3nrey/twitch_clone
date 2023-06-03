import { section1Data } from "@/pages/api/homeData";
import LiveThumbnail from "./LiveThumbnail";
import { ChevronDown } from "lucide-react";
import { useState } from "react";


interface SectionProps{
  sidebarHidden: boolean;
  sectionTitle: string;
}
export default function HomeSection({sidebarHidden, sectionTitle}: SectionProps) {
    const [isSectionOpen, setIsSectionOpen] = useState(false);
    return(
        <section className='mt-8 pb-2 flex flex-col gap-2 w-full'>
          <h3 className='font-bold text-[1.125rem]'>{sectionTitle}</h3>

          {/* lives container */}
          <div className='flex flex-col gap-y-4'>

            {/* First row */}
            <div className={`grid ${sidebarHidden ? 'grid-cols-4' : 'grid-cols-3'}`}>
            {section1Data.map((live, index) => index < 4 && (
              <>
                {
                  !sidebarHidden && index == 3 ? (
                    <></>
                  ) :
                  <LiveThumbnail 
                    channelName = {live.channelName}
                    channelSubject= {live.channelSubject}
                    channelColor= {live.channelColor}
                    liveTitle= {live.liveTitle}
                    liveTags={live.liveTags}
                    liveViewers= {live.liveViewers}
                    onLive={live.onLive}
                    thumb={live.thumb}
                    channelAvatar={live.channelAvatar}
                  />
                }
              </>
            ))}
            </div>

            {/* Second row */}
            {isSectionOpen && (
              <div className='flex gap-2'>
              {section1Data.map((live, index) => index >= 4 && (
                <>
                {
                  !sidebarHidden && index == 6 ? (
                    <></>
                  ) :
                  <LiveThumbnail 
                    channelName = {live.channelName}
                    channelSubject= {live.channelSubject}
                    channelColor= {live.channelColor}
                    liveTitle= {live.liveTitle}
                    liveTags={live.liveTags}
                    liveViewers= {live.liveViewers}
                    onLive={live.onLive}
                    thumb={live.thumb}
                    channelAvatar={live.channelAvatar}
                  />
                }
              </>
              ))}
              </div>
            )}

            {/* section toogle button */}
            {!isSectionOpen && (
              <div className='relative w-full justify-center items-center flex'>
              <hr  className='absolute top-1/2 -translate-y-1/2 text-lightgray w-full z-0'/>
              <div className='bg-bg px-2 z-[1]'>
                <button 
                  onClick={() => setIsSectionOpen(true)}
                  className="z-1 flex gap-2 items-center text-principal rounded hover:bg-gray hover:text-lightgray font-bold transition p-2">
                Show more 
                <span><ChevronDown/></span></button>
              </div>
              
            </div>
            )}
            
          </div>
          
        </section>
    )
}