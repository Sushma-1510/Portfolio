import React from 'react';

const EducationSection = () => {
    return (
        <div style={{ width: '100%', maxWidth: '1000px', padding: '0 20px', position: 'relative' }}>

            {/* Title */}
            <h2 style={{
                marginBottom: '60px',
                fontSize: '3.5rem',
                textAlign: 'left',
                color: '#fff',
                textShadow: '0 0 10px var(--neon-purple)',
                fontFamily: 'var(--font-heading)'
            }}>
                <span style={{ color: 'var(--neon-purple)' }}>//</span> Education
            </h2>

            <div style={{
                background: 'rgba(5, 5, 16, 0.8)',
                border: '1px solid var(--neon-blue)',
                padding: '40px',
                position: 'relative',
                backdropFilter: 'blur(5px)'
            }}>
                {/* Decorative Corner */}
                <div style={{
                    position: 'absolute',
                    top: '-5px',
                    left: '-5px',
                    width: '30px',
                    height: '30px',
                    borderTop: '2px solid var(--neon-blue)',
                    borderLeft: '2px solid var(--neon-blue)'
                }}></div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
                    <div>
                        <h3 style={{
                            fontSize: '2rem',
                            color: '#fff',
                            fontFamily: 'var(--font-heading)',
                            marginBottom: '10px'
                        }}>
                            SRM University AP
                        </h3>
                        <p style={{ color: 'var(--neon-blue)', fontSize: '1.2rem', fontFamily: 'monospace' }}>
                            B.Sc. Computer Science 
                        </p>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                        <div style={{
                            color: 'var(--neon-pink)',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            marginBottom: '5px'
                        }}>
                            Aug 2023 - Present
                        </div>
                        <div style={{ color: '#ccc' }}>CGPA: 8.37</div>
                    </div>
                </div>

                <div style={{ marginTop: '30px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
                    <h4 style={{
                        color: '#a0a0b0',
                        marginBottom: '15px',
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        letterSpacing: '2px'
                    }}>
                        Relevant Coursework
                    </h4>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {[
                            'Machine Learning',
                            'Data Structures',
                            'Design & Analysis of Algorithms',
                            'Mobile Development (Java)',
                            'c++',
                            'Full Stack Development',
                            'Web Technologies'
                        ].map(course => (
                            <span key={course} style={{
                                background: 'rgba(0, 243, 255, 0.1)',
                                color: '#fff',
                                padding: '8px 16px',
                                fontSize: '0.95rem',
                                border: '1px solid rgba(0, 243, 255, 0.2)',
                                clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)'
                            }}>
                                {course}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationSection;
