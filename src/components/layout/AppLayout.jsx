import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { TopHeader } from "./TopHeader";
import { AnimatePresence, motion } from "framer-motion";
import { AIAssistantProvider } from "../../context/AIAssistantContext";
import { GlobalAssistant } from "../ai/GlobalAssistant";

export function AppLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const location = useLocation();

    return (
        <AIAssistantProvider>
            <div className="flex h-screen bg-secondary overflow-hidden">
                <Sidebar
                    isOpen={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                    isCollapsed={isCollapsed}
                    toggleCollapse={() => setIsCollapsed(!isCollapsed)}
                />

                <div className="flex flex-1 flex-col overflow-hidden relative">
                    <TopHeader onMenuClick={() => setSidebarOpen(true)} />

                    <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
                        <div className="mx-auto max-w-7xl space-y-6">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={location.pathname}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Outlet />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </main>

                    {/* Global AI Assistant Overlay */}
                    <GlobalAssistant />
                </div>
            </div>
        </AIAssistantProvider>
    );
}
