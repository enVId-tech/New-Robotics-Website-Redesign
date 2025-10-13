"use client";
import React from 'react';
import styles from './stats.module.scss';
import { TW_900 } from '@/utils/globalFonts';
import { useContent } from '@/hooks/useContent';
import EditableText from '@/components/editable/EditableText';

type Stat = {
    id: string;
    label: string;
    value: string;
    description?: string;
    icon?: string;
}

type StatsProps = {
    children?: React.ReactNode;
    stats?: Stat[];
    title?: string;
}

export default function Stats({ 
    children, 
    stats, 
    title 
}: StatsProps): React.ReactElement {
    const { content, loading } = useContent();
    const [animatedStats, setAnimatedStats] = React.useState<boolean>(false);
    
    // Use content from CMS or fallback to props or default values
    const displayStats = stats || content?.homepage?.stats?.items || [
        {
            id: '1',
            label: 'Years Active',
            value: '12+',
            description: 'Since 2012',
            icon: '🏆'
        },
        {
            id: '2',
            label: 'Team Members',
            value: '60+',
            description: 'Active students',
            icon: '👥'
        },
        {
            id: '3',
            label: 'Competitions',
            value: '30+',
            description: 'Participated in',
            icon: '🤖'
        },
        {
            id: '4',
            label: 'Awards Won',
            value: '10+',
            description: 'Regional, On-season & Off-season',
            icon: '🥇'
        }
    ];
    const displayTitle = title || content?.homepage?.stats?.title || "Our Impact by the Numbers";

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setAnimatedStats(true);
                    }
                });
            },
            { threshold: 0.3 }
        );

        const element = document.getElementById('stats-section');
        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="stats-section" className={`${styles.stats} ${TW_900}`}>
            <div className={styles.container}>
                <EditableText
                    value={displayTitle}
                    path="homepage.stats.title"
                    as="h1"
                    className={styles.title}
                />
                
                <div className={styles.statsGrid}>
                    {displayStats.map((stat, index) => (
                        <div 
                            key={stat.id} 
                            className={`${styles.statCard} ${animatedStats ? styles.animate : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {stat.icon && (
                                <div className={styles.statIcon}>
                                    <EditableText
                                        value={stat.icon}
                                        path={`homepage.stats.items.${index}.icon`}
                                        as="span"
                                    />
                                </div>
                            )}
                            <div className={styles.statValue}>
                                <EditableText
                                    value={stat.value}
                                    path={`homepage.stats.items.${index}.value`}
                                    as="span"
                                />
                            </div>
                            <div className={styles.statLabel}>
                                <EditableText
                                    value={stat.label}
                                    path={`homepage.stats.items.${index}.label`}
                                    as="span"
                                />
                            </div>
                            {stat.description && (
                                <div className={styles.statDescription}>
                                    <EditableText
                                        value={stat.description}
                                        path={`homepage.stats.items.${index}.description`}
                                        as="span"
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            {children}
        </section>
    );
}
