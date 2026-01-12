import { TestListCard } from "./TestListCard";
import { Clock } from "lucide-react";

export function LiveTestsTab() {
    // Mock live data (ideally this comes from props or context)
    const liveTests = []; // Empty for now as per original code

    if (liveTests.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 bg-white rounded-xl border border-dashed border-slate-300 animate-in fade-in duration-300">
                <div className="bg-slate-50 p-4 rounded-full mb-4">
                    <Clock className="h-10 w-10 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">No Live Tests Active</h3>
                <p className="text-slate-500 text-center max-w-sm mt-2 leading-relaxed">
                    There are no live tests scheduled for today. Please check the "All Tests" tab for practice material.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-4 animate-in fade-in duration-300">
            {liveTests.map((test) => (
                <TestListCard
                    key={test.id}
                    test={test}
                    actionLabel="Join Live"
                    onAction={() => console.log("Joining live test", test.id)}
                />
            ))}
        </div>
    );
}
