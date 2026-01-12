import { Button } from "../ui/Button";
import { Play, Video } from "lucide-react";

export function VideosLessonsTab({ packageData }) {
    if (!packageData || !packageData.videos) return null;

    return (
        <div className="space-y-6 animate-in fade-in duration-300">
            {packageData.videos.map((section, idx) => (
                <div key={idx} className="space-y-4">
                    <div className="bg-white border border-slate-200 p-4 rounded-lg">
                        <h3 className="font-medium text-slate-800">{section.section}</h3>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
                        <div className="p-4 border-b border-slate-100 bg-rose-50/50">
                            <h4 className="font-medium text-slate-700">CLAT</h4>
                        </div>
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-3 font-medium">Resource Title</th>
                                    <th className="px-6 py-3 font-medium">Type</th>
                                    <th className="px-6 py-3 font-medium">Status</th>
                                    <th className="px-6 py-3 font-medium">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {section.items.map((item, i) => (
                                    <tr key={i} className="hover:bg-slate-50">
                                        <td className="px-6 py-4 font-medium text-slate-900 flex items-center gap-2">
                                            <div className="p-1 rounded bg-slate-100 border border-slate-200">
                                                <Video className="h-4 w-4 text-slate-600" />
                                            </div>
                                            {item.title}
                                        </td>
                                        <td className="px-6 py-4 text-slate-600">{item.type}</td>
                                        <td className="px-6 py-4">
                                            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-medium">
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Button className="bg-green-600 hover:bg-green-700 text-white gap-2 text-xs px-3 h-8">
                                                <Play className="h-3 w-3 fill-current" /> {item.action}
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
        </div>
    );
}
