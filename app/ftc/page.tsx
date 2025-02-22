"use server";
import React from "react";
import styles from "@/app/ftc/ftc.module.scss";
import Navbar from "@/app/_components/navbar/navbar";
import Footer from "@/app/_components/footer/footer";
import img1 from "@/public/images/FTCBanner.jpg";
import Title from "@/app/_components/title/title";
import AboutFTCTeams from "@/app/ftc/_components/aboutFTCTeams/aboutFTCTeams";

export default async function FTC(): Promise<React.ReactElement> {
    return (
        <div id={`${styles.ftc}`}>
            <Navbar isFixed={true}/>
            <Title
                title={"FIRST Tech Challenge"}
                description={"FTC Teams 19812 & 23796"}
                img1={img1}
                bgMoveUp={50}
            />
            <AboutFTCTeams
                title={"About FTC Teams"}
                description={"FTC Teams 19812 and 23796 are a robotics team based in the USA."}
            />
            <Footer/>
        </div>
    )
}