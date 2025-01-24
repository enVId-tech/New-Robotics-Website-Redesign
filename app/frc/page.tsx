"use server";
import React from "react";
import styles from "@/styles/vex.module.scss";
import Navbar from "@/app/_components/navbar";
import Footer from "@/app/_components/footer";
import Title from "@/app/_components/title";
import img1 from "@/public/images/frc.jpg";

export default async function FRC(): Promise<React.ReactElement> {
    return (
        <div id={`${styles.frc}`}>
            <Navbar/>
            <Title title={"FIRST Robotics Competition"} description={"FRC Team 4079"} img={img1} bgMoveUp={70}>
                2025 Season
            </Title>
            <h1>FRC</h1>
            <Footer/>
        </div>
    )
}