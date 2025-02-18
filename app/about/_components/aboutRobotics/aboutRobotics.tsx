import React from 'react';
import styles from '@/app/about/_components/aboutRobotics/aboutRobotics.module.scss';
import {StaticImageData} from "next/image";
import {M_300, TW_700, TW_900} from "@/utils/globalFonts";

type AboutRoboticsProps = {
    children?: React.ReactNode;
    img: StaticImageData[];
    description: string;
}

export default async function AboutRobotics({ children, img, description }: AboutRoboticsProps): Promise<React.ReactElement> {
    return (
        <section className={`${styles.aboutRobotics} ${M_300}`}>
            <div className={styles.container}>
                <div className={styles.aboutRoboticsImg}>
                    <img src={img[2].src} alt="Oxford Academy Robotics"/>
                </div>
                <div className={styles.aboutRoboticsContent}>
                    <h1 className={`${TW_900}`}>What is OA Robotics?</h1>
                    <p className={`${TW_700}`}>
                        {description}
                    </p>
                </div>
                {/*{*/}
                {/*    img.map((img: StaticImageData, index: number): React.ReactElement => {*/}
                {/*        return (*/}
                {/*            <div key={index} className={styles.aboutRoboticsImage}>*/}
                {/*                <img src={img.src} alt="Oxford Academy Robotics"/>*/}
                {/*            </div>*/}
                {/*        )*/}
                {/*    })*/}
                {/*}*/}
            </div>
            {children}
        </section>
    )
}