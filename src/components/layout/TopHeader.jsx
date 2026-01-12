import { Bell, Menu, Search, User, Sparkles } from "lucide-react";
import { useLocation } from "react-router-dom";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { useState } from "react";

export function TopHeader({ onMenuClick }) {
    const location = useLocation();
    const [isFocused, setIsFocused] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    // Breadcrumb logic
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const currentPage = pathSegments.length > 0
        ? pathSegments[pathSegments.length - 1].split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
        : "Dashboard";

    return (
        <header className="sticky top-0 z-30 flex h-16 items-center border-b border-slate-200 bg-white/80 px-4 backdrop-blur-md sm:px-6 transition-all">
            <div className="flex items-center gap-4 lg:hidden">
                <Button variant="ghost" size="icon" onClick={onMenuClick} className="text-slate-500 hover:text-slate-900">
                    <Menu className="h-5 w-5" />
                </Button>
            </div>

            <div className="flex flex-1 items-center justify-between gap-4">
                <div className="hidden md:block">
                    <nav className="flex items-center text-sm font-medium text-slate-500">
                        <span className="hover:text-slate-900 transition-colors cursor-pointer">Home</span>
                        <span className="mx-2 text-slate-300">/</span>
                        <span className="text-slate-900 font-semibold">{currentPage}</span>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative hidden w-full max-w-sm sm:block group">
                        <Search className={`absolute left-3 top-2.5 h-4 w-4 ${isFocused ? "text-rose-500" : "text-slate-400"} transition-colors`} />
                        <Input
                            type="search"
                            placeholder="Ask AI: 'Show me weak topics'..."
                            className="pl-10 w-64 focus:w-96 transition-all border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-rose-500/20"
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                        {isFocused && searchValue.length === 0 && (
                            <div className="absolute top-11 left-0 right-0 bg-white border border-slate-100 shadow-xl rounded-lg p-3 z-50 animate-in fade-in slide-in-from-top-2">
                                <p className="text-xs font-semibold text-slate-400 uppercase mb-2">AI Suggestions</p>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 p-2 hover:bg-rose-50 rounded cursor-pointer text-sm text-slate-700">
                                        <Sparkles className="h-4 w-4 text-rose-500" />
                                        <span>Show my weak areas</span>
                                    </div>
                                    <div className="flex items-center gap-2 p-2 hover:bg-rose-50 rounded cursor-pointer text-sm text-slate-700">
                                        <Sparkles className="h-4 w-4 text-rose-500" />
                                        <span>Plan my revision for Sunday</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <Button variant="ghost" size="icon" className="relative text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-colors">
                        <Bell className="h-5 w-5" />
                        <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full ring-2 ring-white bg-red-500" />
                    </Button>

                    <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-rose-100 to-rose-50 border border-rose-100 flex items-center justify-center overflow-hidden cursor-pointer hover:ring-2 hover:ring-rose-100 transition-all">
                        <User className="h-5 w-5 text-rose-600" />
                    </div>
                </div>
            </div>
        </header>
    );
}
