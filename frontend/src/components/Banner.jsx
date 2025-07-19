export default function Banner() {
    return (
        <section className="relative bg-black overflow-hidden py-16 px-4 sm:px-6 lg:px-12 text-white">
        {/* Blurred Circle Background */}
        <div className="absolute right-1/4 top-0 w-[300px] h-[300px] bg-zinc-300 opacity-30 blur-[100px] rounded-full -z-10" />

        {/* Main Content */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left Section */}
            <div className="flex-1 space-y-6">
                <p className="text-green-500 text-base font-semibold">Categories</p>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-wide leading-tight">
                    Enhance Your Music Experience
                </h1>

                {/* Timer */}
                <div className="flex gap-4 flex-wrap">
                    {[
                        { label: "Hours", value: "23" },
                        { label: "Days", value: "05" },
                        { label: "Minutes", value: "59" },
                        { label: "Seconds", value: "35" },
                    ].map(({ label, value }) => (
                        <div
                            key={label}
                            className="w-16 h-16 bg-white rounded-full flex flex-col items-center justify-center text-black"
                        >
                            <div className="font-semibold text-base">{value}</div>
                            <div className="text-xs">{label}</div>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <button className="mt-6 px-8 py-3 bg-green-500 rounded-full text-white font-medium hover:bg-green-600 transition">
                    Buy Now!
                </button>
            </div>

            {/* Right Section: Product Image */}
            <div className="flex-1 flex justify-center items-center">
                <img
                    src="/banner.png"
                    alt="Flash Sale Product"
                    className="rounded-lg object-contain max-w-full h-[300px]"
                />
            </div>
        </div>
    </section>
    );
}