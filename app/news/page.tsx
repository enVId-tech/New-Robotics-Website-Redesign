"use server";
import React from "react";
import styles from "@/app/news/news.module.scss";
import Navbar from "@/app/_components/navbar/navbar";
import Footer from "@/app/_components/footer/footer";
import Title from "@/app/_components/title/title";
import NewsSection from "@/app/_components/newsSection/newsSection";
import MainHead from "@/app/_components/head";

export default async function News(): Promise<React.ReactElement> {
    return (
        <div className={styles.newsPage}>
            <MainHead headTitle={"News"} />
            <Navbar />
            <Title 
                title={"Latest News & Updates"} 
                description={"Stay up to date with our team's achievements and activities"}
                bgMoveUp={30}
            />
            <NewsSection 
                showAll={true}
                title="All News Articles"
            />
            <Footer />
        </div>
    );
}
