type HeroTextProps = {
    text: string;
};

export default function HeroText({ text }: HeroTextProps) {
    return (
        <div className="text-hero leading-hero tracking-hero font-bebas whitespace-nowrap">
            {text.split("").map((letter,index) => {
                return (
                    <span key={index} className="inline-block hover:text-secondary transition-colors duration-200 cursor-default ease-in-out">
                        {letter}
                    </span>
                );
            })}
        </div>
    );
}
