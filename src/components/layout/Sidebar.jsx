import { NavLink, useLocation, Link } from "react-router-dom";
import {
    LayoutDashboard,
    ShoppingCart,
    Package,
    FileText,
    Lightbulb,
    FolderOpen,
    Megaphone,
    Bookmark,
    Phone,
    Settings,
    X,
    LogOut,
    ChevronLeft,
    ChevronRight,
    PanelLeftClose,
    PanelLeftOpen
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../utils/cn";
import { Button } from "../ui/Button";

const sidebarItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/" },
    { icon: FileText, label: "My Paid Test Series", path: "/test-series" },
    { icon: ShoppingCart, label: "Buy Test Packages", path: "/buy-packages" },
    { icon: Package, label: "My Results", path: "/results" },
    { icon: Lightbulb, label: "Suggestions", path: "/suggestions" },
    { icon: FolderOpen, label: "Documents", path: "/documents" },
    { icon: Megaphone, label: "Announcements", path: "/announcements" },
    { icon: Bookmark, label: "Bookmarked Questions", path: "/bookmarks" },
    { icon: Phone, label: "Contact Us", path: "/contact" },
    { icon: Settings, label: "Settings", path: "/settings" },
];

export function Sidebar({ isOpen, onClose, isCollapsed, toggleCollapse }) {
    const location = useLocation();

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm lg:hidden"
                        onClick={onClose}
                    />
                )}
            </AnimatePresence>

            <aside className={cn(
                "fixed inset-y-0 left-0 z-50 bg-white border-r border-slate-200 shadow-2xl lg:shadow-none lg:static lg:block transform lg:transform-none transition-all duration-300 ease-in-out",
                !isOpen && "-translate-x-full lg:translate-x-0",
                isOpen && "translate-x-0",
                isCollapsed ? "w-20" : "w-72"
            )}>
                <div className={cn(
                    "flex h-20 items-center border-b border-slate-100 bg-white transition-all duration-300",
                    isCollapsed ? "justify-center px-0" : "justify-between px-6"
                )}>
                    <Link to="/" className="flex items-center gap-3 overflow-hidden group">
                        <div className="h-8 w-8 rounded-lg bg-rose-600 flex items-center justify-center text-white font-bold text-xl shrink-0 group-hover:bg-rose-700 transition-colors">
                            C
                        </div>
                        <h1 className={cn(
                            "text-xl font-bold text-slate-900 tracking-tight transition-opacity duration-300 group-hover:text-rose-600",
                            isCollapsed ? "opacity-0 w-0 hidden" : "opacity-100"
                        )}>
                            CareerWill
                        </h1>
                    </Link>

                    {/* Mobile Close Button */}
                    <Button variant="ghost" size="icon" className="lg:hidden text-slate-400" onClick={onClose}>
                        <X className="h-5 w-5" />
                    </Button>
                </div>

                <div className="flex flex-col h-[calc(100vh-5rem)] justify-between relative">
                    {/* Desktop Collapse Toggle */}
                    <button
                        onClick={toggleCollapse}
                        className="hidden lg:flex absolute -right-3 top-6 bg-white border border-slate-200 rounded-full p-1.5 shadow-sm hover:shadow-md hover:text-rose-600 text-slate-400 transition-all z-10"
                    >
                        {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
                    </button>

                    <nav className={cn(
                        "flex-1 overflow-y-auto py-6 space-y-1 scrollbar-hide transition-all duration-300",
                        isCollapsed ? "px-3" : "px-4"
                    )}>
                        <div className={cn(
                            "text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 transition-all duration-300",
                            isCollapsed ? "text-center text-[10px]" : "px-2"
                        )}>
                            {isCollapsed ? "..." : "Menu"}
                        </div>

                        {sidebarItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            const Icon = item.icon;

                            return (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => window.innerWidth < 1024 && onClose()}
                                    title={isCollapsed ? item.label : ""}
                                    className={({ isActive }) => cn(
                                        "group flex items-center gap-3 rounded-lg text-sm font-medium transition-all duration-200",
                                        isCollapsed ? "justify-center px-2 py-3" : "px-3 py-2.5",
                                        isActive
                                            ? "bg-rose-50 text-rose-700 shadow-sm ring-1 ring-rose-200"
                                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                    )}
                                >
                                    <Icon className={cn(
                                        "transition-colors shrink-0",
                                        isCollapsed ? "h-6 w-6" : "h-5 w-5",
                                        isActive ? "text-rose-600" : "text-slate-400 group-hover:text-slate-600"
                                    )} />

                                    {!isCollapsed && (
                                        <span className="truncate">{item.label}</span>
                                    )}

                                    {!isCollapsed && isActive && (
                                        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0" />
                                    )}
                                </NavLink>
                            );
                        })}
                    </nav>

                    <div className="p-4 border-t border-slate-100 bg-slate-50/50">
                        <NavLink
                            to="/settings"
                            className={cn(
                                "flex items-center gap-3 rounded-lg hover:bg-white transition-colors cursor-pointer group",
                                isCollapsed ? "justify-center p-0" : "p-2"
                            )}
                        >
                            <div className="h-10 w-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-700 font-bold border border-rose-200 shrink-0">
                                S
                            </div>

                            {!isCollapsed && (
                                <>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-semibold text-slate-900 truncate">Student Name</p>
                                        <p className="text-xs text-slate-500 truncate">student@careerwill.com</p>
                                    </div>
                                    <LogOut className="h-4 w-4 text-slate-400 group-hover:text-rose-500 transition-colors shrink-0" />
                                </>
                            )}
                        </NavLink>
                    </div>
                </div>
            </aside>
        </>
    );
}
