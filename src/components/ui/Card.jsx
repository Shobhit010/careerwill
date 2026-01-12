import * as React from "react"
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion"
import { cn } from "../../utils/cn"

const Card = React.forwardRef(({ className, ...props }, ref) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    // 3D Tilt Logic
    // Can be adjusted for intensity
    // map mouse X range [0, width] to rotation range [-deg, deg]
    // But for a simpler implementation we can assume CARD dimensions roughly
    const rotateX = useSpring(useTransform(mouseY, [0, 400], [2, -2]), { stiffness: 100, damping: 20 });
    const rotateY = useSpring(useTransform(mouseX, [0, 400], [-2, 2]), { stiffness: 100, damping: 20 });

    // Spotlight Gradient
    let background = useMotionTemplate`radial-gradient(
        400px circle at ${mouseX}px ${mouseY}px,
        rgba(226, 29, 72, 0.05),
        transparent 80%
    )`;

    return (
        <motion.div
            ref={ref}
            className={cn(
                "rounded-xl border border-slate-200 bg-white text-slate-950 shadow-sm relative overflow-hidden group",
                className
            )}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                // rotateX, 
                // rotateY,
                // transformStyle: "preserve-3d", // Optional: expensive but cool
            }}
            whileHover={{ y: -4, transition: { duration: 0.4, ease: "easeOut" } }}
            {...props}
        >
            {/* Spotlight Overlay */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{ background: background }}
            />

            {/* Content Container (z-index to be above spotlight) */}
            <div className="relative z-10">
                {props.children}
            </div>
        </motion.div>
    );
})
Card.displayName = "Card"

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex flex-col space-y-1.5 p-6", className)}
        {...props}
    />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
        {...props}
    />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-sm text-slate-500", className)}
        {...props}
    />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex items-center p-6 pt-0", className)}
        {...props}
    />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
