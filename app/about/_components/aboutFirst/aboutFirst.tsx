import React from "react";
import styles from '@/app/about/_components/aboutFirst/aboutFirst.module.scss';

type AboutFirstProps = {
    children?: React.ReactNode;
    title: string;
    description: string;
}

export default function AboutFirst({ children, title, description }: AboutFirstProps): React.ReactElement {
    return (
        <section className={styles.aboutFirst}>
            <div className={styles.container}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            {children}
        </section>
    );
}