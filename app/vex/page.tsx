"use server";
import React from "react";
import styles from "@/styles/vex.module.scss";
import Navbar from "@/app/_components/navbar";
import Footer from "@/app/_components/footer";
import Title from "@/app/_components/title";
import AboutVEXTeams from "@/app/vex/_components/aboutVEXTeams";

export default async function Vex(): Promise<React.ReactElement> {
    return (
        <div id={`${styles.vex}`}>
            <Navbar/>
            <Title title={"VEX Robotics Competition"} description={"VEX Teams 19812 & 23796"} bgMoveUp={5}/>
            <AboutVEXTeams
                title={"About VEX Teams 19812 & 23796"}
                description={"VEX Teams 1108A and 1108B are a robotics team based in the USA."}
            />
            <Footer/>
        </div>
    )
};