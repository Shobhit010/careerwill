import { motion } from "framer-motion";

export function WelcomeCard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl bg-gradient-to-r from-rose-600 to-rose-500 p-6 flex flex-col md:flex-row items-center justify-between text-white shadow-lg shadow-rose-200 relative overflow-hidden"
            style={{
                background: "linear-gradient(90deg, #e11d48 0%, #f43f5e 100%)" // Fallback/Base
            }}
        >
            {/* Background Texture/Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-50px] left-[-50px] w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 mb-4 md:mb-0 text-center md:text-left">
                <h1 className="!text-white text-2xl md:text-3xl font-bold mb-1 flex items-center gap-2 justify-center md:justify-start">
                    Welcome back, Student! <span className="text-2xl">👋</span>
                </h1>
                <p className="text-rose-50 text-sm md:text-base opacity-90">
                    You're doing great! Keep up the excellent work on your JEE preparation.
                </p>
            </div>

            <div className="relative z-10 bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/10 flex flex-col items-center min-w-[160px]">
                <span className="text-xs text-rose-50 uppercase tracking-wide font-medium mb-1">JEE 2025 Exam</span>
                <span className="text-xl md:text-2xl font-bold">135 Days Left</span>
            </div>
        </motion.div>
    );
}
