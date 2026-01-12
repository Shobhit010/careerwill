import { Calendar, Clock, BarChart2, AlertCircle } from "lucide-react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { cn } from "../../utils/cn";

export function TestListCard({ test, isSmartMode, actionLabel = "Start Test", onAction }) {
    return (
        <div className={cn(
            "group relative bg-white rounded-xl border p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5",
            isSmartMode ? "border-rose-200 shadow-sm shadow-rose-100/50" : "border-slate-200 shadow-sm shadow-slate-200/50"
        )}>
            {/* AI Smart Mode Indicator */}
            {isSmartMode && (
                <div className="absolute top-0 right-0 p-3">
                    <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                        </span>
                        AI Adaptive
                    </div>
                </div>
            )}

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                <div className="flex gap-4">
                    {/* Icon Container */}
                    <div className={cn(
                        "hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border",
                        isSmartMode ? "bg-rose-50 border-rose-100 text-rose-600" : "bg-slate-50 border-slate-100 text-slate-500"
                    )}>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <path d="M14 2v6h6" />
                            <path d="m9 15 2 2 4-4" />
                        </svg>
                    </div>

                    <div className="space-y-2">
                        <div>
                            <h3 className="text-base font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                                {test.title}
                            </h3>
                            {test.subtitle && (
                                <p className="text-sm text-slate-500">{test.subtitle}</p>
                            )}
                        </div>

                        {/* Metadata Pills */}
                        <div className="flex flex-wrap gap-2">
                            {test.questions && (
                                <Badge variant="secondary" className="bg-slate-100 text-slate-600 hover:bg-slate-200 border-transparent font-medium">
                                    <AlertCircle className="mr-1.5 h-3 w-3" />
                                    {test.questions} Qs
                                </Badge>
                            )}
                            {test.marks && (
                                <Badge variant="secondary" className="bg-slate-100 text-slate-600 hover:bg-slate-200 border-transparent font-medium">
                                    <BarChart2 className="mr-1.5 h-3 w-3" />
                                    {test.marks} Marks
                                </Badge>
                            )}
                            {test.duration && (
                                <Badge variant="secondary" className="bg-slate-100 text-slate-600 hover:bg-slate-200 border-transparent font-medium">
                                    <Clock className="mr-1.5 h-3 w-3" />
                                    {test.duration} Mins
                                </Badge>
                            )}
                            {test.type && (
                                <Badge variant="outline" className="text-slate-500 border-slate-200 font-medium">
                                    {test.type}
                                </Badge>
                            )}
                        </div>

                        {test.date && (
                            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400 mt-1">
                                <Calendar className="h-3.5 w-3.5" />
                                <span>{test.date}</span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex items-center gap-3 md:self-center pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                    <Button
                        onClick={onAction}
                        className={cn(
                            "w-full md:w-auto min-w-[140px] font-semibold tracking-wide shadow-sm transition-all",
                            isSmartMode
                                ? "bg-rose-600 hover:bg-rose-700 text-white shadow-rose-200"
                                : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:text-rose-600 hover:border-rose-200"
                        )}
                    >
                        {actionLabel}
                    </Button>
                </div>
            </div>
        </div>
    );
}
