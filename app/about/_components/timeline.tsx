import React from 'react';
import styles from "@/styles/_components/timeline.module.scss";
import {NextFont} from "next/dist/compiled/@next/font";
import {Titillium_Web} from "next/font/google";

type TimelineProps = {
    children?: React.ReactNode;
}

const Titillium_Web_900: NextFont = Titillium_Web({
    weight: "900",
    style: 'normal',
    subsets: ['latin'],
});

const Titillium_Web_700: NextFont = Titillium_Web({
    weight: "700",
    style: 'normal',
    subsets: ['latin'],
});

export default async function Timeline({ children }: TimelineProps): Promise<React.ReactElement> {
    return (
        <section className={`${styles.timeline} ${Titillium_Web_700.className}`}>
            <div className={styles.container}>
                <div className={styles.timelineContent}>
                    <span className={`${styles.before} ${Titillium_Web_900.className}`}>

                    </span>
                </div>
                <div className={styles.timelineContent}>
                    <span className={`${styles.during} ${Titillium_Web_900.className}`}>

                    </span>
                </div>
                <div className={styles.timelineContent}>
                    <span className={`${styles.after} ${Titillium_Web_900.className}`}>

                    </span>
                </div>
            </div>
            {children}
        </section>
    )
}