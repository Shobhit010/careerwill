import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../utils/cn";

export const ContainerTextFlip = ({
    words = [],
    interval = 3000,
    animationDuration = 700,
    className,
    textClassName
}) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (!words.length) return;
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, interval);
        return () => clearInterval(timer);
    }, [words, interval]);

    return (
        <div className={cn("inline-flex relative h-[1.2em] overflow-hidden", className)}>
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={index}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: animationDuration / 1000, ease: "easeInOut" }}
                    className={cn("absolute inset-0 flex items-center justify-center whitespace-nowrap", textClassName)}
                >
                    {words[index]}
                </motion.div>
            </AnimatePresence>
            {/* Invisible spacer to maintain width based on longest word */}
            <span className="invisible opacity-0" aria-hidden="true">
                {words.reduce((a, b) => (a.length > b.length ? a : b), "")}
            </span>
        </div>
    );
};
