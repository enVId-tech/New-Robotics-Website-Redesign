"use server";
import React from "react";
import styles from "@/styles/vex.module.scss";
import Navbar from "@/app/_components/navbar";
import Footer from "@/app/_components/footer";
import Title from "@/app/_components/title";
import img1 from "@/public/images/AboutBanner.jpg";
import VEXLogo from "@/public/logos/VEXLogo.jpg";
import FTCLogo from "@/public/logos/FTCLogo.png";
import FRCLogo from "@/public/logos/FRCLogo.png";

import AboutRobotics from "@/app/about/_components/aboutRobotics";

export default async function About(): Promise<React.ReactElement> {
    return (
        <div id={`${styles.about}`}>
            <Navbar/>
            <Title
                title={"About Us"}
                description={"Learn more about our team and mission."}
                img1={img1}
                bgMoveUp={50}
            />
            <AboutRobotics img={[VEXLogo, FTCLogo, FRCLogo]} description={""}/>
            <Footer/>
        </div>
    )
}