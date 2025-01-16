"use client";
import React from "react";
import styles from "@/styles/_components/footer.module.scss";

export default function Footer(): React.ReactElement {
    return (
        <>
            <nav className={styles.navbar}>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}