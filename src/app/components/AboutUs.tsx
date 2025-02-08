import Image from "next/image";

const AboutUs = () => {
    return (
        <section className="bg-white-off py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-gray-title text-5xl font-normal mb-12 text-[#4A2511] py-6 font-serif">
                    About Us
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-[0.6fr_1fr] gap-x-10 gap-y-10 items-start">
                    {/* Left Side - Text & Icon */}
                    <div className="flex flex-col space-y-16 justify-center items-center">

                        <div className="relative lg:w-[400px] lg:h-[400px] md:w-[250px] md:h-[250px] sm:w-[200px] sm:h-[200px]">
                            <Image
                                src="/globe.svg"
                                alt="Company Logo"
                                layout="fill"
                                objectFit="contain"
                                className="opacity-100"
                            />
                        </div>

                        {/* Quote Text */}
                        <p className="text-gray-text leading-relaxed font-sans font-medium text-2xl">
                            “Et viverra ut odio vulputate. Ligula velit dui dictum phasellus at.
                            Quisque eros bibendum faucibus morbi velit.”
                        </p>
                    </div>


                    <div className="flex flex-col">
                        <div className="text-gray-text text-sm leading-relaxed">
                            <h3 className="text-gray-title text-2xl  mb-4 font-semibold">Lorem ipsum dolor sit amet consectetur</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Et viverra ut odio vulputate. Ligula velit dui dictum phasellus at. Quisque eros bibendum faucibus morbi velit. Porta morbi tellus cras ac pulvinar aliquam. Consequat cursus arcu mattis nisi consectetur. Sed ut et nibh magnis scelerisque cras. Aenean ipsum id sem egestas elit imperdiet odio ac. Auctor justo sed libero varius id quis vitae velit. Condimentum odio turpis nunc aliquam elementum et velit pulvinar. Habitant in id vel metus etiam. Augue eget nullam purus dictum sapien nisi.
                            </p>
                        </div>

                        {/* Images in a horizontal flex container */}
                        <div className="flex gap-8 justify-between" >
                            <div className="relative w-[200px] h-[150px] md:w-[320px] md:h-[420px]">
                                <Image
                                    src="/university.png"
                                    alt="About Us 1"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-md"
                                />
                            </div>
                            <div className="relative w-[200px] h-[150px] md:w-[320px] md:h-[420px]">
                                <Image
                                    src="/university.png"
                                    alt="About Us 2"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-md"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;