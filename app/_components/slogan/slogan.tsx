"use server";
import React from "react";
import styles from "@/app/_components/slogan/slogan.module.scss";
import {StaticImageData} from "next/image";
import {TW_300, TW_600, TW_900} from "@/utils/globalFonts";

type SloganProps = {
    children?: React.ReactNode;
    img: StaticImageData[];
    description?: string;
    title: string;
}

export default async function Slogan({ children, img, description, title }: SloganProps): Promise<React.ReactElement> {
    return (
        <section className={`${styles.slogan} ${TW_300}`}>
            <div className={styles.containerHeader}>
                <h1 className={`${styles.headTitle} ${TW_600}`}>{title}</h1>
                <h2 className={`${styles.headDescription} ${TW_300}`}>{description}</h2>
            </div>
            <div className={styles.container}>
                <div className={styles.sloganContent}>
                    <img className={styles.sloganImage} src={img[0].src} alt="Oxford Academy Robotics"/>
                    <h1 className={`${styles.sloganTitle} ${TW_900}`}>Learn</h1>
                </div>
                <div className={styles.sloganContent}>
                    <img className={styles.sloganImage} src={img[1].src} alt="Oxford Academy Robotics"/>
                    <h1 className={`${styles.sloganTitle} ${TW_900}`}>Compete</h1>
                </div>
                <div className={styles.sloganContent}>
                    <img className={styles.sloganImage} src={img[2].src} alt="Oxford Academy Robotics"/>
                    <h1 className={`${styles.sloganTitle} ${TW_900}`}>Thrive</h1>
                </div>
            </div>
            { children }
        </section>
    )
}