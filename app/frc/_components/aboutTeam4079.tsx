"use server";
import React from "react";
import styles from "@/styles/_components/aboutFRCTeams.module.scss";
import img from "@/public/logos/FRC4079Logo.png";
import Image from "next/image";

interface AboutTeam4079Props {
    children?: React.ReactNode;
    description: string[];
}

export default async function AboutTeam4079({children, description}: AboutTeam4079Props): Promise<React.ReactElement> {


    return (
        <section className={styles.aboutTeam4079}>
            <div className={styles.content}>
                <h2>About Team 4079</h2>
                {description.map((d: string, i: number): React.ReactElement => <p key={i}>{d}</p>)}
                <Image src={img.src} alt={"Team 4079"} width={750} height={300} />
                {children}
            </div>
        </section>
    );
}