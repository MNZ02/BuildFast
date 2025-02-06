import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-[#F3E5D8] px-6 py-10 mt-10">
            <div className="max-w-[1200px] mx-auto">
                {/* Top Section: Logo & Social Media */}
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                    {/* Logo & Club Name */}
                    <div className="flex items-center gap-2">
                        <Image
                            src="/vercel.svg"
                            alt="ISS Club Logo"
                            width={80}
                            height={80}
                        />
                        <span className="text-[#4A2511] text-4xl font-semibold">
                            ISS Club
                        </span>
                    </div>
                    {/* Quick Links Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-32 text-[#4A2511] text-sm">
                        <div>
                            <p className="font-medium mb-2">Category 1</p>
                            <Link href="#" className="block hover:opacity-80 transition-opacity">
                                Sublink 1
                            </Link>
                            <Link href="#" className="block hover:opacity-80 transition-opacity">
                                Sublink 2
                            </Link>
                            <Link href="#" className="block hover:opacity-80 transition-opacity">
                                Sublink 3
                            </Link>
                        </div>
                        <div>
                            <p className="font-medium mb-2">Category 2</p>
                            <Link href="#" className="block hover:opacity-80 transition-opacity">
                                Sublink 1
                            </Link>
                            <Link href="#" className="block hover:opacity-80 transition-opacity">
                                Sublink 2
                            </Link>
                            <Link href="#" className="block hover:opacity-80 transition-opacity">
                                Sublink 3
                            </Link>
                        </div>
                        <div>
                            <p className="font-medium mb-2">Category 3</p>
                            <Link href="#" className="block hover:opacity-80 transition-opacity">
                                Sublink 1
                            </Link>
                            <Link href="#" className="block hover:opacity-80 transition-opacity">
                                Sublink 2
                            </Link>
                            <Link href="#" className="block hover:opacity-80 transition-opacity">
                                Sublink 3
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-[#4A2511] my-6" />

                {/* Bottom Section: Quick Links & Privacy/Terms */}
                <div className="flex flex-col md:flex-row md:justify-between">

                    {/* Social Media Links */}
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link
                            href="#"
                            className="text-[#4A2511] text-sm hover:opacity-80 transition-opacity"
                        >
                            Instagram
                        </Link>
                        <Link
                            href="#"
                            className="text-[#4A2511] text-sm hover:opacity-80 transition-opacity"
                        >
                            YouTube
                        </Link>
                        <Link
                            href="#"
                            className="text-[#4A2511] text-sm hover:opacity-80 transition-opacity"
                        >
                            X
                        </Link>
                        <Link
                            href="#"
                            className="text-[#4A2511] text-sm hover:opacity-80 transition-opacity"
                        >
                            TikTok
                        </Link>
                    </div>
                    {/* Privacy & Terms */}
                    <div className="mt-6 md:mt-0 flex items-center text-sm text-[#4A2511]">
                        <Link href="#" className="hover:opacity-80 transition-opacity">
                            Privacy & Policy
                        </Link>
                        <span className="mx-2">|</span>
                        <Link href="#" className="hover:opacity-80 transition-opacity">
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
