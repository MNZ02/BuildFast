import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"

export function Header() {
    return (
        <header className="bg-[#F3E5D8] shadow-md rounded-lg mx-12 mt-10 px-4 fixed top-0 left-0 right-0 z-50">
            <div className="max-w-[1500px] flex h-14 items-center justify-between">
                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/vercel.svg"
                        alt="ISS Club Logo"
                        width={40}
                        height={40}
                        className="h-10 w-10"
                    />
                    <span className="text-[#4A2511] font-semibold text-lg">ISS Club</span>
                </Link>

                {/* Navigation Links */}
                <nav className="flex items-center gap-8">
                    {["HOME", "EVENTS", "GALLERY", "GAMES"].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            className="text-sm font-medium text-[#4A2511] hover:opacity-80 transition-opacity"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                {/* Right Side Controls */}
                <div className="flex items-center gap-4">
                    <button className="text-[#4A2511] hover:opacity-80 transition-opacity">
                        <Search className="h-5 w-5" />
                    </button>
                    <button className="text-sm font-medium text-[#4A2511]">EN</button>
                    <button className="text-sm font-medium text-[#4A2511]">APPLY NOW</button>
                </div>
            </div>
        </header>
    )
}
