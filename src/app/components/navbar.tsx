'use client'
import Image from "next/image";
import { useState } from "react";

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="flex justify-between px-4 py-6 items-center bg-white relative">
            {/* menu icon */}
            <Image
                className="ml-3 sm:hidden cursor-pointer"
                src="/assets/hamburger.png"
                alt="Hamburger"
                width={18.75}
                height={14.25}
                onClick={() => setMenuOpen(!menuOpen)}
            />

            {/* logo */}
            <div className="ml-3 text-black font-bold text-[25.2px] leading-[30.24px] font-sans sm:text-[32px] sm:leading-[38.4px]">
                SHOP.CO
            </div>

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

            {/* Mobile Menu Box */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md z-10 sm:hidden">
                    <ul className="flex flex-col gap-4 p-4">
                        <li>Shop &#x25BC;</li>
                        <li>On Sale</li>
                        <li>New Arrival</li>
                        <li>Brands</li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
