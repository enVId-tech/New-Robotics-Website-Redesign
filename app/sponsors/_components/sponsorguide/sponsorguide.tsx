import React from "react";
import styles from "@/app/sponsors/_components/sponsorguide/sponsorguide.module.scss";
import {TW_900} from "@/utils/globalFonts";

type SponsorGuide = {
    children?: React.ReactNode;
}

export default async function SponsorGuide({children}: SponsorGuide): Promise<React.ReactElement> {
    return (
        <div className={`${styles.sponsorGuide} ${TW_900}`}>
            <h1>How to Sponsor</h1>
            <div className={styles.sponsorGuideContent}>
                <div className={styles.sponsorGuideContentMain}>
                    <div className={styles.sponsorGuideContentItem}>
                        <h2>Step 1</h2>
                        <p>Fill out the form below</p>
                    </div>
                </div>
                <div className={styles.sponsorGuideContentMain}>
                    <div className={styles.sponsorGuideContentItem}>
                        <h2>Step 2</h2>
                        <p>Wait for a response from our team</p>
                    </div>
                </div>
                <div className={styles.sponsorGuideContentMain}>
                    <div className={styles.sponsorGuideContentItem}>
                        <h2>Step 3</h2>
                        <p>Get started with your sponsorship!</p>
                    </div>
                </div>
            </div>
            {children}
        </div>
    )
}