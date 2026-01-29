import { useState } from "react";
import { 
  ChevronDown, ChevronUp, PlayCircle, FileText, 
  CheckCircle, Megaphone, Calendar 
} from "lucide-react";
import { cn } from "../../utils/cn";
import { Card, CardContent } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";

// This would ideally come from your props or a separate data file
const announcements = [
  {
    id: 1,
    type: "important",
    title: "SSC CGL Tier II Exam Date Announced",
    description: "The exam is scheduled for 25th November 2024. Admit cards will be available 10 days prior.",
    date: "2h ago",
    read: false,
    tag: "Exam Update"
  },
  {
    id: 2,
    type: "update",
    title: "New Test Series Added: Banking Mains",
    description: "We have added 10 new high-level mock tests for IBPS PO Mains.",
    date: "1d ago",
    read: true,
    tag: "Content"
  }
];

export function CoursePlayerSidebar({ content, activeItem, onSelectItem }) {
  // 1. State to track active tab
  const [activeTab, setActiveTab] = useState("modules"); 
  const [openModules, setOpenModules] = useState(content.modules.map(m => m.id));

  const toggleModule = (moduleId) => {
    setOpenModules(prev =>
      prev.includes(moduleId)
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  return (
    <div className="flex flex-col h-full bg-white border-r border-slate-200 w-full md:w-80 lg:w-96 shrink-0">
      
      {/* Sidebar Tabs */}
      <div className="flex items-center border-b border-slate-200">
        <button 
          onClick={() => setActiveTab("modules")}
          className={cn(
            "flex-1 py-4 text-sm font-medium transition-all",
            activeTab === "modules" 
              ? "text-rose-600 border-b-2 border-rose-600 bg-rose-50/50 font-semibold" 
              : "text-slate-500 hover:text-slate-800"
          )}
        >
          Modules
        </button>
        <button 
          onClick={() => setActiveTab("announcements")}
          className={cn(
            "flex-1 py-4 text-sm font-medium transition-all",
            activeTab === "announcements" 
              ? "text-rose-600 border-b-2 border-rose-600 bg-rose-50/50 font-semibold" 
              : "text-slate-500 hover:text-slate-800"
          )}
        >
          Announcements
        </button>
        <button 
          onClick={() => setActiveTab("more")}
          className={cn(
            "flex-1 py-4 text-sm font-medium transition-all",
            activeTab === "more" 
              ? "text-rose-600 border-b-2 border-rose-600 bg-rose-50/50 font-semibold" 
              : "text-slate-500 hover:text-slate-800"
          )}
        >
          More
        </button>
      </div>

      {/* Dynamic Content Area */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        {activeTab === "modules" && (
          <div className="animate-in fade-in duration-300">
            {content.modules.map((module) => {
              const isOpen = openModules.includes(module.id);
              return (
                <div key={module.id} className="border-b border-slate-100">
                  <button
                    onClick={() => toggleModule(module.id)}
                    className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                  >
                    <span className="font-semibold text-slate-800 text-sm">{module.title}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </button>

                  {isOpen && (
                    <div className="bg-white">
                      {module.items.map((item) => {
                        const isActive = activeItem?.id === item.id;
                        return (
                          <button
                            key={item.id}
                            onClick={() => onSelectItem(item)}
                            className={cn(
                              "w-full flex items-start gap-3 p-3 pl-6 hover:bg-slate-50 transition-all border-l-4",
                              isActive ? "border-rose-600 bg-rose-50/30" : "border-transparent"
                            )}
                          >
                            <div className="mt-0.5 shrink-0">
                              {item.isCompleted ? (
                                <CheckCircle className="w-4 h-4 text-emerald-500 fill-emerald-50" />
                              ) : item.type === "video" ? (
                                <PlayCircle className={cn("w-4 h-4", isActive ? "text-rose-600" : "text-slate-400")} />
                              ) : (
                                <FileText className={cn("w-4 h-4", isActive ? "text-rose-600" : "text-slate-400")} />
                              )}
                            </div>
                            <div className="text-left">
                              <p className={cn("text-xs font-medium line-clamp-2", isActive ? "text-rose-700" : "text-slate-700")}>
                                {item.title}
                              </p>
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-[10px] text-slate-400">{item.duration}</span>
                                {item.type === "test" && <span className="text-[10px] bg-amber-100 text-amber-700 px-1.5 rounded">Test</span>}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {activeTab === "announcements" && (
          <div className="p-4 space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="flex items-center gap-2 mb-2">
              <Megaphone className="h-4 w-4 text-rose-600" />
              <h2 className="text-sm font-bold text-slate-900">Latest Updates</h2>
            </div>
            {announcements.map((item) => (
              <Card key={item.id} className={cn(
                "transition-all hover:shadow-sm",
                !item.read ? "border-rose-100 bg-rose-50/10" : "border-slate-100"
              )}>
                <CardContent className="p-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-[10px] font-normal px-1.5 py-0 bg-white">
                        {item.tag}
                      </Badge>
                      <span className="text-[10px] text-slate-400 flex items-center gap-1">
                        <Calendar className="h-2.5 w-2.5" /> {item.date}
                      </span>
                    </div>
                    <h3 className="text-xs font-bold text-slate-900 leading-snug">{item.title}</h3>
                    <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "more" && (
          <div className="p-8 text-center text-slate-500 text-sm animate-in fade-in duration-300">
            Additional resources and settings will appear here.
          </div>
        )}
      </div>
    </div>
  );
}