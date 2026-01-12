import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../utils/cn";
import { testPackages } from "../data/testSeriesData";
import { DescriptionTab } from "../components/test-series/DescriptionTab";
import { AllTestsTab } from "../components/test-series/AllTestsTab";
import { LiveTestsTab } from "../components/test-series/LiveTestsTab";
import { VideosLessonsTab } from "../components/test-series/VideosLessonsTab";

export default function TestSeries() {
    const [selectedPackageId, setSelectedPackageId] = useState(testPackages[0].id);
    const selectedPackage = testPackages.find(p => p.id === selectedPackageId) || testPackages[0];

    // Dynamic tabs based on package configuration or default
    const availableTabs = selectedPackage.tabs || ["description", "all-tests", "live-tests"];
    const [activeTab, setActiveTab] = useState(availableTabs[0]);

    // Reset tab when package changes
    useEffect(() => {
        const tabs = selectedPackage.tabs || ["description", "all-tests", "live-tests"];
        if (!tabs.includes(activeTab)) {
            setActiveTab(tabs[0]);
        }
    }, [selectedPackageId, selectedPackage.tabs, activeTab]);


    const tabLabels = {
        "description": "Description",
        "all-tests": "All Tests",
        "live-tests": "Live Tests",
        "videos-lessons": "Videos & Lessons",
        "live-video": "Live Video",
        "view-syllabus": "View Syllabus"
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500 max-w-7xl mx-auto">

            {/* Package Selector / Header Area */}
            <div className="flex flex-col md:flex-row gap-6 md:items-end justify-between pb-2 border-b border-slate-100">
                <div className="space-y-4 w-full md:w-auto">
                    <div>
                        <span className="text-xs font-bold text-rose-600 uppercase tracking-wider mb-1 block">Selected Package</span>
                        <div className="relative w-full md:w-[400px]">
                            <select
                                value={selectedPackageId}
                                onChange={(e) => setSelectedPackageId(e.target.value)}
                                className="w-full appearance-none bg-slate-50 border border-slate-200 hover:border-rose-300 text-slate-900 text-base font-medium rounded-xl focus:ring-2 focus:ring-rose-100 focus:border-rose-500 block p-3 pr-10 transition-all cursor-pointer shadow-sm"
                            >
                                {testPackages.map((pkg) => (
                                    <option key={pkg.id} value={pkg.id}>
                                        {pkg.title}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                                <ChevronDown className="h-5 w-5 text-slate-500" />
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <h1 className="text-3xl font-bold text-slate-900 tracking-tight leading-none">
                            Test Series <span className="text-rose-600">Dashboard</span>
                        </h1>
                        <p className="text-slate-500 mt-2 text-sm">Track your progress, attempt live tests, and analyze performance.</p>
                    </div>
                </div>
            </div>

            {/* Mobile Header (Visible only on small screens) */}
            <div className="md:hidden space-y-1">
                <h1 className="text-2xl font-bold text-slate-900">
                    Test Series
                </h1>
                <p className="text-sm text-slate-500">Attempt tests and track progress.</p>
            </div>

            {/* Segmented Control Tabs */}
            <div className="bg-slate-100/50 p-1.5 rounded-xl border border-slate-200 flex space-x-1 overflow-x-auto no-scrollbar">
                {availableTabs.map((tabId) => (
                    <button
                        key={tabId}
                        onClick={() => setActiveTab(tabId)}
                        className={cn(
                            "flex-1 px-4 py-2.5 text-sm font-semibold rounded-lg transition-all whitespace-nowrap outline-none focus:ring-2 focus:ring-rose-500/20",
                            activeTab === tabId
                                ? "bg-white text-rose-600 shadow-sm ring-1 ring-black/5"
                                : "text-slate-500 hover:bg-slate-200/50 hover:text-slate-700"
                        )}
                    >
                        {tabLabels[tabId] || tabId}
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div className="mt-6">
                {activeTab === "description" && <DescriptionTab packageData={selectedPackage} />}
                {activeTab === "all-tests" && <AllTestsTab packageData={selectedPackage} />}
                {activeTab === "live-tests" && <LiveTestsTab />}
                {activeTab === "videos-lessons" && <VideosLessonsTab packageData={selectedPackage} />}

                {/* Placeholder content for tabs without dedicated components yet */}
                {(activeTab === "live-video" || activeTab === "view-syllabus") && (
                    <div className="bg-white rounded-lg border border-slate-200 p-8 text-center text-slate-500">
                        Content for {tabLabels[activeTab]} will appear here.
                    </div>
                )}
            </div>

            {/* AI Study Assistant Button */}
            <button className="fixed bottom-6 right-6 h-14 w-14 bg-rose-600 rounded-full shadow-lg shadow-rose-200 flex items-center justify-center text-white hover:bg-rose-700 hover:scale-105 transition-all z-40 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z" />
                    <path d="m5.2 6.8 1.4 1.4" />
                    <path d="m17.4 6.8 1.4-1.4" />
                    <path d="m2 12 2-2" />
                    <path d="m22 12-2-2" />
                    <path d="m2 16 2 2" />
                    <path d="m22 16-2 2" />
                    <path d="m9 22 2-2" />
                    <path d="m15 22-2-2" />
                </svg>
                <span className="absolute right-full mr-3 bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    Ask AI Assistant
                </span>
            </button>
        </div>
    );
}
