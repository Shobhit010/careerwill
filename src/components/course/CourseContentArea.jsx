import { Button } from "../ui/Button";
import { ChevronLeft, ChevronRight, FileText, Download, CheckCircle, HelpCircle } from "lucide-react";

export function CourseContentArea({ activeItem, moduleTitle, onNext }) {
    if (!activeItem) return (
        <div className="flex-1 flex items-center justify-center bg-slate-50 text-slate-400">
            Select a lesson to start learning
        </div>
    );

    return (
        <div className="flex-1 flex flex-col h-full bg-white overflow-y-auto">
            <div className="flex-1 p-6 md:p-8">
                <div className="max-w-7xl mx-auto space-y-6">

                    {/* Media Player / Content Viewer - NOW AT TOP */}
                    <div className="bg-slate-900 overflow-hidden shadow-2xl max-w-5xl max-h-[75vh] aspect-video mx-auto relative flex items-center justify-center outline-none ring-0 focus:outline-none focus:ring-0" tabIndex="-1">
                        {activeItem.type === "video" ? (
                            activeItem.url.includes("youtube.com") || activeItem.url.includes("youtu.be") ? (
                                <iframe
                                    className="w-full h-full outline-none focus:outline-none ring-0 focus:ring-0"
                                    src={`${activeItem.url}?modestbranding=1&rel=0&iv_load_policy=3&controls=1`}
                                    title={activeItem.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <video
                                    controls
                                    className="w-full h-full outline-none focus:outline-none ring-0 focus:ring-0"
                                    controlsList="nodownload"
                                /* poster="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop" */
                                >
                                    <source src={activeItem.url} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            )
                        ) : activeItem.type === "pdf" ? (
                            activeItem.url ? (
                                <iframe
                                    src={activeItem.url}
                                    className="w-full h-full bg-slate-50"
                                    title="PDF Viewer"
                                ></iframe>
                            ) : (
                                <div className="text-center p-8 bg-white w-full h-full flex flex-col items-center justify-center gap-4 text-slate-600">
                                    <div className="bg-rose-50 p-6 rounded-full">
                                        <FileText className="w-12 h-12 text-rose-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900">Study Material</h3>
                                        <p className="max-w-md mx-auto mt-2 text-sm">{activeItem.content}</p>
                                    </div>
                                    <Button variant="outline" className="mt-4 gap-2">
                                        <Download className="w-4 h-4" /> Download PDF
                                    </Button>
                                </div>
                            )
                        ) : (
                            <div className="text-center p-8 bg-white w-full h-full flex flex-col items-center justify-center gap-4">
                                <div className="bg-amber-50 p-6 rounded-full">
                                    <HelpCircle className="w-12 h-12 text-amber-500" />
                                </div>
                                <h3 className="text-lg font-semibold text-slate-900">Quiz: {activeItem.title}</h3>
                                <p className="text-slate-500">This test contains {activeItem.questions} questions.</p>
                                <Button className="mt-4 bg-rose-600 hover:bg-rose-700 text-white">
                                    Start Test
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Meta Data & Controls - NOW BELOW VIDEO */}
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-slate-100 pb-6">
                        <div className="space-y-1">
                            {moduleTitle && (
                                <p className="text-rose-500 font-bold text-xs uppercase tracking-wide">{moduleTitle}</p>
                            )}
                            <h2 className="text-xl font-bold text-slate-900">{activeItem.title}</h2>
                            <div className="flex items-center gap-2 text-sm text-slate-500">
                                <span className="capitalize">{activeItem.type}</span>
                                <span>•</span>
                                <span>{activeItem.duration}</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                            <Button variant="outline" className="text-slate-600" disabled>
                                <ChevronLeft className="w-4 h-4 mr-2" /> Previous
                            </Button>
                            <Button onClick={onNext} className="bg-rose-600 hover:bg-rose-700 text-white shadow-md">
                                <CheckCircle className="w-4 h-4 mr-2" /> Mark Complete & Next
                            </Button>
                        </div>
                    </div>

                    {/* Description / Notes Section */}
                    <div className="prose prose-slate max-w-none bg-slate-50 p-6 rounded-xl">
                        <h3 className="text-sm font-semibold text-slate-900 mb-2">About this lesson</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Welcome to <strong>{activeItem.title}</strong>. This section covers key concepts essential for your preparation. make sure to take notes and review the attached materials if available.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
