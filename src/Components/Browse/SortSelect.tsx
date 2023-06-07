import { ChevronDown, Sparkles, Check, ArrowDownNarrowWide } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

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
      icon: <Sparkles />,
    },
    {
      value: 'viewers',
      text: 'Viewers (High to Low)',
      icon: <ArrowDownNarrowWide />,
    },
  ]
  const [selectedOption, setSelectedOption] = useState<Option>(options[0])
  const [popOverOpened, setPopOverOpened] = useState(false)
  const targetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (targetRef.current && !targetRef.current.contains(event.target as Node)) {
        setPopOverOpened(false)
      }
    }

    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setPopOverOpened(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  function handleSelection(index: number) {
    setSelectedOption(options[index])
    setPopOverOpened(false)
    emitSelection(selectedOption)
  }

  useEffect(() => {
    setSelectedOption(options[0])
  }, [])
  return (
    <div className="relative" ref={targetRef}>
      <button
        className="flex items-center bg-darkgray py-1 px-2 gap-2 rounded text-white border-[2px] border-thingray visited:ring-2 visited:ring-principal"
        onClick={() => setPopOverOpened(!popOverOpened)}
      >
        {selectedOption?.text}
        <ChevronDown />
      </button>

      {/* Popover  */}
      {popOverOpened && (
        <div className="flex bg-gray flex-col  items-start z-10 p-2 absolute origin-top-right right-0  text-white rounded mt-[2px]">
          {options.map((option, index) => {
            console.log(
              `option: ${option.value} | selected ${selectedOption.value}`,
            )
            return (
              <button
                key={index}
                className={`flex items-center gap-1 p-2 rounded transition ${selectedOption.value === option.value
                  ? 'bg-principal hover:bg-principal'
                  : 'bg-transparent hover:bg-white/10 '
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
      )}
    </div>
  )
}
