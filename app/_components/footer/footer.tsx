"use client";
import React from "react";
import styles from "@/app/_components/footer/footer.module.scss";
import OARoboticsLogo from "@/public/logos/OARoboticsLogo_24-25.webp";
import {TW_600} from "@/utils/globalFonts";

type FooterProps = {
    children?: React.ReactNode;
}

export default function Footer({children}: FooterProps): React.ReactElement {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerTop}>
                    <div className={styles.footerDetails}>
                        <div className={`${styles.orgDetails} ${TW_600}`}>
                            <h2><img src={OARoboticsLogo.src} alt={"OA Robotics"}/>OA Robotics</h2>
                            <p>Quantum Leap</p>
                            <p>Oxford Academy</p>
                            <p>5172 Orange Avenue</p>
                        </div>

                        <div className={styles.footerSocials}>
                        </div>
                    </div>

                    <div className={`${styles.footerLinks} ${TW_600}`}>
                        <h1>Quick Links</h1>
                        <a href={"/"}>Home</a>
                        <a href={"/about"}>About</a>
                        <a href={"/team"}>Team</a>
                        <a href={"/news"}>News</a>
                        <a href={"/frc"}>FRC</a>
                        <a href={"/ftc"}>FTC</a>
                        <a href={"/vex"}>VEX</a>
                        <a href={"/contact"}>Contact</a>
                    </div>

                    <div className={`${styles.footerLinks} ${TW_600}`}>
                        <h1>Our Socials</h1>
                        <a href={"https://www.instagram.com/oxfordacademyrobotics/"} target="_blank">Instagram</a>
                        <a href={"https://www.facebook.com/oxfordacademyrobotics"} target="_blank">Facebook</a>
                        <a href={"https://www.youtube.com/channel/UC1cQVc9tJYX2J8jvV1J9NzQ"} target="_blank">YouTube</a>
                    </div>
                </div>


                <div className={styles.footerBottom}>
                    <div className={`${styles.footerBottomLinks} ${TW_600}`}>
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