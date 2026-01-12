import { Megaphone, Calendar } from "lucide-react";
import { Card, CardContent } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";

const announcements = [
    {
        id: 1,
        type: "important",
        title: "SSC CGL Tier II Exam Date Announced",
        description: "The exam is scheduled for 25th November 2024. Admit cards will be available 10 days prior on the official website.",
        date: "2h ago",
        read: false,
        tag: "Exam Update"
    },
    {
        id: 2,
        type: "update",
        title: "New Test Series Added: Banking Mains",
        description: "We have added 10 new high-level mock tests for IBPS PO Mains. These tests follow the latest pattern introduced in 2024.",
        date: "1d ago",
        read: true,
        tag: "Content"
    },
    {
        id: 3,
        type: "info",
        title: "Server Maintenance Scheduled",
        description: "Portal will be down for maintenance from 2 AM to 4 AM on Sunday. Please plan your tests accordingly.",
        date: "2d ago",
        read: true,
        tag: "System"
    }
];

export default function Announcements() {
    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-4 border-b border-slate-200 pb-6">
                <div className="h-12 w-12 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600">
                    <Megaphone className="h-6 w-6" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Announcements</h1>
                    <p className="text-slate-500">Stay updated with latest news and notifications.</p>
                </div>
            </div>

            <div className="relative space-y-6">
                <div className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-slate-200 z-0 hidden sm:block"></div>

                {announcements.map((item) => (
                    <div key={item.id} className="relative flex gap-6 group">
                        {/* Timeline dot */}
                        <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white border-4 border-slate-100 z-10 group-hover:border-rose-100 transition-colors">
                            <div className={`h-3 w-3 rounded-full ${!item.read ? 'bg-rose-600 animate-pulse' : 'bg-slate-300'}`} />
                        </div>

                        <Card className={`flex-1 transition-all duration-300 hover:shadow-md hover:border-rose-200 ${!item.read ? 'bg-white border-rose-100 shadow-rose-100/50' : 'bg-white border-slate-200'}`}>
                            <CardContent className="p-5 sm:p-6">
                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-3 flex-wrap">
                                            <Badge variant="outline" className="bg-slate-50 text-slate-600 border-slate-200">
                                                {item.tag}
                                            </Badge>
                                            {!item.read && (
                                                <Badge className="bg-rose-600 text-white border-0 shadow-sm shadow-rose-200">New</Badge>
                                            )}
                                            <span className="text-xs text-slate-400 flex items-center gap-1 sm:hidden">
                                                <Calendar className="h-3 w-3" /> {item.date}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-rose-700 transition-colors">{item.title}</h3>
                                        <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>
                                    </div>
                                    <div className="hidden sm:flex flex-col items-end gap-1 text-right shrink-0">
                                        <span className="text-xs font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
                                            {item.date}
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}
