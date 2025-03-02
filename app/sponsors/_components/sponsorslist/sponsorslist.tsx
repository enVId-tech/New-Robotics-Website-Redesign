import React from 'react';
import styles from "@/app/sponsors/_components/sponsorslist/sponsorslist.module.scss";
import {TW_900} from "@/utils/globalFonts";
import {Sponsor, sponsors} from "@/utils/sponsors";

type SponsorsListProps = {
    children?: React.ReactNode;
}

export default async function SponsorsList({ children }: SponsorsListProps): Promise<React.ReactElement> {
    return (
        <section className={`${styles.sponsorsList} ${TW_900}`}>
            <h1>Our Sponsors</h1>
            <div className={styles.sponsorsListContent}>
                {
                    sponsors.map((sponsor: Sponsor, index: number): React.ReactElement => {
                        return (
                            <div key={index} className={styles.sponsor}>
                                <img src={sponsor.img.src} alt={sponsor.name}/>
                            </div>
                        );
                    })
                }
            </div>
            { children }
        </section>
    );
}