import Image from "next/image";

type ItemCard = {
    imagePath: string;
    itemName: string;
    itemPrice: string;
    itemDiscount?: string; // Optional field
    itemDiscountPrice?: string; // Optional field
};

const ItemCard = (props: ItemCard) => {
    return (
        <div className="flex flex-col rounded-3xl gap-2 w-[198px] h-auto sm:w-[296px] bg-[#F0EEED] p-4">
            {/* Image Section */}
            <div className="relative w-full aspect-square">
                <Image
                    src={props.imagePath}
                    alt={props.itemName}
                    fill // Automatically adjusts width and height
                    className="object-cover rounded-lg"
                />
            </div>
            {/* Content Section */}
            <div className="flex flex-col gap-1 mt-2">
                {/* Item Name */}
                <div className="font-bold text-base leading-5">{props.itemName}</div>

                {/* Rating Stars */}
                <Image
                    className="w-[127px] h-[12px]" // Adjusted height for better visibility
                    src="/assets/rating_stars.png"
                    alt="Rating"
                    width={127}
                    height={26} // Adjusted to provide more height
                />

                {/* Price and Discount Section */}
                <div className="flex gap-2">
                    <div className="font-bold text-base leading-5">{props.itemPrice}</div>
                    {props.itemDiscount && (
                        <div className="font-normal text-base leading-5 line-through">
                            {props.itemDiscount}
                        </div>
                    )}
                </div>

                {/* Discounted Price */}
                {props.itemDiscountPrice && (
                    <div className="font-bold text-base leading-5">{props.itemDiscountPrice}</div>
                )}
            </div>
        </div>
    );
};

export default ItemCard;
