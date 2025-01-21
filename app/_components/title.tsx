"use client";
import React from "react";
import styles from "@/styles/_components/title.module.scss";
import {Work_Sans} from "next/font/google";
import {NextFont} from "next/dist/compiled/@next/font";

const Work_Sans_300: NextFont = Work_Sans({
    weight: "300",
    style: 'normal',
    subsets: ['latin'],
})

export default function Title(): React.ReactElement {
    const [textToType, setTextToType] = React.useState<string>("Learn. Compete. Thrive");

    // Make a typewriter effect with the text with a sort of ease-in-out effect
    React.useEffect(() => {
        let i: number = 0;
        const text: string = "Learn. Compete. Thrive.";
        const speed: number = 100;
        const interval = setInterval(() => {
            if (i < text.length) {
                setTextToType(text.substring(0, i + 1));
                i++;
            } else {
                clearInterval(interval);
            }
        }, speed);
    }, []);

    return (
        <div className={`${styles.top} ${Work_Sans_300.className}`}>
            <h1>Oxford Academy Robotics</h1>
            <p>{textToType}</p>
        </div>
    );
}