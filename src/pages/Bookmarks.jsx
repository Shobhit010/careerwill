import { Trash2, ExternalLink, Bookmark } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";

export default function Bookmarks() {
    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col gap-2 border-b border-slate-200 pb-6">
                <h1 className="text-2xl font-bold text-slate-900">Bookmarked Questions</h1>
                <p className="text-slate-500">Review your saved questions for revision.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                    <Card key={i} className="flex flex-col group hover:shadow-lg hover:border-rose-100 transition-all duration-300">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 border-b border-slate-50">
                            <Badge variant="secondary" className="bg-rose-50 text-rose-700 hover:bg-rose-100">
                                Quant
                            </Badge>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-rose-500 hover:bg-rose-50 transition-colors">
                                <Trash2 className="h-4 w-4" />
                            </Button>
                        </CardHeader>
                        <CardContent className="flex-1 pt-4">
                            <div className="mb-2 flex items-center gap-2 text-xs font-medium text-slate-400 uppercase tracking-wider">
                                Question {i}
                            </div>
                            <p className="text-slate-800 font-medium leading-relaxed">
                                Two circles of radii 5 cm and 3 cm intersect at two points and the distance between their centres is 4 cm. Find the length of the common chord.
                            </p>
                        </CardContent>
                        <CardFooter className="bg-slate-50/50 p-4 border-t border-slate-100">
                            <Button variant="outline" className="w-full gap-2 border-slate-200 hover:border-rose-200 hover:text-rose-700 hover:bg-white transition-all group-hover:shadow-sm">
                                View Solution <ExternalLink className="h-3.5 w-3.5" />
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
