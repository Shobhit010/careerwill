export const transition = {
    type: "spring",
    duration: 0.5,
    bounce: 0.2,
};

export const slideUp = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { ...transition, type: "spring", stiffness: 260, damping: 20 },
    },
};

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { ...transition, duration: 0.4 },
    },
};

export const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { ...transition, duration: 0.3 },
    },
};

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.1,
        },
    },
};

export const hoverScale = {
    scale: 1.02,
    transition: { duration: 0.2, ease: "easeInOut" },
};

export const tapScale = {
    scale: 0.98,
};
