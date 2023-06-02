import Link from "next/link"
import SearchBar from "./SearchBar"
export default function Header(){
    return(
        <header 
            className="fixed flex z-10 bg-darkgray gap-2 py-2 text-text px-4 w-full justify-between items-center shadow-black shadow-sm"
        >
            <nav className="flex gap-2">
                <Link href="/">
                 <img src="https://www.freepnglogos.com/uploads/twitch-app-logo-png-3.png" className="h-6" alt="" />
                </Link>
                <Link href="/browse" className="transition font-bold hover:pointer hover:text-principal">Browse</Link>
            </nav>
            
            <SearchBar />

            <div>
                <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/7b68f6a2-1316-47c9-98e6-4413dad16837-profile_image-70x70.jpg" 
                className="rounded-full h-8"
                alt="" />
            </div>
        </header>

    )
}