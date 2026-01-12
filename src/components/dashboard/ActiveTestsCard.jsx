import { ArrowRight, Play } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { Link } from "react-router-dom";

const activeTests = [
    {
        id: 1,
        title: "SSC CGL 2024 - Premier League",
        progress: 65,
        totalTests: 20,
        completed: 13,
        expiry: "24 Days left",
        initial: "SC"
    },
    {
        id: 2,
        title: "RRB NTPC Mock Test Series",
        progress: 30,
        totalTests: 15,
        completed: 4,
        expiry: "12 Days left",
        initial: "RB"
    },
];

export function ActiveTestsCard() {
    return (
        <Card className="col-span-1 lg:col-span-2 border-slate-200">
            <CardHeader className="flex flex-row items-center justify-between border-b border-slate-100 pb-4">
                <CardTitle className="text-lg font-bold text-slate-900">My Active Test Series</CardTitle>
                <Link to="/test-series">
                    <Button variant="ghost" size="sm" className="text-rose-600 hover:text-rose-700 hover:bg-rose-50 -mr-2">
                        View All <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                </Link>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
                {activeTests.map((test) => (
                    <div key={test.id} className="group flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between p-4 rounded-xl border border-slate-100 hover:border-rose-100 hover:bg-slate-50/50 transition-all cursor-pointer">
                        <Link to="/test-series" className="flex items-center gap-4 flex-1">
                            <div className="h-12 w-12 rounded-lg bg-rose-100/50 flex items-center justify-center text-rose-700 font-bold text-lg border border-rose-100 group-hover:scale-105 transition-transform">
                                {test.initial}
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <h4 className="font-semibold text-slate-900 line-clamp-1">{test.title}</h4>
                                    <Badge variant="outline" className="text-[10px] font-medium border-slate-200 text-slate-500 bg-white">
                                        {test.expiry}
                                    </Badge>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-500">
                                    <span className="text-xs">
                                        <span className="font-medium text-slate-700">{test.completed}</span> / {test.totalTests} Completed
                                    </span>
                                </div>
                                {/* Progress Bar */}
                                <div className="h-1.5 w-full max-w-[200px] rounded-full bg-slate-100 mt-2">
                                    <div
                                        className="h-full rounded-full bg-gradient-to-r from-rose-500 to-rose-400 group-hover:from-rose-600 group-hover:to-rose-500 transition-all"
                                        style={{ width: `${test.progress}%` }}
                                    />
                                </div>
                            </div>
                        </Link>

                        <Link to="/test-series">
                            <Button size="sm" className="shrink-0 gap-2 bg-rose-600 hover:bg-rose-700 shadow-sm shadow-rose-100 text-white font-medium">
                                <Play className="h-3.5 w-3.5 fill-current" /> Resume
                            </Button>
                        </Link>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}
