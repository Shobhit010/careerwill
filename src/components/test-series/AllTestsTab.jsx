import { useState } from "react";
import { Button } from "../ui/Button";
import { FileText, Calendar, Clock, CheckCircle, Zap } from "lucide-react";
import { TestListCard } from "./TestListCard";

export function AllTestsTab({ packageData }) {
    const [smartMode, setSmartMode] = useState(false);

    if (!packageData || !packageData.tests || packageData.tests.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-16 bg-white rounded-xl border border-slate-200 border-dashed">
                <div className="bg-slate-50 p-4 rounded-full mb-4">
                    <FileText className="h-8 w-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-medium text-slate-900">No tests available</h3>
                <p className="text-slate-500 text-sm mt-1">Check back later for upcoming tests.</p>
            </div>
        );
    }

    return (
        <div className="space-y-6 animate-in fade-in duration-300">
            {/* Header / Stats */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                    <h3 className="text-xl font-bold flex items-center gap-2">
                        <FileText className="h-6 w-6 text-rose-400" />
                        Comprehensive Test Suite
                    </h3>
                    <p className="text-slate-300 text-sm mt-1">
                        Access <span className="font-semibold text-white">{packageData.tests.length} full-length tests</span> curated by top educators.
                    </p>
                </div>

                <Button
                    onClick={() => setSmartMode(!smartMode)}
                    className={`gap-2 border transition-all ${smartMode ? "bg-rose-600 hover:bg-rose-700 text-white border-transparent shadow shadow-rose-500/50" : "bg-white/10 hover:bg-white/20 text-white border-white/20"}`}
                >
                    <Zap className={`h-4 w-4 ${smartMode ? "text-white" : "text-amber-400"}`} />
                    {smartMode ? "AI Smart Mode: ON" : "Turn On AI Mode"}
                </Button>
            </div>

            {/* Test List */}
            <div className="grid gap-4">
                {packageData.tests.map((test) => (
                    <TestListCard
                        key={test.id}
                        test={test}
                        isSmartMode={smartMode}
                        actionLabel={smartMode ? "Start AI Test" : "Start Test"}
                        onAction={() => console.log("Starting test", test.id)}
                    />
                ))}
            </div>
        </div>
    );
}
