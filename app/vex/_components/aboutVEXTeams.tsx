"use server";
import React from "react";
import styles from "@/styles/_components/aboutVEXTeams.module.scss";

type AboutVEXTeamsProps = {
    children?: React.ReactNode;
    title: string;
    description: string;
}

export default async function AboutVEXTeams({
                                                children,
                                                title,
                                                description
                                            }: AboutVEXTeamsProps): Promise<React.ReactElement> {
    return (
        <div className={styles.aboutVEXTeams}>
            <h1>{title}</h1>
            <p>{description}</p>
            {children}
        </div>
    );
}