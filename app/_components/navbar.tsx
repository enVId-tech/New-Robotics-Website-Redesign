"use client";
import React from "react";
import styles from "@/styles/_components/navbar.module.scss";
import Link from "next/link";

export default function Navbar(): React.ReactElement {
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.left}>
                    <h1>OA Robotics</h1>
                </div>
                <div className={styles.right}>
                    <Link href={"/"}>Home</Link>
                    <Link href={"/about"}>About</Link>
                    <Link href={"/frc"}>FRC</Link>
                    <Link href={"/ftc"}>FTC</Link>
                    <Link href={"/vex"}>VEX</Link>
                    <Link href={"/contact"}>Contact</Link>
                </div>
            </nav>
        </>
    );
}