import BrandImages from "./brand_image";

export default function BrandCard() {
    return (
        <div className="w-full grid grid-cols-3 sm:grid-cols-5 justify-items-center items-center bg-black ">
            <BrandImages imagePath="/assets/brand1.png" alt="Brand 1" />
            <BrandImages imagePath="/assets/brand2.png" alt="Brand 2" />
            <BrandImages imagePath="/assets/brand3.png" alt="Brand 3" />
            <BrandImages imagePath="/assets/brand4.png" alt="Brand 4" />
            <BrandImages imagePath="/assets/brand5.png" alt="Brand 5" />
        </div>
    );
}