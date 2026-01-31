import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const items = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  // Auto-detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300; // Offset

      items.forEach(item => {
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="nav-dock">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
          onClick={() => setActiveSection(item.id)}
        >
          {item.label}
        </a>
      ))}
      <style>{`
        .nav-dock {
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 5px;
            padding: 8px 10px;
            z-index: 1000;
            border-radius: 100px;
            background: rgba(15, 15, 25, 0.4); /* Dark Glass */
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(15px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .nav-item {
            padding: 10px 24px;
            border-radius: 50px;
            cursor: pointer;
            color: rgba(255,255,255,0.7);
            text-decoration: none;
            font-size: 0.95rem;
            font-weight: 500;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
            border: 1px solid transparent;
            font-family: 'var(--font-heading)', sans-serif;
            letter-spacing: 1px;
        }

        /* Glossy Shine Hover Effect */
        .nav-item::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                90deg,
                transparent,
                rgba(255, 255, 255, 0.2), /* The Shine */
                transparent
            );
            transition: 0.5s;
            transform: skewX(-20deg);
        }

        .nav-item:hover::after {
            left: 100%; /* Move shine across */
            transition: 0.5s;
        }

        .nav-item:hover {
            color: #fff;
            background: rgba(255, 255, 255, 0.05); /* Slight light on hover */
            text-shadow: 0 0 8px rgba(255,255,255,0.6);
        }

        /* Active State (Glowing) */
        .nav-item.active {
            color: #fff;
            background: rgba(0, 243, 255, 0.1);
            border-color: var(--neon-blue);
            box-shadow: 0 0 15px rgba(0, 243, 255, 0.2);
            text-shadow: 0 0 5px var(--neon-blue);
        }
      `}</style>
    </div>
  );
};

export default Navbar;
