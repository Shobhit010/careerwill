import { Calendar, Users, FileText, Award, BarChart2, CheckCircle, Clock } from "lucide-react";
import { Card, CardContent, CardFooter } from "../ui/Card";
import { Button } from "../ui/Button";
import { cn } from "../../utils/cn";

import { BackgroundGradient } from "../../components/ui/BackgroundGradient";

export function PackageCard({ pkg }) {
    return (
        <BackgroundGradient className="rounded-[22px] bg-white h-full" containerClassName="h-full">
            <Card className="flex flex-col h-full border-none shadow-none rounded-[20px] overflow-hidden">
                {/* Header Image */}
                <div className="h-48 w-full overflow-hidden bg-slate-100 relative">
                    <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <CardContent className="flex-1 p-5 space-y-4">
                    <h3 className="text-xl font-bold text-slate-800 leading-snug">
                        {pkg.title}
                    </h3>

                    <div className="space-y-3">
                        {pkg.features.map((feature, idx) => {
                            const Icon = feature.icon;
                            return (
                                <div key={idx} className="flex items-start gap-3">
                                    <div className="mt-0.5 flex-shrink-0">
                                        {Icon && <Icon className="h-4 w-4 text-slate-500" />}
                                        {!Icon && <span className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-2 block" />}
                                    </div>
                                    <div className="text-sm text-slate-600 leading-tight">
                                        <span dangerouslySetInnerHTML={{ __html: feature.text }} />
                                        {feature.subItems && (
                                            <ul className="mt-1 space-y-1 ml-1">
                                                {feature.subItems.map((item, sIdx) => (
                                                    <li key={sIdx} className="text-xs text-slate-500 flex items-start gap-1">
                                                        <span className="mt-1.5 h-1 w-1 rounded-full bg-slate-400 block shrink-0"></span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </CardContent>

                <div className="px-5 pb-5 mt-auto space-y-4">
                    {/* Pricing */}
                    <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                        <div className="flex items-end gap-2">
                            <span className="text-xl font-bold text-red-600">FREE</span>
                            <span className="text-sm text-slate-400 line-through decoration-slate-400">₹{pkg.price}</span>
                        </div>
                        <div className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
                            Discount of {pkg.discount} applied
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="grid grid-cols-2 gap-3">
                        <Button variant="outline" className="w-full text-slate-700 border-slate-300 hover:bg-slate-50 uppercase text-xs font-bold tracking-wider">
                            Detail
                        </Button>
                        <Button className="w-full bg-cyan-700 hover:bg-cyan-800 text-white uppercase text-xs font-bold tracking-wider shadow-sm">
                            Buy Now
                        </Button>
                    </div>
                </div>
            </Card>
        </BackgroundGradient>
    );
}
