import React from 'react';

const NeonButton = ({ children, onClick, style }) => {
    const btnStyle = {
        background: 'transparent',
        color: '#fff',
        border: '1px solid rgba(255,255,255,0.2)',
        padding: '12px 24px',
        borderRadius: '12px',
        fontSize: '1rem',
        fontWeight: '600',
        fontFamily: 'var(--font-main)',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(10px)',
        background: 'linear-gradient(45deg, rgba(123, 44, 191, 0.1), rgba(0, 180, 216, 0.1))',
        ...style
    };

    const handleMouseEnter = (e) => {
        e.target.style.borderColor = 'rgba(255,255,255,0.6)';
        e.target.style.boxShadow = '0 0 15px rgba(123, 44, 191, 0.4)';
        e.target.style.transform = 'translateY(-2px)';
    };

    const handleMouseLeave = (e) => {
        e.target.style.borderColor = 'rgba(255,255,255,0.2)';
        e.target.style.boxShadow = 'none';
        e.target.style.transform = 'translateY(0)';
    };

    return (
        <button
            onClick={onClick}
            style={btnStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </button>
    );
};

export default NeonButton;
