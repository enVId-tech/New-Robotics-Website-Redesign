"use client";
import React from 'react';
import styles from '@/app/contact/_components/generalContact/generalContact.module.scss';

type GeneralContactProps = {
    children?: React.ReactNode;
    title?: string;
    description?: string;
    email: string;
    phone: string;
}

export default function GeneralContact({
                                           children,
                                           title = "General Contact",
                                           description = "For general inquiries, please contact us at:",
                                           email,
                                           phone
                                       }: GeneralContactProps): React.ReactElement {
    return (
        <div className={styles.generalContact}>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
            <p>Phone: <a href={`tel:${phone.replaceAll(" ", "").replaceAll("(", "").replaceAll(")", "").replaceAll("-", "")}`}>{phone}</a></p>
            {children}
        </div>
    );
}