import { WelcomeCard } from "../components/dashboard/WelcomeCard";
import { StatsGrid } from "../components/dashboard/StatsGrid";
import { ActiveTestsCard } from "../components/dashboard/ActiveTestsCard";
import { UpdatesCard } from "../components/dashboard/UpdatesCard";
import { Card, CardContent } from "../components/ui/Card";
import { Sparkles, Brain, Zap, ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <WelcomeCard />

            {/* AI Insights Row */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-rose-100 bg-rose-50/50">
                    <CardContent className="p-4 flex items-start gap-3">
                        <div className="p-2 bg-white rounded-lg shadow-sm text-rose-600">
                            <Brain className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-800">Learning Pattern</p>
                            <p className="text-xs text-slate-600 mt-1">You retain 20% more when studying in the morning.</p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="border-amber-100 bg-amber-50/50">
                    <CardContent className="p-4 flex items-start gap-3">
                        <div className="p-2 bg-white rounded-lg shadow-sm text-amber-500">
                            <Zap className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-800">Focus Area</p>
                            <p className="text-xs text-slate-600 mt-1">Algebra accuracy is low (45%). Recommended revision.</p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="border-emerald-100 bg-emerald-50/50 hidden lg:block">
                    <CardContent className="p-4 flex items-start gap-3">
                        <div className="p-2 bg-white rounded-lg shadow-sm text-emerald-600">
                            <Sparkles className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-800">Momentum</p>
                            <p className="text-xs text-slate-600 mt-1">Great streak! You're in the top 5% this week.</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* AI Recommended Path */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-rose-600" /> Recommended for You
                    </h3>
                    <Link to="/suggestions">
                        <Button variant="ghost" size="sm" className="text-rose-600 hover:text-rose-700 hover:bg-rose-50">
                            View Full Path
                        </Button>
                    </Link>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    {[
                        { title: "Algebra: Quadratic Equations", type: "Lesson", time: "15 min", bg: "bg-white" },
                        { title: "Mock Test: Weak Areas", type: "Quiz", time: "30 min", bg: "bg-white" },
                        { title: "Physics: Mechanics Review", type: "Revision", time: "45 min", bg: "bg-white" },
                    ].map((item, i) => (
                        <Link to="/test-series" key={i}>
                            <Card className={`${item.bg} border-slate-200 hover:border-rose-200 transition-colors cursor-pointer group`}>
                                <CardContent className="p-4">
                                    <div className="flex justify-between items-start mb-3">
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-50 px-2 py-1 rounded-sm">
                                            {item.type}
                                        </span>
                                        <PlayCircle className="h-5 w-5 text-slate-300 group-hover:text-rose-600 transition-colors" />
                                    </div>
                                    <h4 className="font-bold text-slate-800 mb-1 group-hover:text-rose-700 transition-colors line-clamp-1">{item.title}</h4>
                                    <p className="text-xs text-slate-500">Based on your recent quiz performance</p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="space-y-6">
                <h3 className="text-xl font-semibold text-slate-900">Overview</h3>
                <StatsGrid />
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                <ActiveTestsCard />
                <UpdatesCard />
            </div>
        </div>
    );
}
