"use server";
import React from "react";
import styles from '@/app/sponsors/sponsors.module.scss';
import MainHead from "@/app/_components/head";
import Navbar from "@/app/_components/navbar/navbar";
import Title from "@/app/_components/title/title";
import Footer from "@/app/_components/footer/footer";
import SponsorGuide from "@/app/sponsors/sponsorguide/sponsorguide";

export default async function Sponsor(): Promise<React.ReactElement> {
    return (
        <div className={`${styles.sponsors}`}>
            <MainHead headTitle={"Sponsors"}/>
            <Navbar isFixed={true}/>
            <Title title={"Sponsors"} description={"Support our team!"}/>
            <SponsorGuide />
            <Footer/>
        </div>
    )
}