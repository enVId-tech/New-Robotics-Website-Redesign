"use client";
import React from "react";
import styles from '@/styles/_components/aboutbrief.module.scss';
import img from "@/public/images/collage2.png";
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
                <div className={styles.aboutContent}>
                    <p>
                        Oxford Academy Robotics is a student-run organization that competes in the FIRST Robotics Competition (FRC), FIRST Tech Challenge (FTC), and VEX Robotics Competition. Our mission is to inspire students to pursue careers in STEM fields by providing them with the opportunity to learn, compete, and thrive in a supportive environment.
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