"use server";
import React from "react";
import styles from "@/app/about/about.module.scss";
import Navbar from "@/app/_components/navbar/navbar";
import Footer from "@/app/_components/footer/footer";
import Title from "@/app/_components/title/title";
import img1 from "@/public/images/AboutBanner.jpg";
import VEXLogo from "@/public/logos/VEXLogo.jpg";
import FTCLogo from "@/public/logos/FTCLogo.png";
import FRCLogo from "@/public/logos/OARoboticsLogo_24-25.webp";

import AboutRobotics from "@/app/about/_components/aboutRobotics/aboutRobotics";
import Timeline from "@/app/about/_components/timeline/timeline";
import AboutFirst from "@/app/about/_components/aboutFirst/aboutFirst";

export default async function About(): Promise<React.ReactElement> {
    const aboutDescriptor: string = "Started in 2009 by a passionate group of students, Oxford Academy Robotics has expanded from being a small VEX team to having a flagship FRC Team, multiple FTC teams and VEX teams. Our mission is to inspire students to pursue careers in STEM fields by providing them with the opportunity to learn, compete, and thrive in a supportive environment. We are dedicated to inspiring students to pursue careers in STEM fields through hands-on experience in robotics.";

    return (
        <div id={`${styles.about}`}>
            <Navbar/>
            <Title
                title={"About Us"}
                description={"Learn more about our team and mission."}
                img1={img1}
                bgMoveUp={50}
            />
            <AboutRobotics img={[VEXLogo, FTCLogo, FRCLogo]} description={aboutDescriptor}/>
            <AboutFirst title={""} description={""}/>
            <Timeline />
            <Footer/>
        </div>
    )
}