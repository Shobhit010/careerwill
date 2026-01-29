import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CoursePlayerSidebar } from "../components/course/CoursePlayerSidebar";
import { CourseContentArea } from "../components/course/CourseContentArea";
import { COURSE_CONTENT } from "../data/videoCourseData";
import { ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/Button";

export default function CoursePlayer() {
    const { courseId } = useParams();
    const navigate = useNavigate();

    // In a real app, fetch course data by ID
    const course = COURSE_CONTENT;

    // Default to first item of first module
    const [activeItem, setActiveItem] = useState(course.modules[0].items[0]);

    const handleNext = () => {
        // Simple logic to find next item
        let foundCurrent = false;
        let nextItem = null;

        for (const module of course.modules) {
            for (const item of module.items) {
                if (foundCurrent) {
                    nextItem = item;
                    break;
                }
                if (item.id === activeItem.id) {
                    foundCurrent = true;
                }
            }
            if (nextItem) break;
        }

        if (nextItem) {
            setActiveItem(nextItem);
        } else {
            alert("Course Completed!");
        }
    };

    return (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
            {/* Minimal Header */}
            <div className="h-16 bg-white border-b border-slate-200 flex items-center px-4 justify-between shrink-0 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
                        <ArrowLeft className="w-5 h-5 text-slate-500" />
                    </Button>
                    <div>
                        <h1 className="text-sm font-bold text-slate-900 line-clamp-1">{course.title}</h1>
                        <p className="text-xs text-slate-500">Last played: {activeItem.title}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-rose-600 flex items-center justify-center text-white text-xs font-bold">
                        AR
                    </div>
                </div>
            </div>

            {/* Main Player Area */}
            <div className="flex-1 flex overflow-hidden">
                <CoursePlayerSidebar
                    content={course}
                    activeItem={activeItem}
                    onSelectItem={setActiveItem}
                />
                <CourseContentArea
                    activeItem={activeItem}
                    onNext={handleNext}
                />
            </div>
        </div>
    );
}
