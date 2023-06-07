import { categories } from "@/pages/api/browseData";
import Link from "next/link";

export default function CategoryNav() {
  return (
    <div className="flex gap-2">
      {categories.map((categorie) => (
        <Link
          key={categorie.title}
          href={`/browse/${categorie.title}`}
          className="pl-4 pr-16 py-1 w-[25%] bg-principal hover:bg-bg hover:ring-4 hover:ring-principal rounded transition z-0 relative"
        >
          <p className="font-bold text-text text-[1.5rem]">
            {categorie.title}
          </p>
          <img
            className="absolute left-56 top-1/2 -translate-y-1/2 translate-x-[-100%] z-1"
            src={categorie.icon}
            alt=""
          />
        </Link>
      ))}
    </div>
  )
}