import Image from "next/image";
import RatingCard from "./ratingCard";

export default function HeroSection() {
    return (
        <div className="bg-[#F2F0F1] flex flex-col sm:flex-row justify-around pl-4 ">
            {/* Heading */}
            <div className="flex flex-col">
                <div className="font-sans font-bold text-black leading-9 text-[36px] pt-10  pr-[59px] sm:text-[64px] sm:leading-[64px]">
                    FIND CLOTHES  <br />THAT MATCHES <br />YOUR STYLE</div>

                {/* sub heading */}
                <div className="font-normal text-sm leading-5 text-[#00000099] px-4 py-5 sm:text-base sm:font-normal sm:leading-6 sm:w-[545px]">
                    Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                </div>
                <div className="flex justify-center sm:justify-start">
                    <button className="flex justify-center text-base items-center bg-black text-white w-full m-4 sm:w-[210px] h-[52px] py-4 px-4 rounded-[62px]">Shop Now</button>
                </div>

                {/* rating */}
                <div className="gap-7 sm:gap-8  pt-12 grid grid-cols-3 sm:grid-cols-5 justify-items-center items-center w-full sm:w-[596px]">
                    <RatingCard text1="200+" text2="International Brands" textSize="text-2xl" />
                    <div className="h-12 w-[1px] bg-gray-400"></div>
                    <RatingCard text1="2,000+" text2="High-Quality Products" textSize="text-2xl" />
                    <div className="hidden sm:block h-12 w-[1px] bg-gray-400"></div>
                    <RatingCard text1="30,000+" text2="Happy Customers" textSize="text-2xl" />
                </div>
            </div>
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
