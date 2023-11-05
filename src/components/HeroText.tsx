type HeroTextProps = {
    text: string;
    className?: string;
};

export default function HeroText({ text, className = "" }: HeroTextProps) {
    return (
        <div
            className={`text-[10rem] md:text-[12rem] lg:text-hero leading-none lg:leading-hero tracking-tighter lg:tracking-hero font-bebas lg:whitespace-nowrap ${className}`}
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
