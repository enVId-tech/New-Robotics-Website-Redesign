"use client";
import React from "react";
import styles from "@/app/_components/navbar/navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import {M_300, M_500} from "@/utils/globalFonts";
import { useContent } from "@/hooks/useContent";

type NavbarProps = {
    children?: React.ReactNode;
    isFixed?: boolean;
}

type DynamicLink = {
    name: string;
    href: string;
}

export default function Navbar({ children, isFixed = true }: NavbarProps): React.ReactElement {
    const { content } = useContent();
    
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

    // Use branding from CMS or fallback to defaults
    const branding = content?.site || {
        logo: "/logos/OARoboticsLogo_24-25.webp",
        logoAlt: "OA Robotics Logo",
        organizationName: "OA Robotics"
    };

    // Use navigation from CMS or fallback to default
    const dynamicLinks: DynamicLink[] = content?.navigation?.items?.filter(item => item.visible)
        .sort((a, b) => a.order - b.order) || [
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
                        <Image src={branding.logo} alt={branding.logoAlt} width={50} height={50}/>
                        <h1 className={M_500}>{branding.organizationName}</h1>
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