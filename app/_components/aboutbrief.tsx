"use client";
import React from "react";
import styles from '@/styles/_components/aboutbrief.module.scss';
import {Work_Sans} from "next/font/google";
import {NextFont} from "next/dist/compiled/@next/font";
import {StaticImageData} from "next/image";

const Work_Sans_300: NextFont = Work_Sans({
    weight: "300",
    style: 'normal',
    subsets: ['latin'],
});

interface AboutBriefProps {
    children?: React.ReactNode;
    img: StaticImageData;
    description: string;
}

export default function AboutBrief({ children, img, description }: AboutBriefProps): React.ReactElement {
    return (
        <section className={`${styles.about} ${Work_Sans_300.className}`}>
            <div className={styles.container}>
                <div className={styles.aboutContent}>
                    <p>
                        {description}
                    </p>
                </div>
                <div className={styles.aboutImage}>
                     <img src={img.src} alt="Oxford Academy Robotics"/>
                </div>
            </div>
            { children }
        </section>
    )
};