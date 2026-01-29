import { Card, CardContent, CardFooter, CardHeader } from "../ui/Card";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { Star, Users, PlayCircle, FileText, Clock } from "lucide-react";

export function CourseCard({ title, description, instructor, rating, learners, lessons, tests, image, onContinue }) {
    return (
        <Card className="flex flex-col h-full hover:shadow-lg transition-all duration-300 border-slate-200 group">
            {/* Thumbnail Header */}
            <div className="relative aspect-video w-full overflow-hidden border-b border-slate-100">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />


                {/* Content Summary Badge */}
                <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md text-white text-[10px] font-medium px-2 py-1 rounded-md flex items-center gap-2 group-hover:opacity-0 transition-opacity duration-300">
                    <span className="flex items-center gap-1"><PlayCircle className="w-3 h-3 text-emerald-400" /> {lessons} Lessons</span>
                    <span className="w-0.5 h-3 bg-white/20"></span>
                    <span className="flex items-center gap-1"><FileText className="w-3 h-3 text-amber-400" /> {tests} Tests</span>
                </div>
            </div>

            <CardHeader className="p-4 pb-2 space-y-2">
                <div className="flex justify-between items-start gap-2">
                    <h3 className="font-bold text-lg text-slate-900 leading-tight line-clamp-2 group-hover:text-rose-600 transition-colors">
                        {title}
                    </h3>
                </div>
                <p className="text-xs text-slate-500 font-medium flex items-center gap-1">
                    By <span className="text-slate-700 font-semibold">{instructor}</span>
                </p>
            </CardHeader>

            <CardContent className="p-4 py-2 flex-grow">
                <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {description}
                </p>

                {/* Stats Row */}
                <div className="flex items-center gap-4 mt-3 text-xs text-slate-500">
                    {rating && (
                        <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded text-amber-700 font-medium">
                            <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                            {rating}
                        </div>
                    )}
                    {learners && (
                        <div className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {learners} Learners
                        </div>
                    )}
                </div>
            </CardContent>

            <CardFooter className="p-4 pt-2 border-t border-slate-50 bg-slate-50/30">
                <Button
                    variant="default"
                    className="w-full bg-rose-600 hover:bg-rose-700 text-white shadow-rose-200 shadow-md transform transition-all active:scale-95"
                    onClick={onContinue}
                >
                    Continue Learning
                </Button>
            </CardFooter>
        </Card>
    );
}
