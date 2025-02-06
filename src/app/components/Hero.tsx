import Image from 'next/image';

const Hero = () => {
    return (
        <div className="relative h-[500px] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full z-10">
                <Image
                    src="/images/hero-image.jpg"
                    alt="Hero Image"
                    layout="fill"
                    objectFit="cover"
                    priority // Added priority for hero image
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 z-20" />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-30">
                <h1 className="text-4xl mb-5 font-normal">Lorem ipsum dolor sit amet consectetur.</h1> {/* Adjusted font-normal */}
                <button className="bg-brown-light text-white py-2 px-6 border-none rounded-md cursor-pointer text-lg">Button</button> {/* Rounded-md and text-lg */}
            </div>
        </div>
    );
};

export default Hero;