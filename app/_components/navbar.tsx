"use client";
import React from "react";
import styles from "@/styles/navbar.module.scss";

export default function Navbar(): React.ReactElement {
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