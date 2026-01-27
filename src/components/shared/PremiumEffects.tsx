import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const PremiumEffects: React.FC = () => {
    const [isHovering, setIsHovering] = useState(false);

    // Smooth motion values
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Spring configuration for trailing effect
    const springConfig = { damping: 25, stiffness: 200 };
    const trailX = useSpring(mouseX, springConfig);
    const trailY = useSpring(mouseY, springConfig);

    const springConfigFast = { damping: 15, stiffness: 300 };
    const leadX = useSpring(mouseX, springConfigFast);
    const leadY = useSpring(mouseY, springConfigFast);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            const target = e.target as HTMLElement;
            const isClickable = target.closest('button, a, input, select, [role="button"], .interactive, .holographic-shine');
            setIsHovering(!!isClickable);
        };

        const handleScroll = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.body.style.setProperty('--scroll-percent', `${scrolled}%`);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
            {/* Lead Pointer */}
            <motion.div
                className="w-2 h-2 bg-accent rounded-full fixed"
                style={{
                    x: leadX,
                    y: leadY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />

            {/* Main Trail Ring */}
            <motion.div
                className="w-8 h-8 border border-accent/40 rounded-full fixed flex items-center justify-center"
                animate={{
                    scale: isHovering ? 2.5 : 1,
                    backgroundColor: isHovering ? 'hsla(var(--accent), 0.15)' : 'transparent',
                    borderColor: isHovering ? 'hsla(var(--accent), 0.8)' : 'hsla(var(--accent), 0.4)',
                }}
                style={{
                    x: trailX,
                    y: trailY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                <motion.div
                    className="w-full h-full rounded-full bg-accent/5 blur-sm"
                    animate={{ scale: isHovering ? 1.5 : 1 }}
                />
            </motion.div>

            {/* Accent Trail Dot */}
            <motion.div
                className="w-1 h-1 bg-accent/60 rounded-full fixed"
                style={{
                    x: trailX,
                    y: trailY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />
        </div>
    );
};

export default PremiumEffects;
