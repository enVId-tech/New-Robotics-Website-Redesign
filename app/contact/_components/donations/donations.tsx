"use client";
import React from "react";
import styles from '@/app/contact/_components/donations/donations.module.scss';

type DonationsProps = {
    children?: React.ReactNode;
}

export default function Donations({ children }: DonationsProps): React.ReactElement {
    return (
        <div className={styles.donations}>
            <h2>Support Our Team</h2>
            <p>Your contributions help us achieve more in robotics.</p>
            <button>Donate Now</button>
            {children}
        </div>
    );
}