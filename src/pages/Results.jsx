import { ResultsTable } from "../components/results/ResultsTable";
import { PerformanceChart } from "../components/results/PerformanceChart";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Award, Target, Zap, Sparkles, TrendingUp } from "lucide-react";
import { cn } from "../utils/cn";

function StatCard({ title, value, icon: Icon, color, bg }) {
    return (
        <Card>
            <CardContent className="flex items-center gap-4 p-6">
                <div className={cn("rounded-full p-3", bg)}>
                    <Icon className={cn("h-6 w-6", color)} />
                </div>
                <div>
                    <p className="text-sm font-medium text-slate-500">{title}</p>
                    <h4 className="text-2xl font-bold text-slate-900">{value}</h4>
                </div>
            </CardContent>
        </Card>
    )
}

export default function Results() {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold text-slate-900">Performance Analytics</h1>
                <p className="text-slate-500">Analyze your test scores and track your improvement.</p>
            </div>

            {/* AI Analysis Card */}
            <Card className="bg-gradient-to-r from-indigo-50 to-white border-indigo-100">
                <CardContent className="p-5 flex items-start gap-4">
                    <div className="p-2 bg-white rounded-lg shadow-sm text-indigo-600 mt-1">
                        <Sparkles className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                        <h3 className="font-bold text-indigo-900 flex items-center gap-2">
                            AI Performance Insight
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                            You're demonstrating strong consistency in <strong>Quantitative Aptitude</strong> but spending 15% more time than average on <strong>Reasoning</strong>. Consider taking standard time-bound drills to improve speed.
                        </p>
                        <div className="pt-2 flex gap-3 text-xs font-medium">
                            <span className="text-emerald-600 flex items-center gap-1"><TrendingUp className="h-3 w-3" /> +12% Efficiency</span>
                            <span className="text-slate-400">|</span>
                            <span className="text-indigo-600 cursor-pointer hover:underline">View Detailed Report &rarr;</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-3">
                <StatCard
                    title="Overall Accuracy"
                    value="78.5%"
                    icon={Target}
                    color="text-emerald-500"
                    bg="bg-emerald-50"
                />
                <StatCard
                    title="Tests Completed"
                    value="142"
                    icon={Award}
                    color="text-rose-500"
                    bg="bg-rose-50"
                />
                <StatCard
                    title="Avg. Percentile"
                    value="89.2"
                    icon={Zap}
                    color="text-amber-500"
                    bg="bg-amber-50"
                />
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                <PerformanceChart />
                <ResultsTable />
            </div>

            <div className="grid gap-6">
                {/* Additional Content could go here */}
            </div>
        </div>
    );
}
