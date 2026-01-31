import React from 'react';
import NeonButton from './NeonButton';
import mlProjectImg from '../assets/ML_Project.png';
import spiceProjectImg from '../assets/SpiceStories_Mockup.png';

const ProjectGrid = () => {

    const projects = [
        {
            title: "Spice Stories",
            subtitle: "// Full Stack Recipe Management",
            desc: "A visually rich and interactive recipe management platform. Designed with vibrant aesthetics to explore authentic flavors and manage recipe collections.",
            tech: ['React', 'Bootstrap', 'JavaScript', 'JSON Server'],
            link: "https://github.com/Sushma010204/SpiceStories",
            image: spiceProjectImg,
            isImage: true
        },
        {
            title: "Breast Cancer Prediction",
            subtitle: "// Machine Learning Analysis",
            desc: "A predictive machine learning model capable of classifying breast cancer tumors. Utilizes advanced algorithms to analyze medical data with high accuracy.",
            tech: ['Python', 'Scikit-Learn', 'Pandas', 'Machine Learning'],
            link: "https://github.com/Sushma-1510/Breast-Cancer-Prediction--ML.git",
            image: mlProjectImg,
            isImage: true
        }
    ];

    return (
        <div style={{ width: '100%', maxWidth: '1000px', padding: '0 20px' }}>
            {/* Section Title */}
            <h2 style={{
                marginBottom: '60px',
                fontSize: '3.5rem',
                textAlign: 'center',
                color: '#fff',
                textShadow: '0 0 10px var(--neon-blue)',
                fontFamily: 'var(--font-heading)'
            }}>
                Featured Works <span style={{ color: 'var(--neon-blue)' }}>//</span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>

                {projects.map((project, index) => (
                    // Cinematic Project Card
                    <div key={index} style={{
                        background: 'rgba(10, 15, 30, 0.6)',
                        border: '1px solid var(--neon-blue)',
                        borderRadius: '15px',
                        overflow: 'hidden',
                        position: 'relative',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)'
                    }}>

                        {/* PROJECT VISUAL (16:9 Aspect Ratio) */}
                        <div style={{
                            width: '100%',
                            aspectRatio: '16/9',
                            position: 'relative',
                            borderBottom: '1px solid var(--neon-blue)',
                            overflow: 'hidden',
                            background: project.isImage ? 'transparent' : project.image
                        }}>
                            {/* If it's an image */}
                            {project.isImage && (
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    backgroundImage: `url(${project.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'top center',
                                    transition: 'transform 5s ease'
                                }} className="project-image"></div>
                            )}

                            {/* If it's custom content (ML Project) */}
                            {!project.isImage && project.customContent}

                            {/* Subtle Scanline Overlay */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to bottom, transparent 50%, rgba(0, 243, 255, 0.02) 50%)',
                                backgroundSize: '100% 4px',
                                pointerEvents: 'none'
                            }}></div>
                        </div>

                        {/* PROJECT DETAILS */}
                        <div style={{ padding: '40px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
                                <div>
                                    <h3 style={{
                                        fontSize: '2.5rem',
                                        color: '#fff',
                                        marginBottom: '10px',
                                        fontFamily: 'var(--font-heading)',
                                        textShadow: '0 0 10px rgba(0,0,0,0.5)'
                                    }}>
                                        {project.title}
                                    </h3>
                                    <p style={{
                                        color: 'var(--neon-pink)',
                                        fontSize: '1.2rem',
                                        fontFamily: 'monospace',
                                        letterSpacing: '1px'
                                    }}>
                                        {project.subtitle}
                                    </p>
                                </div>

                                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                    {project.tech.map(tag => (
                                        <span key={tag} style={{
                                            border: '1px solid var(--neon-blue)',
                                            color: '#fff',
                                            background: 'rgba(0, 243, 255, 0.1)',
                                            fontSize: '0.85rem',
                                            padding: '6px 12px',
                                            borderRadius: '4px',
                                            fontFamily: 'var(--font-heading)'
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div style={{
                                marginTop: '30px',
                                height: '1px',
                                background: 'linear-gradient(90deg, transparent, var(--neon-blue), transparent)',
                                opacity: 0.3
                            }}></div>

                            <p style={{
                                marginTop: '30px',
                                fontSize: '1.1rem',
                                color: '#b0b0cc',
                                lineHeight: '1.7',
                                fontFamily: 'var(--font-body)',
                                maxWidth: '800px'
                            }}>
                                {project.desc}
                            </p>

                            <div style={{ marginTop: '40px' }}>
                                <a href={project.link} target="_blank" style={{ textDecoration: 'none' }}>
                                    <NeonButton style={{
                                        background: 'transparent',
                                        border: '1px solid #fff',
                                        color: '#fff'
                                    }}>
                                        GitHub Repository
                                    </NeonButton>
                                    <style>{`
                                        .project-image:hover {
                                            transform: scale(1.05);
                                        }
                                    `}</style>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default ProjectGrid;
