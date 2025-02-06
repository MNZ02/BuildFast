import Titlebar from "../components/Titlebar";

const images = Array(28).fill("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpkRo55g2im2brqkZGDGcXpW98SN_c-hJiAA&s");

export default function Events() {
    return (
        <main className="max-w-[1200px] mx-auto px-4 pt-24 pb-12">
            <Titlebar name="Event Name" showDate={false} />

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-md">
                        <img
                            src={image}
                            alt={`Event image ${index + 1}`}
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                ))}
            </div>
        </main>
    );
}
