import Image from "next/image";

const AboutUs = () => {
    return (
        <section className="bg-white-off py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-gray-title text-5xl font-normal mb-12">
                    About Us
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-x-16 gap-y-10 items-start"> {/* Adjusted grid-cols and items-start */}
                    {/* Left Side - Text & Icon */}
                    <div className="flex flex-col items-start space-y-8"> {/* Increased space-y */}
                        {/* Logo Image - Changed to Logo and adjusted size */}
                        <div className="relative w-[200px] h-[200px] md:w-[250px] md:h-[250px]"> {/* Adjusted sizes for logo */}
                            <Image
                                src="/globe.svg" // Replace with your actual logo image path
                                alt="Company Logo"
                                layout="fill"
                                objectFit="contain"
                                className="opacity-100 mx-auto w-1/2" // Logo is not faded, set opacity to 100
                            />
                        </div>

                        {/* Quote Text */}
                        <p className="text-gray-text text-lg italic leading-relaxed"> {/* Added leading-relaxed for better line height */}
                            “Et viverra ut odio vulputate. Ligula velit dui dictum phasellus at.
                            Quisque eros bibendum faucibus morbi velit.”
                        </p>
                    </div>

                    {/* Right Side - Text and Images in Flex */}
                    <div className="flex flex-col space-y-8"> {/* Flex container for right side, space-y for vertical gap */}
                        {/* Right Side Paragraph */}
                        <div className="text-gray-text text-lg leading-relaxed"> {/* Added leading-relaxed here too */}
                            <h3 className="text-gray-title text-2xl font-normal mb-4">Lorem ipsum dolor sit amet consectetur</h3> {/* Title for right paragraph */}
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Et viverra ut odio vulputate. Ligula velit dui dictum phasellus at. Quisque eros bibendum faucibus morbi velit. Porta morbi tellus cras ac pulvinar aliquam. Consequat cursus arcu mattis nisi consectetur. Sed ut et nibh magnis scelerisque cras. Aenean ipsum id sem egestas elit imperdiet odio ac. Auctor justo sed libero varius id quis vitae velit. Condimentum odio turpis nunc aliquam elementum et velit pulvinar. Habitant in id vel metus etiam. Augue eget nullam purus dictum sapien nisi.
                            </p>
                        </div>

                        {/* Images in a horizontal flex container */}
                        <div className="flex gap-4"> {/* Horizontal flex for images, gap-4 for spacing */}
                            <div className="relative w-[200px] h-[150px] md:w-[220px] md:h-[170px]"> {/* Image 1 container, adjusted sizes */}
                                <Image
                                    src="/university.png" // Replace with your actual image path 1
                                    alt="About Us 1"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-md" // Slightly less rounded corners - rounded-md
                                />
                            </div>
                            <div className="relative w-[200px] h-[150px] md:w-[220px] md:h-[170px]"> {/* Image 2 container, adjusted sizes */}
                                <Image
                                    src="/university.png" // Replace with your actual image path 2
                                    alt="About Us 2"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-md" // Slightly less rounded corners - rounded-md
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