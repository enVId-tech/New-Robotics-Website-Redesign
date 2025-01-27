"use client";
import React from "react";
import styles from '@/styles/_components/aboutbrief.module.scss';
import img from "@/public/images/collage2.png";
import {Work_Sans} from "next/font/google";
import {NextFont} from "next/dist/compiled/@next/font";

interface Descriptor {
    title: string;
    description: string;
}

const Work_Sans_300: NextFont = Work_Sans({
    weight: "300",
    style: 'normal',
    subsets: ['latin'],
});

const Work_Sans_500: NextFont = Work_Sans({
    weight: "500",
    style: 'normal',
    subsets: ['latin'],
});

interface AboutBriefProps {
    children?: React.ReactNode;
}

export default function AboutBrief({ children }: AboutBriefProps): React.ReactElement {
    const [isClicked, setIsClicked] = React.useState<boolean[]>([]);

    const descriptors: Descriptor[] = React.useMemo((): Descriptor[] => [
        {
            title: "Mission Statement",
            description: "OA Robotics aims to inspire a new generation of engineers, software developers, and business experts by creating a professional environment. Members work together to both create, program, and publicize their created robots centered around certain tasks. Teams across the world operate under the principle of “gracious professionalism,” where teams maintain a competitive environment but still look to help each other compete and improve their robots."
        },
        {
            title: "Our History",
            description: "In 2009, our first team, Vex Robotics 1774 - Quantum Leap, was started. The following year, Oxford Academy established its OASTEM program. However, it wasn't until 2012 that FIRST Robotics Team 4079 - Quantum Leap was started. Over the last few years, we have begun hosting a FIRST Girl-Powered STEM day, as well as attending our district Steam-A-Palooza. 2019 was our boom year, where we placed as Quarter-Finalists in Worlds (Carver), Finalists in Beach Blitz and the OCR, and Semi-Finalists in Battleship Blast. Recently, we've established an FTC team, meant to introduce robotics and STEM to younger students."
        },
        {
            title: "Our Achievements",
            description: "We aim to create a community in which friends and family can learn and immerse themselves in STEM. We host an annual Girl Powered STEM Day, inviting local K-12 students to our site to learn about STEM, promoting our future Women in STEM Initiative. Additionally, we participate in a district-wide STEAM-A-Palooza, exhibiting our team's yearly work for staff, parents, and students to enjoy. Other engagements within our school site include showing off our robots during Club Rush, rallies, Open House, Back-to-School Nights, and more. Through each event we host or participate in, our team builds a connection with our local community in order to promote STEM in the Anaheim Union High School District and Orange County."
        },
        {
            title: "What is FIRST®?",
            description: "FIRST® (For Inspiration and Recognition of Science and Technology) is a non-profit, international organization founded in 1989 by Dean Kamen, an inventor, and entrepreneur. The mission of FIRST® is to inspire young people to be science and technology leaders and innovators by engaging them in exciting mentor-based programs that build science, engineering, and technology skills, inspire innovation, and foster well-rounded life capabilities including self-confidence, communication, and leadership. Each year, FIRST® releases a new game for each program which poses an enormous challenge composed of various tasks. Teams must strategize, design, prototype, build, program, and test their robot during a build season, which lasts for six weeks. After build season, teams compete in regional tournaments to qualify for the world championships, held annually in St. Louis and in Houston."
        }
    ], []);

    React.useEffect((): void => {
        const descHolders: NodeListOf<HTMLElement> = document.querySelectorAll(`${styles.about_desc_holder}`);

        descHolders.forEach((descHolder: HTMLElement, index: number): void => {
            if (isClicked[index]) {
                if (descHolder.clientHeight) {
                    descHolder.style.height = '0px';
                } else {
                    descHolder.style.height = descHolder.scrollHeight + 'px';
                }
                descHolder.classList.toggle(styles.active);
            } else {
                descHolder.style.height = '0px';
                descHolder.classList.remove(styles.active);
            }
        });
    }, [isClicked]);

    React.useEffect((): void => {
        setIsClicked(new Array(descriptors.length).fill(false));
    }, [descriptors]);

    const setClicked: (index: number) => void = (index: number): void => {
        if (isClicked[index]) {
            setIsClicked(new Array(descriptors.length).fill(false));
        } else {
            setIsClicked(isClicked.map((value: boolean, i: number): boolean => i === index ? !value : false));
        }
    }

    return (
        <section className={`${styles.about} ${Work_Sans_300.className}`}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <img src={img.src} alt="About" />
                </div>
                <div className={styles.right}>
                    <div className={styles.top}>
                        <h1 className={`${styles.title} ${Work_Sans_300.className}`}>About Us</h1>
                        <p className={styles.description}>
                            We are OA Robotics, a team of engineers and developers located in Orange County, California.
                            We are based at Oxford Academy in Cypress, and strive to promote robotics and STEM within our communities.
                            Our teams design, assemble, and test competitive robots, while learning and teaching the scientific and technical concepts behind it.
                            Our students are passionate about robotics and aim to promote and continue the culture of innovation and creativity throughout the team as a whole.
                        </p>
                    </div>
                    <div className={styles.bottom}>
                        {
                            descriptors.map((descriptor: Descriptor, index: number): React.JSX.Element => {
                                return (
                                    <div key={index} className={styles.about_org} onClick={(): void => setClicked(index)}>
                                        <h1 className={styles.about_title}>
                                            {descriptor["title"]}
                                            <div className={styles.addIcon}>
                                                <hr className={`${isClicked[index] ? "" : styles.first}`} />
                                                <hr className={`${isClicked[index] ? "" : styles.second}`} />
                                            </div>
                                        </h1>
                                        {
                                            <div className={`${styles.about_desc_holder} ${isClicked[index] ? styles.active : ""}`}>
                                                <p className={`${styles.about_desc} ${Work_Sans_500.className}`}>
                                                    {descriptor["description"]}
                                                </p>
                                            </div>
                                        }
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
            { children }
        </section>
    )
};