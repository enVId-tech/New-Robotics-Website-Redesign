"use client";
import React from "react";
import styles from "@/app/_components/title/title.module.scss";
import {StaticImageData} from "next/image";
import bannerImg from "@/public/images/PlaceholderBanner.jpg";
import {TW_900} from "@/utils/globalFonts";

type TitleProps = {
    children?: React.ReactNode;
    title: string | undefined;
    description: string;
    img1?: StaticImageData;
    img2?: StaticImageData;
    bgMoveUp?: number;
}

export default function Title({
                                  children,
                                  title,
                                  description,
                                  img1 = bannerImg,
                                  img2,
                                  bgMoveUp = 5
                              }: TitleProps): React.ReactElement {
    const [textToType, setTextToType] = React.useState<string>("");
    const [bgParallax, setBgParallax] = React.useState<number>(0);


    // Make a parallax effect with the background image (zoom in the background image to make it possible)
    const styleBanner: object = {
        backgroundPosition: `center ${bgParallax * -0.3}px`,
        backgroundSize: "cover",
        backgroundImage: `url(${img1.src})`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
    }

    React.useEffect((): () => void => {
        const handleScroll: () => void = (): void => {
            setBgParallax(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return (): void => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [bgMoveUp]);


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
                {
                    img2 !== undefined &&
                    <img src={img2.src} alt="Oxford Academy Robotics"/>
                }
                <h1 className={TW_900}>{title}</h1>
                <p className={TW_900}>{textToType}</p>
                <h2 className={TW_900}>{children}</h2>
            </div>
        </div>
    );
}