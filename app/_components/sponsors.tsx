"use server";
import React from "react";
import styles from "@/styles/_components/sponsors.module.scss";
import {Work_Sans} from "next/font/google";
import {NextFont} from "next/dist/compiled/@next/font";
import {StaticImageData} from "next/image";

const Work_Sans_300: NextFont = Work_Sans({
    weight: "300",
    style: 'normal',
    subsets: ['latin'],
});

interface SponsorsProps {
    children?: React.ReactNode;
    sponsors: Sponsor[];
    title: string;
}

type Sponsor = {
    name: string;
    img: StaticImageData;
    link: string;
}

export default async function Sponsors({ children, sponsors, title }: SponsorsProps): Promise<React.ReactElement> {
    return (
        <section className={`${styles.sponsors} ${Work_Sans_300.className}`}>
            <div className={styles.container}>
                <h1 className={`${styles.sponsorsTitle} ${Work_Sans_300.className}`}>{title}</h1>
                <div className={styles.sponsorsContent}>
                    {
                        sponsors.map((image: Sponsor, index: number): React.ReactElement => (
                            <a key={index} href={image.link} target="_blank" rel="noreferrer">
                                <img src={image.img.src} alt={image.name}/>
                            </a>
                        ))
                    }
                </div>
            </div>
            { children }
        </section>
    )
}