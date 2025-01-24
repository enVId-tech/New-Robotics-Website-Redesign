"use client";
import React from "react";
import styles from "@/styles/_components/navbar.module.scss";
import image1 from "@/public/OARoboticsLogo_24-25.webp";
import Link from "next/link";

export default function Navbar(): React.ReactElement {
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.left} onClick={() => window.location.href = "/"}>
                    <img src={image1.src} alt={"Oxford Academy Robotics Logo"}/>
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