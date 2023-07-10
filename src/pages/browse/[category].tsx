import CategoryNav from "@/Components/Browse/CategoryNav";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { categories } from "../api/browseData";

export default function Category() {
    const router = useRouter()
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")

    async function handleLoadData() {
        const categorie = categories.filter(categorie => categorie.title.toLowerCase() == router.query.category)[0]
        setDescription(categorie.description)
        setCategory(categorie.title)
    }

    useEffect(() => {
        handleLoadData()
    }, [router.query])

    return (
        <div className="font-sans px-[1.875rem] pt-10 h-screen">
            <div className="flex flex-col gap-2 mb-6">
                <h2 className="text-[3.375rem] font-bold text-text capitalize leading-[100%]">{router.query.category}</h2>
                <p className="text-[1.5rem] text-thingray font-semibold">{description}</p>
            </div>
            <CategoryNav selectedOption={category} />
        </div >
    )
}