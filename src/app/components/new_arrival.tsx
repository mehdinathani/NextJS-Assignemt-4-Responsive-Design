import ItemCard from "./item_card";

export default function NewArrivalSection() {

    const items = [
        {
            imagePath: "/assets/item1.png",
            itemName: "T-SHIRT WITH TAPE DETAILS",
            itemPrice: "$120",
        },
        {
            imagePath: "/assets/item2.png",
            itemName: "SKINNY FIT JEANS",
            itemPrice: "$145",
        },
        {
            imagePath: "/assets/item3.png",
            itemName: "CHECKERED SHIRT",
            itemPrice: "$180",
        },
        {
            imagePath: "/assets/item4.png",
            itemName: "SLEEVE STRIPED T-SHIRT",
            itemPrice: "$130",
        },
        {
            imagePath: "/assets/item5.png",
            itemName: "VERTICAL STRIPED SHIRT",
            itemPrice: "$212",
        },
        {
            imagePath: "/assets/item6.png",
            itemName: "COURAGE GRAPHIC T-SHIRT",
            itemPrice: "$145",
        },
        {
            imagePath: "/assets/item7.png",
            itemName: "LOOSE FIT BERMUDA SHORTS",
            itemPrice: "$80",
        },
        {
            imagePath: "/assets/item8.png",
            itemName: "FADED SKINNY JEANS",
            itemPrice: "$210",
        },

    ];
    return (
        <div className="px-4 sm:px-28">
            {/* Title */}
            <div className="font-bold text-[32px] sm:text-5xl font-sans flex justify-center pt-[72px] pb-[52px]">
                NEW ARRIVALS
            </div>

            {/* Cards Container */}
            <div className="flex flex-wrap gap-5 justify-center">
                {items.map((item, index) => (
                    <ItemCard
                        key={index}
                        imagePath={item.imagePath}
                        itemName={item.itemName}
                        itemPrice={item.itemPrice}
                    />
                ))}
            </div>
        </div>
    );
}
