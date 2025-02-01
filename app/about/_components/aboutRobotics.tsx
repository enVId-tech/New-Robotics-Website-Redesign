import React from 'react';
import styles from '@/styles/_components/aboutRobotics.module.scss';
import {NextFont} from "next/dist/compiled/@next/font";
import {Titillium_Web, Work_Sans} from "next/font/google";
import {StaticImageData} from "next/image";

const Work_Sans_300: NextFont = Work_Sans({
    weight: "300",
    style: 'normal',
    subsets: ['latin'],
});

const Work_Sans_500: NextFont = Work_Sans({
    weight: "500",
    style: 'normal',
    subsets: ['latin'],
});

const Titillium_Web_900: NextFont = Titillium_Web({
    weight: "900",
    style: 'normal',
    subsets: ['latin'],
});

type AboutRoboticsProps = {
    children?: React.ReactNode;
    img: StaticImageData[];
    description: string;
}

export default async function AboutRobotics({ children, img, description }: AboutRoboticsProps): Promise<React.ReactElement> {
    return (
        <section className={`${styles.aboutRobotics} ${Work_Sans_300.className}`}>
            <div className={styles.container}>
                <div className={styles.aboutRoboticsContent}>
                    <p>
                        {description}
                    </p>
                </div>
                {
                    img.map((img: StaticImageData, index: number): React.ReactElement => {
                        return (
                            <div key={index} className={styles.aboutRoboticsImage}>
                                <img src={img.src} alt="Oxford Academy Robotics"/>
                            </div>
                        )
                    })
                }
            </div>
            {children}
        </section>
    )
}