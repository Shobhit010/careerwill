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
