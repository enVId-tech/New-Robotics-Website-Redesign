"use client";
import React from "react";
import styles from '@/styles/_components/aboutbrief.module.scss';
import {Titillium_Web, Work_Sans} from "next/font/google";
import {NextFont} from "next/dist/compiled/@next/font";
import {StaticImageData} from "next/image";

const Work_Sans_300: NextFont = Work_Sans({
    weight: "300",
    style: 'normal',
    subsets: ['latin'],
});

const Titillium_Web_600: NextFont = Titillium_Web({
    weight: "600",
    style: 'normal',
    subsets: ['latin'],
});

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
        <section className={`${styles.about} ${Work_Sans_300.className}`}>
            <div className={styles.container}>
                <div className={styles.aboutContent}>
                    <p>
                        {description}
                    </p>
                    <button className={`${styles.aboutButton} ${Titillium_Web_600.className}`} ref={aboutButtonRef}>Learn More</button>
                </div>
                <div className={styles.aboutImage}>
                     <img src={img.src} alt="Oxford Academy Robotics"/>
                </div>
            </div>
            { children }
        </section>
    )
};