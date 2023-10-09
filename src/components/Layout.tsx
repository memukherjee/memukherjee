import { ReactNode } from "react";
import SmoothScroll from "./SmoothScroll";

type LayoutProps = {
    children?: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <SmoothScroll>
            <main className="bg-primary min-h-screen h-[200vh] text-primary font-medium font-sans">
                {children}
            </main>
        </SmoothScroll>
    );
}
