// import { ChevronDown, Sparkles, Check, ArrowDownNarrowWide } from 'a'
import { useEffect, useRef, useState } from 'react'
import { PopoverContent, PopoverRoot, PopoverTrigger } from '../PopOver'
import { ArrowArcRight, CaretDown, Check, SortDescending, Sparkle } from 'phosphor-react'

export interface Option {
  value: string
  text: string
  icon: any
}

interface SortSelectProps {
  emitSelection: (option: Option) => void
}
export default function SortSelect({ emitSelection }: SortSelectProps) {
  const options: Option[] = [
    {
      value: 'recomended',
      text: 'Recomended For You',
      icon: <Sparkle />,
    },
    {
      value: 'viewers',
      text: 'Viewers (High to Low)',
      icon: <SortDescending />,
    },
  ]
  const [selectedOption, setSelectedOption] = useState<Option>(options[0])
  const [popOverOpened, setPopOverOpened] = useState(false)
  const targetRef = useRef<HTMLDivElement>(null)

  function handleSelection(index: number) {
    setSelectedOption(options[index])
    emitSelection(selectedOption)
  }

  useEffect(() => {
    setSelectedOption(options[0])
  }, [])
  return (
    <PopoverRoot>
      <PopoverTrigger asChild>
        <div className='h-[1.875rem] flex items-center'>
          <button
            className="flex items-center bg-darkgray dark:bg-lightMode_gray dark:text-lightMode_black px-[0.625rem] gap-2 rounded text-[0.8125rem] text-white ring-[1px] ring-thingray hover:ring-[2px] focus:ring-4 focus:ring-principal"
          >
            {selectedOption?.text}
            <CaretDown />
          </button>
        </div>
      </PopoverTrigger>

      <PopoverContent>
        <div className="flex bg-gray dark:bg-lightMode_white dark:text-lightMode_black flex-col  items-start z-10 p-2 absolute origin-top-right right-0  text-white rounded mt-[2px]">
          {options.map((option, index) => {
            return (
              <button
                key={index}
                className={`flex items-center gap-1 p-2 w-full rounded transition ${selectedOption.value === option.value
                  ? 'bg-principal hover:bg-principal dark:text-lightMode_white'
                  : 'bg-transparent hover:bg-white/10 dark:hover:bg-lightgray'
                  }`}
                onClick={() => handleSelection(index)}
              >
                <span className="w-8 h-6">{option.icon}</span>
                <p className="flex-1 whitespace-nowrap">{option.text}</p>
                <span className="px-2">
                  <Check
                    className={`${selectedOption.value === option.value
                      ? 'visible'
                      : 'invisible'
                      }`}
                  />
                </span>
              </button>
            )
          })}
        </div>
      </PopoverContent>
    </PopoverRoot>
  )
}
