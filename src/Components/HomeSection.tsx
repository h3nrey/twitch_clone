import { Channel, Live } from "@/pages/api/homeData";
import LiveThumbnail from "./LiveThumbnail";
import { useContext, useState } from "react";
import { SidebarContext } from "@/SidebarContext";
import { CaretDown } from "phosphor-react";


interface SectionProps {
  sectionTitle: string;
  channels: Channel[]
}
export default function HomeSection({ sectionTitle, channels }: SectionProps) {
  const [isSectionOpen, setIsSectionOpen] = useState(false);
  const sidebarHidden = useContext(SidebarContext);

  return (
    <section className='mt-4 pb-2 flex flex-col gap-2 w-full'>
      <h3 className='font-bold text-[1.125rem] dark:text-lightMode_black'>{sectionTitle}</h3>

      {/* lives container */}
      <div className='flex flex-col gap-y-4'>

        {/* First row */}
        <div className={`grid md:flex md:flex-col ${sidebarHidden ? 'grid-cols-4 md:grid-cols-2' : 'grid-cols-3 md:grid-cols-1'}`}>
          {channels.map(({ name, color, avatarUrl, live }, index) => index < 4 && (
            <>
              {
                !sidebarHidden && index == 3 ? (
                  <></>
                ) :
                  <LiveThumbnail
                    channelName={name}
                    channelSubject={live.category}
                    channelColor={color}
                    liveTitle={live.title}
                    liveTags={live.tags}
                    liveViewers={live.viewers}
                    onLive={live.onLive}
                    thumb={live.thumbUrl}
                    channelAvatar={avatarUrl}
                  />
              }
            </>
          ))}
        </div>

        {/* Second row */}
        {isSectionOpen && (
          <div className='flex gap-2'>
            {channels.map(({ name, color, avatarUrl, live }, index) => index >= 4 && (
              <>
                {
                  !sidebarHidden && index == 6 ? (
                    <></>
                  ) :
                    <LiveThumbnail
                      channelName={name}
                      channelSubject={live.category}
                      channelColor={color}
                      liveTitle={live.title}
                      liveTags={live.tags}
                      liveViewers={live.viewers}
                      onLive={live.onLive}
                      thumb={live.thumbUrl}
                      channelAvatar={avatarUrl}
                    />
                }
              </>
            ))}
          </div>
        )}

        {/* section toogle button */}
        {!isSectionOpen && (
          <div className='relative w-full justify-center items-center flex'>
            <hr className='absolute top-1/2 -translate-y-1/2 text-lightgray w-full z-0' />
            <div className='bg-bg dark:bg-lightMode_gray px-2 z-[1]'>
              <button
                onClick={() => setIsSectionOpen(true)}
                className="z-1 flex gap-2 items-center text-principal rounded hover:bg-gray dark:hover:bg-lightMode_thinGray dark:hover:text-lightMode_black hover:text-lightgray font-medium transition p-[0.625rem] py-[0.3125rem]">
                Show more
                <span><CaretDown weight="bold" /></span></button>
            </div>

          </div>
        )}

      </div>

    </section >
  )
}