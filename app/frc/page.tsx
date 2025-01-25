"use server";
import React from "react";
import styles from "@/styles/vex.module.scss";
import Navbar from "@/app/_components/navbar";
import Footer from "@/app/_components/footer";
import Title from "@/app/_components/title";
import img1 from "@/public/images/FRCBanner.jpg";
import AboutTeam4079 from "@/app/frc/_components/aboutTeam4079";

export default async function FRC(): Promise<React.ReactElement> {
    return (
        <div id={`${styles.frc}`}>
            <Navbar/>
            <Title title={"FIRST Robotics Competition"} description={"FRC Team 4079"} img={img1} bgMoveUp={70}>
                2025 Season
            </Title>
            <AboutTeam4079 />
            <Footer/>
        </div>
    )
}