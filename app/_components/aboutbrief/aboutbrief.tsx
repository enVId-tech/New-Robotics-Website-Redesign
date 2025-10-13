"use client";
import React from "react";
import styles from '@/app/_components/aboutbrief/aboutbrief.module.scss';
import {StaticImageData} from "next/image";
import {TW_300, TW_600} from "@/utils/globalFonts";
import EditableText from "@/components/editable/EditableText";
import EditableImage from "@/components/editable/EditableImage";

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
                    <EditableText
                        value="About Us"
                        path="homepage.aboutBrief.title"
                        as="h1"
                        className={`${styles.aboutTitle} ${TW_600}`}
                    />
                    <EditableText
                        value={description}
                        path="homepage.aboutBrief.description"
                        as="p"
                        multiline={true}
                    />
                    <button className={`${styles.aboutButton} ${TW_600}`} ref={aboutButtonRef}>Learn More</button>
                </div>
                <div className={styles.aboutImage}>
                    <EditableImage
                        src={img.src}
                        alt="Oxford Academy Robotics"
                        path="homepage.aboutBrief.image"
                    />
                </div>
            </div>
            { children }
        </section>
    )
};