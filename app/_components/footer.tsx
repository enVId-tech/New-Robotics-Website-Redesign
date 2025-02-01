"use client";
import React from "react";
import styles from "@/styles/_components/footer.module.scss";
import {NextFont} from "next/dist/compiled/@next/font";
import {Titillium_Web} from "next/font/google";
import OARoboticsLogo from "@/public/logos/OARoboticsLogo_24-25.webp";

const Titillium_Web_600: NextFont = Titillium_Web({
    weight: "600",
    style: 'normal',
    subsets: ['latin'],
});

type FooterProps = {
    children?: React.ReactNode;
}

export default function Footer({children}: FooterProps): React.ReactElement {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerTop}>
                    <div className={styles.footerDetails}>
                        <div className={`${styles.orgDetails} ${Titillium_Web_600.className}`}>
                            <h2><img src={OARoboticsLogo.src} alt={"OA Robotics"}/>OA Robotics</h2>
                            <p>Quantum Leap</p>
                            <p>Oxford Academy</p>
                            <p>5172 Orange Avenue</p>
                        </div>

                        <div className={styles.footerSocials}>
                        </div>
                    </div>

                    <div className={`${styles.footerLinks} ${Titillium_Web_600.className}`}>
                        <h1>Quick Links</h1>
                        <a href={"/"}>Home</a>
                        <a href={"/about"}>About</a>
                        <a href={"/frc"}>FRC</a>
                        <a href={"/ftc"}>FTC</a>
                        <a href={"/vex"}>VEX</a>
                        <a href={"/contact"}>Contact</a>
                    </div>

                    <div className={`${styles.footerLinks} ${Titillium_Web_600.className}`}>
                        <h1>Our Socials</h1>
                        <a href={"https://www.instagram.com/oxfordacademyrobotics/"} target="_blank">Instagram</a>
                        <a href={"https://www.facebook.com/oxfordacademyrobotics"} target="_blank">Facebook</a>
                        <a href={"https://www.youtube.com/channel/UC1cQVc9tJYX2J8jvV1J9NzQ"} target="_blank">YouTube</a>
                    </div>
                </div>


                <div className={styles.footerBottom}>
                    <div className={`${styles.footerBottomLinks} ${Titillium_Web_600.className}`}>
                        <p>&copy; 2025 OA Robotics</p>
                        <p>Website by <a href="https://github.com/enVId-tech" target="_blank">Erick Tran</a></p>
                        <p>Website in BETA - Bugs Beware!</p>
                    </div>

                </div>
            </div>

            {children}
        </footer>
    );
}