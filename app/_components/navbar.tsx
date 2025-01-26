"use client";
import React from "react";
import styles from "@/styles/_components/navbar.module.scss";
import image1 from "@/public/logos/OARoboticsLogo_24-25.webp";
import Link from "next/link";
import {NextFont} from "next/dist/compiled/@next/font";
import {Work_Sans} from "next/font/google";

const Work_Sans_300: NextFont = Work_Sans({
    weight: "300",
    style: 'normal',
    subsets: ['latin'],
});

const Work_Sans_500: NextFont = Work_Sans({
    weight: "500",
    style: 'normal',
    subsets: ['latin'],
});

interface NavbarProps {
    children?: React.ReactNode;
    isFixed?: boolean;
}

export default function Navbar({ children, isFixed = true }: NavbarProps): React.ReactElement {
    const [isScrolled, setIsScrolled] = React.useState<boolean>(false);

    const styleFixed: object = {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
    }

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav className={`${styles.navbar} ${isScrolled ? styles.isWhite : ""}`} style={isFixed ? styleFixed : {}}>
                <div className={styles.container}>
                    <div className={styles.left} onClick={() => window.location.href = "/"}>
                        <img src={image1.src} alt={"Oxford Academy Robotics Logo"}/>
                        <h1 className={Work_Sans_500.className}>OA Robotics</h1>
                    </div>
                    {children}
                    <div className={`${styles.right} ${Work_Sans_300.className}`}>
                        <Link href={"/"} className={Work_Sans_300.className}>Home</Link>
                        <Link href={"/about"} className={Work_Sans_300.className}>About</Link>
                        <Link href={"/frc"} className={Work_Sans_300.className}>FRC</Link>
                        <Link href={"/ftc"} className={Work_Sans_300.className}>FTC</Link>
                        <Link href={"/vex"} className={Work_Sans_300.className}>VEX</Link>
                        <Link href={"/contact"} className={Work_Sans_300.className}>Contact</Link>
                    </div>
                </div>
            </nav>
        </>
    );
}