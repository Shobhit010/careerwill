import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CourseCard } from "../components/dashboard/CourseCard";
import { Search } from "lucide-react";
import { Input } from "../components/ui/Input";

const MY_COURSES = [
    {
        id: 1,
        title: "SSC Quantitative Aptitude",
        description: "Master Quantitative Aptitude for SSC CGL, CHSL, and CPO with comprehensive video lectures and practice sets.",
        instructor: "Aditya Ranjan Sir",
        rating: 4.9,
        learners: "15k+",
        lessons: 124,
        tests: 12,
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "CGL Reasoning & General Intelligence",
        description: "Complete reasoning syllabus coverage including verbal and non-verbal reasoning with shortcut tricks.",
        instructor: "Vikramjeet Sir",
        rating: 4.8,
        learners: "12k+",
        lessons: 85,
        tests: 10,
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "SSC CGL Full Test Series & PYQs",
        description: "Extensive collection of mock tests and previous year questions to boost your exam preparation speed and accuracy.",
        instructor: "CareerWill Team",
        rating: 4.7,
        learners: "25k+",
        lessons: 0,
        tests: 50,
        image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070&auto=format&fit=crop",
    }
];

export default function MyCourses() {
    const navigate = useNavigate();

    const handleContinue = (courseId) => {
        navigate(`/course-player/${courseId}`);
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header Section */}
            <div className="flex items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">My Courses</h1>
                    <p className="text-slate-500 mt-1">Continue where you left off</p>
                </div>

                <div className="relative w-full md:w-72">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                        placeholder="Search your courses..."
                        className="pl-10 bg-white border-slate-200 focus:border-rose-500 focus:ring-rose-200"
                    />
                </div>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {MY_COURSES.map((course, index) => (
                    <motion.div
                        key={course.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="h-full"
                    >
                        <CourseCard
                            {...course}
                            onContinue={() => handleContinue(course.id)}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
