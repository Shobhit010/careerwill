import { motion } from "framer-motion";
import { Bell, ChevronRight } from "lucide-react";
import { Button } from "../ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { Link } from "react-router-dom";

const updates = [
    {
        id: 1,
        title: "New Test Series Added",
        description: "SSC CGL Tier II Full Mock Test Series is now live.",
        time: "2h ago",
        color: "text-emerald-500",
        bg: "bg-emerald-50"
    },
    {
        id: 2,
        title: "Current Affairs PDF",
        description: "Download the monthly capsule for Oct '24.",
        time: "5h ago",
        color: "text-rose-500",
        bg: "bg-rose-50"
    },
    {
        id: 3,
        title: "System Maintenance",
        description: "Scheduled maintenance on Sunday, 2 AM - 4 AM.",
        time: "1d ago",
        color: "text-amber-500",
        bg: "bg-amber-50"
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariant = {
    hidden: { x: -20, opacity: 0 },
    show: { x: 0, opacity: 1 }
};

export function UpdatesCard() {
    return (
        <Card className="col-span-1 border-slate-200">
            <CardHeader className="flex flex-row items-center justify-between border-b border-slate-100 pb-4">
                <CardTitle className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Bell className="h-5 w-5 text-rose-500" /> Latest Updates
                </CardTitle>
                <Link to="/announcements">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400">
                        <ChevronRight className="h-5 w-5" />
                    </Button>
                </Link>
            </CardHeader>
            <CardContent className="p-0">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col p-4 space-y-6"
                >
                    {updates.map((item, idx) => {
                        return (
                            <Link to="/announcements" key={item.id}>
                                <motion.div
                                    variants={itemVariant}
                                    className="relative flex gap-4 group cursor-pointer"
                                >
                                    {idx !== updates.length - 1 && (
                                        <div className="absolute left-[19px] top-10 bottom-[-24px] w-[2px] bg-slate-100 group-hover:bg-rose-50 transition-colors" />
                                    )}

                                    <div className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-transparent group-hover:border-slate-100 group-hover:scale-105 transition-all shadow-sm ${item.bg}`}>
                                        <Bell className={`h-5 w-5 ${item.color}`} />
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start">
                                            <p className="text-sm font-semibold text-slate-900 group-hover:text-rose-600 transition-colors truncate">{item.title}</p>
                                            <span className="text-[10px] text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded ml-2 whitespace-nowrap">{item.time}</span>
                                        </div>
                                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-2 leading-relaxed">{item.description}</p>
                                    </div>
                                </motion.div>
                            </Link>
                        );
                    })}
                </motion.div>
            </CardContent>
        </Card>
    );
}
