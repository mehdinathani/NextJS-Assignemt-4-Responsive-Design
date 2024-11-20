import Image from "next/image";

type BrandImagesProps = {
    imagePath: string;
    alt: string;
};

const BrandImages: React.FC<BrandImagesProps> = ({ imagePath, alt }) => {
    return (
        <div className="flex justify-center items-center px-8 py-4 sm:px-[50px] sm:py-[42.01px]">
            <Image
                src={imagePath}
                alt={alt}
                width={116.74} // Mobile size
                height={23.25} // Mobile size
                className="object-contain  sm:h-[33.16px]" // Desktop size overrides
            />
        </div>
    );
};

export default BrandImages;
