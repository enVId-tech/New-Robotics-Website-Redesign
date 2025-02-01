"use client";
import React from "react";
import styles from "@/styles/_components/navbar.module.scss";
import image1 from "@/public/logos/OARoboticsLogo_24-25.webp";
import Link from "next/link";
import {NextFont} from "next/dist/compiled/@next/font";
import {Montserrat} from "next/font/google";
import Image from "next/image";

const Montserrat_300: NextFont = Montserrat({
    weight: "300",
    style: 'normal',
    subsets: ['latin'],
});

const Montserrat_500: NextFont = Montserrat({
    weight: "500",
    style: 'normal',
    subsets: ['latin'],
});

type NavbarProps = {
    children?: React.ReactNode;
    isFixed?: boolean;
}

export default function Navbar({ children, isFixed = true }: NavbarProps): React.ReactElement {
    const styleFixed: object = {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
    }

    const styleNotFixed: object = {
        position: "relative",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
    }

    return (
        <>
            <nav className={`${styles.navbar}`} style={isFixed ? styleFixed : {styleNotFixed}}>
                <div className={styles.container}>
                    <div className={styles.left} onClick={(): string => window.location.href = "/"}>
                        <Image src={image1.src} alt={"Oxford Academy Robotics Logo"} width={50} height={50}/>
                        <h1 className={Montserrat_500.className}>OA Robotics</h1>
                    </div>
                    {children}
                    <div className={`${styles.right} ${Montserrat_300.className}`}>
                        <Link href={"/"} className={Montserrat_300.className}>Home</Link>
                        <Link href={"/about"} className={Montserrat_300.className}>About</Link>
                        <Link href={"/frc"} className={Montserrat_300.className}>FRC</Link>
                        <Link href={"/ftc"} className={Montserrat_300.className}>FTC</Link>
                        <Link href={"/vex"} className={Montserrat_300.className}>VEX</Link>
                        <Link href={"/contact"} className={Montserrat_300.className}>Contact</Link>
                    </div>
                </div>
            </nav>
        </>
    );
}