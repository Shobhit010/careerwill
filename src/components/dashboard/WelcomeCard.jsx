import { Button } from "../ui/Button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import bannerImg from "../../assets/banner_img.png";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ContainerTextFlip } from "../ui/ContainerTextFlip";

export function WelcomeCard() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    // Parallax layers
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

    // Illustration Moves Opposite to Mouse
    const imageX = useTransform(mouseXSpring, [-0.5, 0.5], ["10px", "-10px"]);
    const imageY = useTransform(mouseYSpring, [-0.5, 0.5], ["10px", "-10px"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-xl border border-rose-100 bg-white shadow-xl ring-1 ring-black/5"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="grid md:grid-cols-2 items-center">
                <div className="p-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="inline-flex items-center rounded-full bg-rose-50 px-3 py-1 text-sm font-medium text-rose-700 mb-6 border border-rose-100"
                    >
                        🚀 Keep learning
                    </motion.div>



                    <h2 className="mb-3 text-3xl font-bold leading-tight text-slate-900 tracking-tight flex items-center gap-2 flex-wrap">
                        Welcome back,
                        <ContainerTextFlip
                            words={["Student!", "Achiever!", "Learner!", "Topper!"]}
                            interval={3000}
                            className="text-rose-600 w-auto min-w-[140px]"
                            textClassName="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-rose-600 via-orange-500 to-rose-600 animate-gradient-x"
                        />
                    </h2>
                    <p className="mb-8 text-slate-600 text-lg leading-relaxed max-w-md">
                        You have 2 tests pending for this week.
                        Your consistency is your superpower.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link to="/test-series">
                            <Button className="gap-2 bg-rose-600 hover:bg-rose-700 shadow-sm shadow-rose-200 text-white font-medium px-6">
                                Resume Preparation <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                        <Link to="/documents">
                            <Button variant="outline" className="text-slate-700 hover:bg-slate-50 border-slate-200">
                                View Study Plan
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="hidden md:block relative h-full min-h-[280px] bg-slate-50/50 border-l border-slate-100 overflow-hidden">
                    {/* Background Blob that moves */}
                    <motion.div
                        style={{ x: imageX, y: imageY }}
                        className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl opacity-60"
                    />

                    <div className="absolute inset-0 flex items-center justify-center p-6 perspective-[1000px]">
                        <motion.img
                            initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                            style={{
                                x: imageX,
                                y: imageY,
                                rotateX: rotateX,
                                rotateY: rotateY,
                                z: 50 // Pull slightly forward
                            }}
                            src={bannerImg}
                            alt="Study"
                            className="max-w-[85%] max-h-[85%] object-contain drop-shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
