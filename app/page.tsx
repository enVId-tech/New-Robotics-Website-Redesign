"use server";
import React from "react";
import Navbar from "@/app/_components/navbar";
import styles from "@/styles/home.module.scss";
import Footer from "@/app/_components/footer";
import Title from "@/app/_components/title";
import img from "@/public/images/FrontPageBanner.jpg";
import AboutBrief from "@/app/_components/aboutbrief";
import MainHead from "@/app/_components/head";
import Slogan from "@/app/_components/slogan";

export default async function Home(): Promise<React.ReactElement> {
    return (
        <div id={`${styles.homepage}`}>
            <MainHead headTitle={"Home"}/>
            <Navbar isFixed={true}/>
            <Title title={"OXFORD ACADEMY ROBOTICS"} description={"Learn. Compete. Thrive."}/>
            <AboutBrief/>
            <Slogan img={[img, img, img]}/>
            <Footer/>
        </div>
    )
}