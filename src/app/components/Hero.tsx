import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative w-full h-[800px]">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/university.png"
                    alt="Hero Image"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black opacity-20"></div>
            </div>



            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-start justify-end h-full max-w-[1200px] mx-auto px-1 py-10 text-white">
                <h1 className="text-5xl font-light leading-snug max-w-5xl">
                    Lorem ipsum dolor sit amet consectetur.
                </h1>
                <p className="mt-3 text-lg max-w-lg font-sans">
                    Lorem ipsum dolor sit amet consectetur. Mauris ipsum sed tincidunt vel.
                </p>
                <button className="absolute bottom-10 right-0 bg-[#FFC107] text-black py-2 px-6 lg:w-40 md:w-32 sm:w-24  rounded-md text-md font-light shadow-lg hover:bg-[#E0A800] transition">
                    RSVP
                </button>
            </div>

            {/* Carousel Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <div className="w-3 h-3 bg-white rounded-full opacity-50"></div>
                <div className="w-3 h-3 bg-white rounded-full opacity-50"></div>
            </div>
        </section>
    );
};

export default Hero;
