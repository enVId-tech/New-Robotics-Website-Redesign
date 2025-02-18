"use client";
import React from "react";
import styles from '@/app/_components/aboutbrief/aboutbrief.module.scss';
import {StaticImageData} from "next/image";
import {TW_300, TW_600} from "@/utils/globalFonts";

type AboutBriefProps = {
    children?: React.ReactNode;
    img: StaticImageData;
    description: string;
}

export default function AboutBrief({ children, img, description }: AboutBriefProps): React.ReactElement {
    const aboutButtonRef: React.RefObject<HTMLButtonElement | null> | null = React.useRef<HTMLButtonElement | null>(null);

    React.useEffect((): void => {
        if (aboutButtonRef !== null) {
            if (aboutButtonRef.current !== null) {
                aboutButtonRef.current.addEventListener('click', (): void => {
                    window.location.href = "/about";
                });
            }
        }
    }, []);

    return (
        <section className={`${styles.about} ${TW_300}`}>
            <div className={styles.container}>
                <div className={styles.aboutContent}>
                    <h1 className={`${styles.aboutTitle} ${TW_600}`}>About Us</h1>
                    <p>
                        {description}
                    </p>
                    <button className={`${styles.aboutButton} ${TW_600}`} ref={aboutButtonRef}>Learn More</button>
                </div>
                <div className={styles.aboutImage}>
                     <img src={img.src} alt="Oxford Academy Robotics"/>
                </div>
            </div>
            { children }
        </section>
    )
};