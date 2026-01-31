import React from 'react';

const GlassCard = ({ children, title, className = '' }) => {
    return (
        <div className={`glass-panel ${className}`} style={{ padding: '30px', margin: '20px 0', width: '100%', maxWidth: '800px' }}>
            {title && (
                <h2 style={{
                    marginBottom: '20px',
                    fontSize: '2rem',
                    background: 'linear-gradient(90deg, #fff, #a0a0b0)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    {title}
                </h2>
            )}
            {children}
        </div>
    );
};

export default GlassCard;
