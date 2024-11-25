"use client";
import { motion } from 'framer-motion';

// A decorative timeline dot component that shows an animated pulsing effect
export const TimelineDot = () => (
    // Container: Positioned absolutely and centered horizontally, hidden on mobile
    <div className="absolute left-1/2 top-2 -translate-x-1/2 hidden md:block">
        {/* Outer wrapper for the dot animation */}
        <motion.div className="relative w-5 h-5 flex items-center justify-center">
            {/* Inner pulsing dot with animation */}
            <motion.div
                className="absolute w-2 h-2 rounded-full bg-primary"
                animate={{
                    // Scale animation: normal -> large -> normal
                    scale: [1, 1.5, 1],
                    transition: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatDelay: 0.5
                    }
                }}
            />
            {/* Static border ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary" />
        </motion.div>
    </div>
);

TimelineDot.displayName = 'TimelineDot';