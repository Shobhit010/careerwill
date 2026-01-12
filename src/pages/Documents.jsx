import { FileText, Download, Filter, Sparkles, Bot, ChevronDown, ChevronUp } from "lucide-react";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { useState } from "react";

const docs = [
    { id: 1, name: "October Current Affairs.pdf", size: "2.5 MB", date: "10 Oct 2024", type: "pdf", summary: "Key highlights: G20 Summit outcomes, Nobel Prize winners 2024, and RBI's new monetary policy updates." },
    { id: 2, name: "History Notes - Modern India.pdf", size: "15 MB", date: "08 Oct 2024", type: "pdf", summary: "Covers the decline of the Mughal Empire, advent of Europeans, and the 1857 Revolt in detail." },
    { id: 3, name: "English Vocab Sheet.pdf", size: "1.2 MB", date: "05 Oct 2024", type: "pdf", summary: "List of 500+ high-frequency words for competitive exams with synonyms and antonyms." },
    { id: 4, name: "Maths Formula Book.pdf", size: "5.8 MB", date: "01 Oct 2024", type: "pdf", summary: "Comprehensive compilation of Algebra, Geometry, and Trigonometry formulas for quick revision." },
];

function DocumentCard({ doc }) {
    const [showSummary, setShowSummary] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);

    const handleSummaryClick = () => {
        if (showSummary) {
            setShowSummary(false);
        } else {
            setIsGenerating(true);
            setTimeout(() => {
                setIsGenerating(false);
                setShowSummary(true);
            }, 1000); // Simulate AI delay
        }
    };

    return (
        <Card className="group transition-all hover:bg-slate-50 hover:border-rose-200 hover:shadow-sm">
            <div className="p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 w-full sm:w-auto">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-600 group-hover:bg-white group-hover:scale-110 transition-all border border-rose-100/50">
                        <FileText className="h-6 w-6" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-slate-900 group-hover:text-rose-700 transition-colors">{doc.name}</h4>
                        <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                            <span className="font-medium bg-slate-100 px-1.5 py-0.5 rounded">{doc.size}</span>
                            <span>•</span>
                            <span>{doc.date}</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleSummaryClick}
                        className={`gap-2 text-xs font-medium ${showSummary ? "text-rose-600 bg-rose-50" : "text-slate-500 hover:text-slate-700"}`}
                    >
                        {isGenerating ? (
                            <Bot className="h-4 w-4 animate-bounce" />
                        ) : (
                            <Sparkles className={`h-4 w-4 ${showSummary ? "fill-current" : ""}`} />
                        )}
                        {isGenerating ? "Analyzing..." : showSummary ? "Hide Summary" : "AI Summary"}
                    </Button>
                    <Button variant="ghost" size="icon" className="text-slate-400 group-hover:text-rose-600 group-hover:bg-rose-50 rounded-full transition-all">
                        <Download className="h-5 w-5" />
                    </Button>
                </div>
            </div>

            {showSummary && (
                <div className="px-4 pb-4 animate-in fade-in slide-in-from-top-1">
                    <div className="bg-rose-50/50 rounded-lg p-3 border border-rose-100 text-sm text-slate-700 flex gap-3">
                        <Bot className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                        <div>
                            <span className="font-bold text-rose-700 block text-xs uppercase tracking-wide mb-1">AI Smart Note</span>
                            {doc.summary}
                        </div>
                    </div>
                </div>
            )}
        </Card>
    );
}

export default function Documents() {
    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Study Materials</h1>
                    <p className="text-slate-500">Access high-quality PDFs and class notes.</p>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="gap-2 text-slate-600 bg-white">
                        <Filter className="h-4 w-4" /> Filter
                    </Button>
                </div>
            </div>

            <div className="grid gap-3">
                {docs.map((doc) => (
                    <DocumentCard key={doc.id} doc={doc} />
                ))}
            </div>
        </div>
    );
}
