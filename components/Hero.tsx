import Image from "next/image";
import { Button } from "@/components/ui/button"

import '../styles/hero.css';
import { DoubleArrowDownIcon, DownloadIcon } from "@radix-ui/react-icons";

type HeroProps = {};

export const Hero = (props: HeroProps) => {
    return (
        <section className="hero-container flex justify-center items-center flex-col mt-16">
            {/* image */}
            <section className="hero-image">
                <Image src="/hero_1.jpg" alt="hero image" width={500} height={500} />
            </section>
            {/* hero text and title */}
            <section className="flex flex-col justify-center items-center mt-16">
                <p className="text-center mt-4 text-5xl font-bold">Manas Patel ✌️</p>
                <p className="text-center mt-2 text-2xl">___.Frontend Engineer</p>
                <p className="text-center mt-4">Lorem  obcaecati delectus eaque, nihil perspiciatis repudiandae, magni neque rerum accusantium.</p>
                </section>
            {/* hero cta */}
            <section className="mt-8">
            <Button className="flex gap-2">Download Resume <DownloadIcon /></Button>
            </section>
            <section className="mt-8">
                <Button variant="outline" className="flex gap-2 rounded-full animate-bounce"><DoubleArrowDownIcon /></Button>
            </section>
        </section>
    );
}
