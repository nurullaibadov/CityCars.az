import React, { useEffect, useState } from 'react';

const PremiumEffects: React.FC = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [scrollPercent, setScrollPercent] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });

            const target = e.target as HTMLElement;
            const isClickable = target.closest('button, a, input, select, [role="button"]');
            setIsHovering(!!isClickable);
        };

        const handleScroll = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            setScrollPercent(scrolled);
            document.body.style.setProperty('--scroll-percent', `${scrolled}%`);

            // Apply progress to body after element for CSS bar
            const body = document.body;
            body.style.setProperty('--scroll-width', `${scrolled}%`);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Update body::after width for scroll progress
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `body::after { width: ${scrollPercent}%; }`;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, [scrollPercent]);

    return (
        <>
            <div
                className={`custom-cursor ${isHovering ? 'cursor-hover' : ''}`}
                style={{
                    left: `${mousePos.x}px`,
                    top: `${mousePos.y}px`,
                    transform: `translate(-50%, -50%) ${isHovering ? 'scale(1.5)' : 'scale(1)'}`
                }}
            />
            <div
                className={`custom-cursor-outer ${isHovering ? 'cursor-hover' : ''}`}
                style={{
                    left: `${mousePos.x}px`,
                    top: `${mousePos.y}px`,
                    transform: `translate(-50%, -50%) ${isHovering ? 'scale(0.8)' : 'scale(1)'}`
                }}
            />
        </>
    );
};

export default PremiumEffects;
