import Link from "next/link";

interface LiveThumbnailProps{
    channelAvatar: string;
    channelName: string;
    channelSubject: string;
    channelColor: string;
    thumb: string;
    liveTitle: string;
    liveTags: string[];
    liveViewers: number;
    onLive: boolean;
}

export default function LiveThumbnail({thumb, channelAvatar, liveTitle, liveTags, channelName, onLive, channelColor, liveViewers, channelSubject}: LiveThumbnailProps){
    return(
    //    <div className="flex flex-col gap-4 w-[18.8rem]"> 
       <div className="flex flex-col gap-4 w-full"> 
        <Link 
        href={`/${channelName}`}
        className={`w-full cursor-pointer rounded-sm overflow-hidden`} style={{backgroundColor: channelColor}}>
            <div className="relative hover:scale-[96%] origin-top-right transition">
                {onLive && (
                    <div className="absolute z-1 p-4">
                        <span 
                            className="bg-red px-[0.3rem] py-[0.05rem] font-bold text-[0.8rem] rounded-[0.2rem] leading-[100%]"
                            >
                                LIVE
                        </span>
                    </div>
                )}
                
                <img src={thumb} className="w-full rounded-sm" alt="" />

                <div className="absolute z-1 p-4 top-full -translate-y-full left-0">
                        <span 
                            className="bg-darkgray opacity-80 px-[0.2rem] py-[0.05rem] font-normal text-[0.8rem] rounded-[0.2rem] leading-[100%]"
                            >
                                {liveViewers} viewers
                        </span>
                </div>
            </div>
            
        </Link>
        <div className="flex gap-2">
            <div>   
                <img 
                className="rounded-full h-10 w-10"
                src={channelAvatar} alt="" 
                />
            </div>
            <div className="flex flex-col overflow-hidden leading-[100%] gap-1">
                <h3 className="whitespace-nowrap overflow-hidden text-ellipsis truncate max-w-[15rem]">{liveTitle}</h3>
                <Link 
                href={`/${channelName}`}
                className="text-[0.9rem] text-lightgray font-thin hover:text-principal transition"
                >
                {channelName}
                </Link>
                <Link 
                href={`/subject/${channelName}`}
                className="text-[0.9rem] text-lightgray font-thin hover:text-principal transition"
                >
                {channelSubject}
                </Link>
                <div className="flex gap-2">
                {liveTags.map((tag, index) => (
                    <p key={index} className="px-2 py-[0.1rem] text-[0.8rem] bg-gray rounded-lg">{tag}</p>
                ))}
                </div>
            </div>
            </div>

       </div>
    )
}