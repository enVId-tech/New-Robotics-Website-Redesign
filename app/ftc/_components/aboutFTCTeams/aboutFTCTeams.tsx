"use server";
import React from "react";
import styles from "@/app/ftc/_components/aboutFTCTeams/aboutFTCTeams.module.scss";

type AboutFTCTeamsProps = {
    children?: React.ReactNode;
    title: string;
    description: string;
}

export default async function AboutFTCTeams({ children, title, description }: AboutFTCTeamsProps): Promise<React.ReactElement> {
    return (
        <div className={styles.aboutFTCTeams}>
            <h1>{title}</h1>
            <p>{description}</p>
            { children }
        </div>
    );
}