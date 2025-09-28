"use client";
import React from "react";
import styles from "@/app/_components/navbar/navbar.module.scss";
import image1 from "@/public/logos/OARoboticsLogo_24-25.webp";
import Link from "next/link";
import Image from "next/image";
import {M_300, M_500} from "@/utils/globalFonts";

type NavbarProps = {
    children?: React.ReactNode;
    isFixed?: boolean;
}

type DynamicLink = {
    name: string;
    href: string;
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

    const dynamicLinks: DynamicLink[] = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "About",
            href: "/about"
        },
        {
            name: "Sponsors",
            href: "/sponsors"
        },
        {
            name: "FRC",
            href: "/frc"
        },
        {
            name: "FTC",
            href: "/ftc"
        },
        {
            name: "VEX",
            href: "/vex"
        },
        {
            name: "Contact",
            href: "/contact"
        }
    ]

    return (
        <>
            <nav className={`${styles.navbar}`} style={isFixed ? styleFixed : {styleNotFixed}}>
                <div className={styles.container}>
                    <div className={styles.left} onClick={(): string => window.location.href = "/"}>
                        <Image src={image1.src} alt={"Oxford Academy Robotics Logo"} width={50} height={50}/>
                        <h1 className={M_500}>OA Robotics</h1>
                        <Link href="/admin" className={styles.adminLink} title="Admin Panel">⚙️</Link>
                    </div>
                    {children}
                    <div className={`${styles.right} ${M_300}`}>
                        {
                            dynamicLinks.map((link: DynamicLink, index: number): React.ReactElement => {
                                return (
                                    <Link href={link.href} key={index} className={M_300}>{link.name}</Link>
                                );
                            })
                        }
                    </div>
                </div>
            </nav>
        </>
    );
}