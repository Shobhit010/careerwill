import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Minimize2, Send, Sparkles, Bot, ChevronUp } from "lucide-react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Card } from "../ui/Card";
import { useAIAssistant } from "../../context/AIAssistantContext";
import { useLocation } from "react-router-dom";

export function GlobalAssistant() {
    const { isOpen, toggleAssistant, isMinimized, minimize, expand, messages, sendMessage, isTyping } = useAIAssistant();
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef(null);
    const location = useLocation();

    // Scroll to bottom
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = () => {
        if (!inputValue.trim()) return;
        sendMessage(inputValue);
        setInputValue("");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") handleSend();
    };

    // Suggestions based on route
    const getSuggestions = () => {
        const path = location.pathname;
        if (path === "/" || path.includes("dashboard")) return ["My Progress", "Pending Tests", "Study Plan"];
        if (path.includes("test-series")) return ["Test Syllabus", "Difficulty Level", "Previous Cutoff"];
        if (path.includes("documents")) return ["Summarize Notes", "Find Formula", "Important Topics"];
        if (path.includes("results")) return ["Analyze Weakness", "Improve Score", "Topper Comparison"];
        return ["How to start?", "Contact Support", "Latest Updates"];
    };

    return (
        <>
            <AnimatePresence>
                {/* Minimized / Floating Toggle Button */}
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={toggleAssistant}
                        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-rose-600 text-white shadow-xl shadow-rose-200 hover:bg-rose-700 focus:outline-none focus:ring-4 focus:ring-rose-200"
                    >
                        <Bot className="h-7 w-7" />
                        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 text-[10px] font-bold text-white">1</span>
                    </motion.button>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {/* Expanded Chat Window */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            height: isMinimized ? "auto" : "600px"
                        }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className={`fixed bottom-6 right-6 z-50 flex flex-col w-[380px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl ring-1 ring-black/5 ${isMinimized ? "h-auto" : "h-[600px]"}`}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-rose-50 to-white px-4 py-3">
                            <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-100 text-rose-600 border border-rose-200">
                                    <Bot className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-slate-800">AI Assistant</h3>
                                    <p className="text-[10px] text-slate-500 flex items-center gap-1">
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Online
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <Button variant="ghost" size="icon" className="h-7 w-7 text-slate-400 hover:text-slate-700" onClick={isMinimized ? expand : minimize}>
                                    {isMinimized ? <ChevronUp className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                                </Button>
                                <Button variant="ghost" size="icon" className="h-7 w-7 text-slate-400 hover:text-rose-600" onClick={toggleAssistant}>
                                    <X className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Chat Area (Hidden if minimized) */}
                        {!isMinimized && (
                            <>
                                <div className="flex-1 overflow-y-auto bg-slate-50/50 p-4 space-y-4">
                                    {/* Intro Context */}
                                    <div className="flex justify-center text-xs text-slate-400 mb-4">
                                        <span>Context: {location.pathname === "/" ? "Dashboard" : location.pathname.replace("/", "").replace("-", " ")}</span>
                                    </div>

                                    {messages.map((msg) => (
                                        <div
                                            key={msg.id}
                                            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                                        >
                                            <div
                                                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm shadow-sm ${msg.role === "user"
                                                        ? "bg-rose-600 text-white rounded-tr-sm"
                                                        : "bg-white text-slate-700 border border-slate-100 rounded-tl-sm"
                                                    }`}
                                            >
                                                {msg.role === "assistant" && <Sparkles className="h-3 w-3 text-amber-500 mb-1 inline-block mr-1" />}
                                                {msg.text}
                                            </div>
                                        </div>
                                    ))}

                                    {isTyping && (
                                        <div className="flex justify-start">
                                            <div className="flex gap-1 bg-white border border-slate-100 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm">
                                                <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                                                <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                                                <span className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                                            </div>
                                        </div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>

                                {/* Suggestions */}
                                <div className="px-4 py-2 bg-white border-t border-slate-100 overflow-x-auto whitespace-nowrap scrollbar-hide flex gap-2">
                                    {getSuggestions().map((sugg, i) => (
                                        <button
                                            key={i}
                                            onClick={() => sendMessage(sugg)}
                                            className="text-xs font-medium px-3 py-1.5 rounded-full bg-slate-50 text-slate-600 border border-slate-100 hover:bg-rose-50 hover:text-rose-600 hover:border-rose-100 transition-colors"
                                        >
                                            {sugg}
                                        </button>
                                    ))}
                                </div>

                                {/* Input Area */}
                                <div className="p-3 bg-white border-t border-slate-100">
                                    <div className="relative flex items-center gap-2">
                                        <Input
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            onKeyDown={handleKeyDown}
                                            placeholder="Ask anything..."
                                            className="pr-10 rounded-full border-slate-200 bg-slate-50 focus:bg-white transition-all py-5"
                                        />
                                        <Button
                                            size="icon"
                                            onClick={handleSend}
                                            className="absolute right-1 top-1 h-8 w-8 rounded-full bg-rose-600 text-white hover:bg-rose-700 shadow-sm"
                                        >
                                            <Send className="h-3.5 w-3.5" />
                                        </Button>
                                    </div>
                                    <div className="mt-2 text-center">
                                        <p className="text-[10px] text-slate-400">
                                            AI can make mistakes. Check important info.
                                        </p>
                                    </div>
                                </div>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
