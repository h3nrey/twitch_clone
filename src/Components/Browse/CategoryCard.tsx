import { truncateNumber } from '@/utils'
import Link from 'next/link'

export interface Card {
  url: string
  imageURL: string
  gameTitle: string
  viewers: number
  tags: string[]
}
export default function CategoryCard({
  url,
  imageURL,
  gameTitle,
  viewers,
  tags,
}: Card) {
  return (
    <div className="flex flex-col gap-2">
      <Link
        href={`/browse/${url}`}
        className="group relative z-0"
      >
        <div
          className={`absolute w-full bg-principal h-full z-[-1] top-0 left-0 content-[""] verticalCard__path scale-0 group-hover:scale-[102%] -translate-x-[2px] translate-y-[1px] origin-bottom-left`}
        ></div>
        <img
          src={imageURL}
          alt=""
          className="group-hover:translate-x-1 group-hover:-translate-y-1 z-1 h-[16rem] w-full object-cover"
        />
      </Link>
      <div className="flex flex-col gap-2 text-lightgray">
        <p className="text-[1.125rem] font-bold leading-tight">{gameTitle}</p>
        <span>{truncateNumber(viewers)} viewers</span>
        <div className='flex gap-2 flex-wrap'>
          {tags.map(tag => {
            return <span className='px-3 bg-gray rounded-full'>{tag}</span>
          })}
        </div>
      </div>
    </div>
  )
}
