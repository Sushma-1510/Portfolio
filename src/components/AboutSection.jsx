import React from 'react';

const AboutSection = () => {
    return (
        <div style={{ width: '100%', maxWidth: '1000px', padding: '0 20px', position: 'relative' }}>

            {/* Decorative Cyber Line */}
            <div style={{
                position: 'absolute',
                left: 0,
                top: '50px',
                width: '100%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, var(--neon-purple), transparent)',
                opacity: 0.5
            }}></div>

            {/* Title */}
            <h2 style={{
                marginBottom: '60px',
                fontSize: '3.5rem',
                textAlign: 'left',
                color: '#fff',
                textShadow: '0 0 10px var(--neon-purple)',
                fontFamily: 'var(--font-heading)'
            }}>
                <span style={{ color: 'var(--neon-purple)' }}>//</span> About Me
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '60px',
                alignItems: 'start'
            }}>

                {/* LEFT: Bio */}
                <div style={{
                    borderLeft: '2px solid var(--neon-blue)',
                    paddingLeft: '30px',
                    background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.3), transparent)'
                }}>
                    <h3 style={{
                        fontSize: '1.5rem',
                        color: '#fff',
                        marginBottom: '20px',
                        fontFamily: 'var(--font-heading)',
                        textShadow: '0 2px 4px rgba(0,0,0,0.8)'
                    }}>
                        My Journey
                    </h3>
                    <p style={{ fontSize: '1.2rem', color: '#e0e0e0', lineHeight: '1.8', marginBottom: '30px', fontFamily: 'var(--font-body)', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>
                        Hi, I'm <strong>Sushma</strong>. I am a passionate and aspiring <strong>Full Stack Developer</strong>.
                        I don't just write code; I build solutions. My journey is driven by a curiosity to understand how deep systems work and a desire to create interfaces that users love.
                    </p>
                    <p style={{ fontSize: '1.1rem', color: '#ccc', lineHeight: '1.8', fontFamily: 'monospace', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>
                        &gt; Currently focused on mastering the full web stack.<br />
                        &gt; Eager to contribute and grow.
                    </p>
                </div>

                {/* RIGHT: Skills */}
                <div>
                    <h3 style={{
                        fontSize: '1.5rem',
                        color: '#fff',
                        marginBottom: '30px',
                        fontFamily: 'var(--font-heading)',
                        textShadow: '0 2px 4px rgba(0,0,0,0.8)'
                    }}>
                        Technical Skills
                    </h3>

                    {[
                        { title: 'Frontend', skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind'] },
                        { title: 'Backend', skills: ['Java', 'Node.js', 'MySQL', 'REST API'] },
                        { title: 'Tools', skills: ['Git', 'VS Code', 'Vite'] }
                    ].map((category) => (
                        <div key={category.title} style={{ marginBottom: '30px' }}>
                            <div style={{
                                color: '#e0e0e0',
                                marginBottom: '15px',
                                fontSize: '0.9rem',
                                letterSpacing: '2px',
                                textTransform: 'uppercase',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                textShadow: '0 1px 3px rgba(0,0,0,1)'
                            }}>
                                <span style={{ width: '20px', height: '2px', background: 'var(--neon-pink)', boxShadow: '0 0 5px var(--neon-pink)' }}></span>
                                {category.title}
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                                {category.skills.map(skill => (
                                    <span key={skill} className="tech-badge">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <style>{`
        .tech-badge {
            background: rgba(0, 20, 40, 0.6);
            border: 1px solid var(--neon-blue);
            color: #fff;
            padding: 10px 18px;
            font-size: 0.95rem;
            letter-spacing: 0.5px;
            white-space: nowrap;
            clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
            transition: all 0.3s ease;
            position: relative;
            text-shadow: 0 1px 2px rgba(0,0,0,0.8);
        }
        .tech-badge:hover {
            background: var(--neon-blue);
            color: #000;
            cursor: pointer;
            text-shadow: none;
            box-shadow: 0 0 15px rgba(0, 243, 255, 0.5);
            transform: translateY(-3px) scale(1.05);
            z-index: 10;
        }
      `}</style>
        </div>
    );
};

export default AboutSection;
