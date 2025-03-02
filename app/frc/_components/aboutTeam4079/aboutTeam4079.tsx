"use server";
import React from "react";
import styles from "@/app/frc/_components/aboutTeam4079/aboutFRCTeams.module.scss";
import img from "@/public/logos/FRC4079Logo_White.png";
import {TW_700} from "@/utils/globalFonts";
import Image from "next/image";

interface AboutTeam4079Props {
    children?: React.ReactNode;
    description: string[];
}

export default async function AboutTeam4079({children, description}: AboutTeam4079Props): Promise<React.ReactElement> {
    return (
        <section className={styles.aboutTeam4079}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Image src={img.src} alt={"Team 4079"} width={750} height={300} />
                </div>
                <div className={`${styles.content} ${TW_700}`}>
                    <h2>About Team 4079</h2>
                    {description.map((d: string, i: number): React.ReactElement => <p key={i}>{d}</p>)}
                    {children}
                </div>
            </div>
        </section>
    );
}