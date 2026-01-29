import * as React from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "../../utils/cn"

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
    const refNative = React.useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    const handleMouseMove = (e) => {
        if (!refNative.current) return;
        const { left, top, width, height } = refNative.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        // Magnetic pull factor (stronger = more pull)
        const pullStrength = 0.35;

        x.set((e.clientX - centerX) * pullStrength);
        y.set((e.clientY - centerY) * pullStrength);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const variants = {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-white hover:bg-slate-100 hover:text-slate-900",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-slate-100/50 hover:text-slate-900", // slightly lighter hover
        link: "text-slate-900 underline-offset-4 hover:underline",
    }

    const sizes = {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
    }

    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-0 active:scale-95 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden"

    return (
        <motion.button
            ref={(node) => {
                refNative.current = node;
                if (typeof ref === "function") ref(node);
                else if (ref) ref.current = node;
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: xSpring, y: ySpring }}
            whileTap={{ scale: 0.95 }}
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            <motion.span className="relative z-10 flex items-center justify-center gap-2">
                {props.children}
            </motion.span>
        </motion.button>
    )
})
Button.displayName = "Button"

export { Button }
