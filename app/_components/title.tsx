"use client";
import React from "react";
import styles from "@/styles/_components/title.module.scss";
import {Titillium_Web} from "next/font/google";
import {NextFont} from "next/dist/compiled/@next/font";
import {StaticImageData} from "next/image";
import img1 from "@/public/images/PlaceholderBanner.jpg";

const Titillium_Web_900: NextFont = Titillium_Web({
    weight: "900",
    style: 'normal',
    subsets: ['latin'],
});

type TitleProps = {
    children?: React.ReactNode;
    title: string | undefined;
    description: string;
    img?: StaticImageData;
    bgMoveUp?: number;
}

export default function Title({
                                  children,
                                  title,
                                  description,
                                  img = img1,
                                  bgMoveUp = 5
                              }: TitleProps): React.ReactElement {
    const [textToType, setTextToType] = React.useState<string>("");

    const styleBanner: object = {
        backgroundImage: `url(${img.src})`,
        backgroundPosition: `center ${bgMoveUp}%`,
        backgroundSize: 'cover',
        backgroundRepeat: "no-repeat",
    }

    React.useEffect((): void => {
        let i: number = 0;
        const text: string = description;
        const speed: number = 75; // Lower is faster
        const interval: NodeJS.Timeout = setInterval((): void => {
            // setTimeout((): void => {
                if (i < text.length) {
                    setTextToType(text.substring(0, i + 1));
                    i++;
                } else {
                    clearInterval(interval);
                }
            // }, 750);
        }, speed);
    }, [description]);

    return (
        <div className={styles.top} style={styleBanner}>
            <div className={styles.overlay}>
                <h1 className={Titillium_Web_900.className}>{title}</h1>
                <p className={Titillium_Web_900.className}>{textToType}</p>
                <h2 className={Titillium_Web_900.className}>{children}</h2>
            </div>
        </div>
    );
}