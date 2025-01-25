"use server";
import React from "react";
import styles from "@/styles/_components/aboutFTCTeams.module.scss";

interface AboutFTCTeamsProps {
    children?: React.ReactNode;
}

export default async function AboutFTCTeams({ children }: AboutFTCTeamsProps): Promise<React.ReactElement> {
    return (
        <div className={styles.aboutFTCTeams}>
            <h1>About FTC Teams</h1>
            <p>FTC Teams 19812 and 23796 are a robotics team based in the USA.</p>
            { children }
        </div>
    );
}