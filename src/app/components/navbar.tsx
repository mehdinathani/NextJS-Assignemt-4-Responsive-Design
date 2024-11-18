import Image from "next/image";

export default function NavBar() {
    return (
        <nav className="flex justify-between px-4 py-6 items-center bg-white">
            {/* menu icon */}
            <Image className="ml-3 sm:hidden" src="/assets/hamburger.png" alt='Hamburger' width={18.75} height={14.25} />

            {/* logo */}
            <div className="ml-3 text-black font-bold text-[25.2px] leading-[30.24px] font-sans sm:text-[32px] sm:leading-[38.4px]">SHOP.CO</div>

            {/* navbar items */}
            <div className="flex">
                <ul className="sm:flex justify-around gap-4 font-normal text-base leading-5 hidden">
                    <li>Shop &#x25BC;</li>
                    <li>On Sale</li>
                    <li>New Arrival</li>
                    <li>Brands</li>
                </ul>
            </div>
            {/* search bar */}
            <div className="hidden sm:flex items-center bg-[#F0F0F0] w-[577px] h-[48px] px-4 gap-4 rounded-[62px]">
                <Image src="/assets/search_icon.png" alt="Search Icon" width={24} height={24} />
                <input
                    type="text"
                    placeholder="Search for products"
                    className="flex-1 bg-transparent border-none outline-none text-black placeholder-gray-500"
                />
            </div>

            {/* navbar icons */}
            <div className="flex items-center gap-4">
                <Image className="sm:hidden" src="/assets/search_icon.png" alt="Search" width={24} height={24} />
                <Image src="/assets/cart.png" alt="Cart" width={24} height={24} />
                <Image src="/assets/profile.png" alt="Profile" width={24} height={24} />
            </div>
        </nav>
    );
}
