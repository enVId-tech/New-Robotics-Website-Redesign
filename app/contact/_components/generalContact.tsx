"use client";
import React from 'react';
import styles from '@/styles/_components/generalContact.module.scss';

interface GeneralContactProps {
    children?: React.ReactNode;
}

export default function GeneralContact({children}: GeneralContactProps): React.ReactElement {
    return (
        <div className={styles.generalContact}>
            <h2>General Contact</h2>
            <p>For general inquiries, please contact us at:</p>
            <p>Email: <a href="mailto:contact@oarobotics.org">contact@oarobotics.org</a></p>
            <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
            {children}
        </div>
    );
}