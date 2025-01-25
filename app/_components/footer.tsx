"use client";
import React from "react";
import styles from "@/styles/_components/footer.module.scss";
import Link from "next/link";

interface FooterProps {
    children?: React.ReactNode;
}

export default function Footer({children}: FooterProps): React.ReactElement {
    return (
        <footer className={styles.footer}>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>
            {children}
        </footer>
    );
}