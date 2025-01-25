"use server";
import React from "react";
import styles from "@/styles/_components/aboutVEXTeams.module.scss";

interface AboutVEXTeamsProps {
    children?: React.ReactNode;
}

export default async function AboutVEXTeams({children}: AboutVEXTeamsProps): Promise<React.ReactElement> {
    return (
        <div className={styles.aboutVEXTeams}>
            <h1>About VEX Teams</h1>
            <p>VEX Teams 1108A and 1108B are a robotics team based in the USA.</p>
            {children}
        </div>
    );
}