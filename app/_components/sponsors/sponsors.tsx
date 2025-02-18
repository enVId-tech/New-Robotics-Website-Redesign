"use server";
import React from "react";
import styles from "@/app/_components/sponsors/sponsors.module.scss";
import {StaticImageData} from "next/image";
import {TW_300} from "@/utils/globalFonts";


type SponsorsProps = {
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
        <section className={`${styles.sponsors} ${TW_300}`}>
            <div className={styles.container}>
                <h1 className={`${styles.sponsorsTitle} ${TW_300}`}>{title}</h1>
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