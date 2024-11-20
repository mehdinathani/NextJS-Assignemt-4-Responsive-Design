type RatingCardProps = {
    text1: string; // The bold text
    text2: string; // The normal text
    textSize: string; // The CSS class for text size
};

const RatingCard: React.FC<RatingCardProps> = ({ text1, text2, textSize }) => {
    return (
        <div className="flex flex-col items-center">
            <div className={`font-bold ${textSize}`}>{text1}</div>
            <div className="font-normal text-xs text-center">{text2}</div>
        </div>
    );
};

export default RatingCard;
