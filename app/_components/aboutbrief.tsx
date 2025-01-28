"use client";
import React from "react";
import styles from '@/styles/_components/aboutbrief.module.scss';
// import img from "@/public/images/collage2.png";
import {Work_Sans} from "next/font/google";
import {NextFont} from "next/dist/compiled/@next/font";

const Work_Sans_300: NextFont = Work_Sans({
    weight: "300",
    style: 'normal',
    subsets: ['latin'],
});

interface AboutBriefProps {
    children?: React.ReactNode;
}

export default function AboutBrief({ children }: AboutBriefProps): React.ReactElement {
    return (
        <section className={`${styles.about} ${Work_Sans_300.className}`}>
            <div className={styles.container}>

            </div>
            { children }
        </section>
    )
};