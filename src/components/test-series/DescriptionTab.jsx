import { cn } from "../../utils/cn";

export function DescriptionTab({ packageData }) {
    if (!packageData || !packageData.features) return null;

    return (
        <div className="bg-white rounded-lg border border-slate-200 p-6 animate-in fade-in duration-300">
            <ul className="space-y-4">
                {packageData.features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <li key={index} className="flex items-start gap-3">
                            <div className="bg-rose-50 p-1.5 rounded-md flex-shrink-0 mt-0.5">
                                <Icon className="h-4 w-4 text-rose-600" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-slate-700 text-sm leading-6 font-medium">{feature.text}</span>
                                {feature.subItems && (
                                    <ul className="list-disc list-inside mt-1 ml-1 space-y-1">
                                        {feature.subItems.map((subItem, sIdx) => (
                                            <li key={sIdx} className="text-sm text-slate-600 pl-1">{subItem}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
