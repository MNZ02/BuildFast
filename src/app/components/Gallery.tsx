import Image from "next/image";
import Link from "next/link";

const Gallery = () => {
    // Replace these with actual images from your Sanity dataset
    const images = Array(6).fill("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpkRo55g2im2brqkZGDGcXpW98SN_c-hJiAA&s");

    return (
        <section className="bg-[#F4E8D6] py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <h2 className="text-[#4A2511] text-5xl font-light mb-12 font-serif">Gallery</h2>

                {/* Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((src, index) => (
                        <div key={index} className="rounded-lg overflow-hidden">
                            <Image
                                src={src}
                                alt={`Gallery Image ${index + 1}`}
                                width={400}
                                height={300}
                                className="object-cover w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px]"
                            />
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="flex justify-center mt-6">
                    <Link href="/gallery">
                        <button className="bg-transparent border-2 border-[#4A2511] text-[#4A2511] py-1 px-4 rounded-3xl font-medium hover:bg-[#4A2511] hover:text-white transition text-sm">
                            VIEW ALL →
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
