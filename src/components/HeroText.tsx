type HeroTextProps = {
    text: string;
    className?: string;
};

export default function HeroText({ text, className = "" }: HeroTextProps) {
    return (
        <div
            className={`text-hero leading-hero tracking-hero font-bebas whitespace-nowrap ${className}`}
        >
            {text.split("").map((letter, index) => {
                return (
                    <span
                        key={index}
                        className="inline-block hover:text-secondary transition-colors duration-200 cursor-default ease-in-out"
                    >
                        {letter}
                    </span>
                );
            })}
        </div>
    );
}
