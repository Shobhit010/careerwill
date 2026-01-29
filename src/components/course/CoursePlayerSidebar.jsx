import { useState } from "react";
import { ChevronDown, ChevronUp, PlayCircle, FileText, CheckCircle, Lock, Circle } from "lucide-react";
import { cn } from "../../utils/cn";

export function CoursePlayerSidebar({ content, activeItem, onSelectItem }) {
    const [openModules, setOpenModules] = useState(content.modules.map(m => m.id));

    const toggleModule = (moduleId) => {
        setOpenModules(prev =>
            prev.includes(moduleId)
                ? prev.filter(id => id !== moduleId)
                : [...prev, moduleId]
        );
    };

    return (
        <div className="flex flex-col h-full bg-white border-r border-slate-200 w-full md:w-80 lg:w-96 shrink-0">
            {/* Sidebar Tabs */}
            <div className="flex items-center border-b border-slate-200">
                <button className="flex-1 py-4 text-sm font-semibold text-rose-600 border-b-2 border-rose-600 bg-rose-50/50">
                    Modules
                </button>
                <button className="flex-1 py-4 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors">
                    Announcements
                </button>
                <button className="flex-1 py-4 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors">
                    More
                </button>
            </div>

            {/* Modules List */}
            <div className="flex-1 overflow-y-auto scrollbar-hide">
                {content.modules.map((module) => {
                    const isOpen = openModules.includes(module.id);

                    return (
                        <div key={module.id} className="border-b border-slate-100">
                            <button
                                onClick={() => toggleModule(module.id)}
                                className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                            >
                                <span className="font-semibold text-slate-800 text-sm">{module.title}</span>
                                {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                            </button>

                            {isOpen && (
                                <div className="bg-white">
                                    {module.items.map((item) => {
                                        const isActive = activeItem?.id === item.id;

                                        return (
                                            <button
                                                key={item.id}
                                                onClick={() => onSelectItem(item)}
                                                className={cn(
                                                    "w-full flex items-start gap-3 p-3 pl-6 hover:bg-slate-50 transition-all border-l-4",
                                                    isActive
                                                        ? "border-rose-600 bg-rose-50/30"
                                                        : "border-transparent"
                                                )}
                                            >
                                                <div className="mt-0.5 shrink-0">
                                                    {item.isCompleted ? (
                                                        <CheckCircle className="w-4 h-4 text-emerald-500 fill-emerald-50" />
                                                    ) : item.type === "video" ? (
                                                        <PlayCircle className={cn("w-4 h-4", isActive ? "text-rose-600" : "text-slate-400")} />
                                                    ) : (
                                                        <FileText className={cn("w-4 h-4", isActive ? "text-rose-600" : "text-slate-400")} />
                                                    )}
                                                </div>
                                                <div className="text-left">
                                                    <p className={cn(
                                                        "text-xs font-medium line-clamp-2",
                                                        isActive ? "text-rose-700" : "text-slate-700"
                                                    )}>
                                                        {item.title}
                                                    </p>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <span className="text-[10px] text-slate-400">{item.duration}</span>
                                                        {item.type === "test" && (
                                                            <span className="text-[10px] bg-amber-100 text-amber-700 px-1.5 rounded">Test</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
