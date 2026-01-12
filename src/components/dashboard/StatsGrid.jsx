import { TrendingUp, Award, Clock, Target } from "lucide-react";
import { Card, CardContent } from "../ui/Card";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";

const stats = [
    {
        title: "Tests Taken",
        value: "24",
        change: "+4 this week",
        trend: "up",
        icon: Target,
        color: "text-rose-600",
        bg: "bg-rose-50",
    },
    {
        title: "Avg. Score",
        value: "78%",
        change: "+2.5% increase",
        trend: "up",
        icon: TrendingUp,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
    },
    {
        title: "All India Rank",
        value: "#142",
        change: "Top 5%",
        trend: "up",
        icon: Award,
        color: "text-amber-500",
        bg: "bg-amber-50",
    },
    {
        title: "Hours Spent",
        value: "142h",
        change: "Last 30 days",
        trend: "neutral",
        icon: Clock,
        color: "text-slate-600",
        bg: "bg-slate-100",
    },
];

export function StatsGrid() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 }
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
            {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                    <motion.div key={index} variants={item}>
                        <Card className="group border-slate-200 shadow-sm transition-all hover:shadow-md hover:border-rose-100">
                            <CardContent className="p-5 flex items-center justify-between">
                                <div className="space-y-1">
                                    <p className="text-sm font-medium text-slate-500 group-hover:text-rose-600 transition-colors">
                                        {stat.title}
                                    </p>
                                    <div className="text-3xl font-bold text-slate-900 tracking-tight">{stat.value}</div>
                                    <p className={cn(
                                        "text-xs font-medium mt-1 inline-flex items-center",
                                        stat.trend === 'up' ? "text-emerald-600" : "text-slate-500"
                                    )}>
                                        {stat.change}
                                    </p>
                                </div>
                                <div className={cn("rounded-xl p-3 transition-colors", stat.bg)}>
                                    <Icon className={cn("h-5 w-5", stat.color)} />
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                );
            })}
        </motion.div>
    );
}
