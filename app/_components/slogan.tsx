"use server";
import React from "react";
import styles from "@/styles/_components/slogan.module.scss";
import {Titillium_Web, Work_Sans} from "next/font/google";
import {NextFont} from "next/dist/compiled/@next/font";
import {StaticImageData} from "next/image";

const Work_Sans_300: NextFont = Work_Sans({
    weight: "300",
    style: 'normal',
    subsets: ['latin'],
});

const Work_Sans_500: NextFont = Work_Sans({
    weight: "500",
    style: 'normal',
    subsets: ['latin'],
});

const Titillium_Web_900: NextFont = Titillium_Web({
    weight: "900",
    style: 'normal',
    subsets: ['latin'],
});

type SloganProps = {
    children?: React.ReactNode;
    img: StaticImageData[];
    description?: string;
    title: string;
}

export default async function Slogan({ children, img, description, title }: SloganProps): Promise<React.ReactElement> {
    return (
        <section className={`${styles.slogan} ${Work_Sans_300.className}`}>
            <div className={styles.containerHeader}>
                <h1 className={`${styles.headTitle} ${Work_Sans_500.className}`}>{title}</h1>
                <h2 className={`${styles.headDescription} ${Work_Sans_300.className}`}>{description}</h2>
            </div>
            <div className={styles.container}>
                <div className={styles.sloganContent}>
                    <img className={styles.sloganImage} src={img[0].src} alt="Oxford Academy Robotics"/>
                    <h1 className={`${styles.sloganTitle} ${Titillium_Web_900.className}`}>Learn</h1>
                </div>
                <div className={styles.sloganContent}>
                    <img className={styles.sloganImage} src={img[1].src} alt="Oxford Academy Robotics"/>
                    <h1 className={`${styles.sloganTitle} ${Titillium_Web_900.className}`}>Compete</h1>
                </div>
                <div className={styles.sloganContent}>
                    <img className={styles.sloganImage} src={img[2].src} alt="Oxford Academy Robotics"/>
                    <h1 className={`${styles.sloganTitle} ${Titillium_Web_900.className}`}>Thrive</h1>
                </div>
            </div>
            { children }
        </section>
    )
}