import { categories } from "@/pages/api/browseData";
import Link from "next/link";

export default function CategoryNav({ selectedOption }: { selectedOption: string | undefined }) {
  const baseStyle = "bg-principal hover:ring-2 hover:ring-lightgray"
  const selectedStyle = "bg-bg ring-principal ring-4"
  return (
    <div className="flex md:flex-wrap gap-2">
      {categories.map((categorie) => (
        <Link
          key={categorie.title}
          href={`/browse/${categorie.title.toLowerCase()}`}
          className={`pl-4 pr-16 sm:pr-28 py-1 w-[25%] h-[25%] rounded transition z-0 relative ${selectedOption === categorie.title ? selectedStyle : baseStyle}`}
        >
          <p className="font-bold text-text text-[1.5rem] sm:text-sm">
            {categorie.title}
          </p>
          <div className="absolute md:w-[50%] right-0 top-1/2 -translate-y-1/2 px-2">
            <img
              className="z-1"
              src={categorie.icon}
              alt=""
            />
          </div>
        </Link>
      ))}
    </div>
  )
}