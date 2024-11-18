import Image from "next/image";

export default function PromoLine() {
    return (
        <div className="w-full h-[38px] bg-[#000000] flex items-center text-white px-4">
            {/* Centered Text */}
            <div className="flex-1 flex items-center justify-center gap-2">
                <div className="text-xs sm:text-sm font-normal leading-4">
                    Sign up and get 20% off your first order.
                </div>
                <div className="text-xs sm:text-sm font-medium underline leading-4 cursor-pointer">
                    Sign Up Now
                </div>
            </div>

            {/* Cross Icon */}
            <Image
                src="/assets/cross_icon.png"
                alt="Close promo line"
                width={13.13}
                height={13.13}
                className=" hidden sm:block cursor-pointer"
            />
        </div>
    );
}
