import React from "react";
import styles from "@/app/sponsors/sponsorguide/sponsorguide.module.scss";
import {TW_900} from "@/utils/globalFonts";

type SponsorGuide = {
    children?: React.ReactNode;
}

export default async function SponsorGuide({ children }: SponsorGuide): Promise<React.ReactElement> {
    return (
        <div className={`${styles.sponsorGuide} ${TW_900}`}>
            <h1>How to Sponsor</h1>
            { children }
        </div>
    )
}