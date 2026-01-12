import { cn } from "../../utils/cn";
import React, { createContext, useState, useContext, useRef, useEffect } from "react";
import { useSpring, useMotionValue, useTransform, motion } from "framer-motion";

const MouseEnterContext = createContext(undefined);

export const CometCard = ({
    children,
    className,
    containerClassName,
}) => {
    const containerRef = useRef(null);
    const [isMouseEntered, setIsMouseEntered] = useState(false);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 25; // dampening factor
        const y = (e.clientY - top - height / 2) / 25; // dampening factor
        containerRef.current.style.setProperty("--x", `${x}deg`);
        containerRef.current.style.setProperty("--y", `${y}deg`);
    };

    const handleMouseEnter = () => {
        setIsMouseEntered(true);
    };

    const handleMouseLeave = () => {
        if (!containerRef.current) return;
        setIsMouseEntered(false);
        containerRef.current.style.setProperty("--x", `0deg`);
        containerRef.current.style.setProperty("--y", `0deg`);
    };

    return (
        <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
            <div
                className={cn("py-2 flex items-center justify-center", containerClassName)}
                style={{ perspective: "1000px" }}
            >
                <div
                    ref={containerRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className={cn(
                        "flex items-center justify-center relative transition-all duration-200 ease-linear w-full h-full",
                        className
                    )}
                    style={{
                        transformStyle: "preserve-3d",
                        transform: "rotateX(var(--x, 0deg)) rotateY(var(--y, 0deg))"
                    }}
                >
                    {children}
                </div>
            </div>
        </MouseEnterContext.Provider>
    );
};

export const CometCardBody = ({
    children,
    className,
}) => {
    return (
        <div
            className={cn(
                "h-full w-full [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",
                className
            )}
        >
            {children}
        </div>
    );
};

export const CometCardItem = ({
    as: Tag = "div",
    children,
    className,
    translateX = 0,
    translateY = 0,
    translateZ = 0,
    rotateX = 0,
    rotateY = 0,
    rotateZ = 0,
    ...rest
}) => {
    const ref = useRef(null);
    const [isMouseEntered] = useMouseEnter();

    useEffect(() => {
        if (!ref.current) return;
        if (isMouseEntered) {
            ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
        } else {
            ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
        }
    }, [isMouseEntered, translateX, translateY, translateZ, rotateX, rotateY, rotateZ]);

    return (
        <Tag
            ref={ref}
            className={cn("w-full transition-all duration-200 ease-linear", className)}
            {...rest}
        >
            {children}
        </Tag>
    );
};

// Hook to access the context
export const useMouseEnter = () => {
    const context = useContext(MouseEnterContext);
    if (context === undefined) {
        throw new Error("useMouseEnter must be used within a MouseEnterProvider");
    }
    return context;
};
