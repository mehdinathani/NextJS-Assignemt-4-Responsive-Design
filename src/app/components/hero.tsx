import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="bg-[#F2F0F1]">
            {/* Heading */}
            <div className="">FIND CLOTHES THAT MATCHES YOUR STYLE</div>
            {/* Website Image with Stacked Stars (Desktop Version) */}
            <div className="hidden sm:block relative flex justify-end items-center">

                <div className="relative bg-[#F2F0F1] ">
                    {/* Left Star */}
                    <div className="absolute right-[400px] top-1/2 transform -translate-y-1/2">
                        <Image src="/assets/start1.png" alt="Left Star" width={50} height={50} />
                    </div>

                    {/* Main Image - Right Aligned */}
                    <div className="flex justify-end">
                        <Image className="max-w-screen-xl" src="/assets/heroBannerMobile.png" alt="Hero" width={390} height={448} />
                    </div>

                    {/* Right Star */}
                    <div className="absolute right-[25px] top-1/4 transform -translate-y-1/2">
                        <Image src="/assets/star2.png" alt="Right Star" width={50} height={50} />
                    </div>
                </div>
            </div>

            {/* Mobile Image with Stacked Stars */}
            <div className="relative flex justify-center items-center sm:hidden">

                <div className="relative">
                    {/* Left Star */}
                    <div className="absolute -[10px] top-1/2 transform -translate-y-1/2">
                        <Image src="/assets/start1.png" alt="Left Star" width={50} height={50} />
                    </div>

                    {/* Main Image - Mobile Centered */}
                    <Image className="w-screen" src="/assets/heroBannerMobile.png" alt="Hero" width={390} height={448} />

                    {/* Right Star */}
                    <div className="absolute right-[25px] top-1/4 transform -translate-y-1/2">
                        <Image src="/assets/star2.png" alt="Right Star" width={50} height={50} />
                    </div>
                </div>
            </div>
        </div>
    );
}
