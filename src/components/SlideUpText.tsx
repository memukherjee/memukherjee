type SlideUpTextProps = { text: string };

export default function SlideUpText({ text }: SlideUpTextProps) {
    return (
        <span className="text-giant block font-bebas leading-[1] whitespace-nowrap relative group/heading">
            <span
                data-content={text}
                className="inline-block w-full h-full absolute inset-0 before:content-[attr(data-content)] before:bg-gradient-to-b before:from-primary before:from-50% before:to-50% before:to-accent before:bg-clip-text before:text-transparent before:bg-[length:100%_200%] before:bg-[0%_0%] before:group-hover/heading:bg-[100%_100%] before:transition-all before:duration-300 before:ease-linear"
            ></span>
            {text}
        </span>
    );
}
