"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/app/_components/navbar/navbar';
import Footer from '@/app/_components/footer/footer';
import { useContent } from '@/hooks/useContent';
import styles from './articlePage.module.scss';
import { TW_900, TW_600 } from '@/utils/globalFonts';
import EditableText from '@/components/editable/EditableText';
import EditableImage from '@/components/editable/EditableImage';
import RichContentEditor from '@/components/editable/RichContentEditor';
import { useEditMode } from '@/contexts/EditModeContext';
import { getContentValue, getContentImageStyle } from '@/utils/contentHelpers';

export default function ArticlePage() {
    const params = useParams();
    const articleId = params.id as string;
    const { content } = useContent();
    const { isEditMode } = useEditMode();

    const articles = content?.news?.articles || [];
    const articleIndex = articles.findIndex((a: any) => a.id === articleId);
    const article = articles[articleIndex];

    // Debug logging
    React.useEffect(() => {
        if (article) {
            console.log('Article data:', article);
            console.log('Article content:', article.content);
            console.log('Content value:', getContentValue(article?.content));
        }
    }, [article]);

    if (!article && !isEditMode) {
        return (
            <div className={styles.articlePage}>
                <Navbar />
                <div className={styles.notFound}>
                    <h1>Article Not Found</h1>
                    <p>The article you're looking for doesn't exist.</p>
                    <a href="/news">← Back to News</a>
                </div>
                <Footer />
            </div>
        );
    }

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    };

    const getCategoryColor = (category: string): string => {
        switch (category) {
            case 'Competition': return '#4285f4';
            case 'Achievement': return '#ff6b35';
            case 'Event': return '#9c27b0';
            case 'General': return '#ff5722';
            default: return '#666';
        }
    };

    const articlePath = `news.articles[${articleIndex}]`;

    return (
        <div className={styles.articlePage}>
            <Navbar />
            <div className={styles.articleContainer}>
                <div className={styles.articleHeader}>
                    {article?.image && (
                        <div className={styles.heroImage}>
                            <EditableImage
                                src={getContentValue(article.image)}
                                alt={getContentValue(article.title)}
                                path={`${articlePath}.image`}
                                className={styles.image}
                                fill
                                useNextImage
                                style={getContentImageStyle(article.image)}
                            />
                        </div>
                    )}
                    
                    <div className={styles.headerContent}>
                        <div className={styles.breadcrumb}>
                            <a href="/news">← Back to News</a>
                        </div>
                        
                        <div 
                            className={styles.categoryBadge}
                            style={{ backgroundColor: getCategoryColor(article?.category) }}
                        >
                            <EditableText
                                value={getContentValue(article?.category) || 'General'}
                                path={`${articlePath}.category`}
                                as="span"
                            />
                        </div>

                        <h1 className={TW_900}>
                            <EditableText
                                value={getContentValue(article?.title) || 'Untitled Article'}
                                path={`${articlePath}.title`}
                                as="span"
                            />
                        </h1>

                        <div className={styles.metadata}>
                            <span className={styles.author}>
                                By <EditableText
                                    value={getContentValue(article?.author) || 'Anonymous'}
                                    path={`${articlePath}.author`}
                                    as="span"
                                />
                            </span>
                            <span className={styles.separator}>•</span>
                            <span className={styles.date}>
                                <EditableText
                                    value={article?.publishDate ? formatDate(article.publishDate) : 'No date'}
                                    path={`${articlePath}.publishDate`}
                                    as="span"
                                />
                            </span>
                        </div>
                    </div>
                </div>

                <div className={styles.articleBody}>
                    <div className={styles.content}>
                        <RichContentEditor
                            content={getContentValue(article?.content) || 'No content available. Click to edit in Edit Mode.'}
                            path={`${articlePath}.content`}
                            className={TW_600}
                        />
                    </div>

                    {article?.tags && article.tags.length > 0 && (
                        <div className={styles.tags}>
                            <h3>Tags:</h3>
                            <div className={styles.tagList}>
                                {article.tags.map((tag: string, index: number) => (
                                    <span key={index} className={styles.tag}>
                                        <EditableText
                                            value={getContentValue(tag)}
                                            path={`${articlePath}.tags[${index}]`}
                                            as="span"
                                        />
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {article?.link && (
                        <div className={styles.externalLink}>
                            <a 
                                href={article.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.linkButton}
                            >
                                {article.linkText || 'Read Original Article'} →
                            </a>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}
