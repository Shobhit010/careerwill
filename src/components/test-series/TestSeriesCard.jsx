import { Calendar, Clock, ChevronRight, CheckCircle, BarChart } from "lucide-react";
import { Card, CardContent, CardFooter } from "../ui/Card";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { cn } from "../../utils/cn";
import courseImg1 from "../../assets/course_image.jpg";
import courseImg2 from "../../assets/course_image2.png";
import courseImg3 from "../../assets/course_image3.png";

const getCourseImage = (title) => {
    if (title.includes("Banking")) return courseImg2;
    if (title.includes("RRB")) return courseImg3;
    return courseImg1;
};

export function TestSeriesCard({ series }) {
    const isExpired = series.status === 'expired';
    const bgImage = getCourseImage(series.title);

    return (
        <Card className={cn(
            "flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl group border-slate-200/60",
            isExpired && "opacity-80 grayscale-[0.8]"
        )}>
            <div className="relative h-40 overflow-hidden bg-slate-100">
                <img
                    src={bgImage}
                    alt={series.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                <div className="absolute top-3 right-3 flex gap-2">
                    <Badge
                        variant={isExpired ? "destructive" : "success"}
                        className="shadow-sm border-white/20 backdrop-blur-md"
                    >
                        {series.status === 'active' ? 'Active' : 'Expired'}
                    </Badge>
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-lg font-bold text-white line-clamp-1 leading-tight shadow-black/50 drop-shadow-md">{series.title}</h3>
                </div>
            </div>

            <CardContent className="flex-1 space-y-4 pt-4">
                <p className="text-sm text-slate-500 line-clamp-2">{series.description}</p>

                <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 p-2 rounded">
                        <Clock className="h-3.5 w-3.5 text-rose-500" />
                        <span>Expires: {series.validity}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 p-2 rounded">
                        <BarChart className="h-3.5 w-3.5 text-emerald-500" />
                        <span>{series.completedTests}/{series.totalTests} Taken</span>
                    </div>
                </div>
            </CardContent>

            <CardFooter className="border-t border-slate-100 p-4">
                {isExpired ? (
                    <Button variant="outline" className="w-full" disabled>
                        Renew Package
                    </Button>
                ) : (
                    <Button className="w-full gap-2 group-hover:bg-rose-700 transition-colors">
                        Start Practice <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
}
