"use server";
import React from "react";
import styles from "@/styles/_components/slogan.module.scss";
import { Work_Sans } from "next/font/google";
import {NextFont} from "next/dist/compiled/@next/font";
import {StaticImageData} from "next/image";

const Work_Sans_300: NextFont = Work_Sans({
    weight: "300",
    style: 'normal',
    subsets: ['latin'],
});

interface SloganProps {
    children?: React.ReactNode;
    img: StaticImageData[];
}

export default async function Slogan({ children, img }: SloganProps): Promise<React.ReactElement> {


    return (
        <section className={`${styles.slogan} ${Work_Sans_300.className}`}>
            <div className={styles.containerHeader}>
                <h1 className={styles.headTitle}>OA Robotics - Our Mission</h1>
                <h2 className={styles.headDescription}></h2>
            </div>
            <div className={styles.container}>
                <div className={styles.sloganContent}>
                    <img className={styles.sloganImage} src={img[0].src} alt="Oxford Academy Robotics"/>
                </div>
                <div className={styles.sloganContent}>
                    <img className={styles.sloganImage} src={img[1].src} alt="Oxford Academy Robotics"/>
                </div>
                <div className={styles.sloganContent}>
                    <img className={styles.sloganImage} src={img[2].src} alt="Oxford Academy Robotics"/>
                </div>
            </div>
            { children }
        </section>
    )
}