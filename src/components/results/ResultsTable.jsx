import { Eye, TrendingUp } from "lucide-react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";

const results = [
    {
        id: 1,
        testName: "SSC CGL Tier I Mock 3",
        date: "10 Oct 2024",
        score: "145/200",
        rank: 1042,
        accuracy: "85%",
        status: "pass",
    },
    {
        id: 2,
        testName: "English Sectional Test 5",
        date: "08 Oct 2024",
        score: "42/50",
        rank: 121,
        accuracy: "92%",
        status: "pass",
    },
    {
        id: 3,
        testName: "Maths Speed Test 12",
        date: "05 Oct 2024",
        score: "25/50",
        rank: 5200,
        accuracy: "65%",
        status: "average",
    },
    {
        id: 4,
        testName: "SSC CGL Tier I Mock 2",
        date: "01 Oct 2024",
        score: "130/200",
        rank: 2100,
        accuracy: "78%",
        status: "pass",
    },
];

export function ResultsTable() {
    return (
        <Card className="border-slate-200">
            <CardHeader className="flex flex-row items-center justify-between border-b border-slate-100 pb-4">
                <CardTitle className="text-lg font-bold text-slate-900">Recent Test History</CardTitle>
                <Button variant="outline" size="sm" className="hidden sm:flex text-slate-600 border-slate-200">
                    Download Report
                </Button>
            </CardHeader>
            <CardContent className="p-0">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-slate-50 border-b border-slate-100 text-xs font-semibold uppercase text-slate-500 tracking-wider">
                            <tr>
                                <th className="px-6 py-4">Test Name</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Score</th>
                                <th className="px-6 py-4">Rank</th>
                                <th className="px-6 py-4">Accuracy</th>
                                <th className="px-6 py-4 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 bg-white">
                            {results.map((result) => (
                                <tr key={result.id} className="group hover:bg-rose-50/30 transition-colors">
                                    <td className="px-6 py-4 font-semibold text-slate-900 group-hover:text-rose-700 transition-colors">
                                        {result.testName}
                                    </td>
                                    <td className="px-6 py-4 text-slate-500">{result.date}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <span className="font-medium text-slate-900">{result.score}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-slate-600">#{result.rank}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <span className={`font-medium ${parseInt(result.accuracy) > 80 ? 'text-emerald-600' : 'text-amber-600'}`}>
                                                {result.accuracy}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="text-rose-600 hover:text-rose-700 hover:bg-rose-50 font-medium"
                                        >
                                            View Analysis <Eye className="ml-2 h-4 w-4" />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardContent>
        </Card>
    );
}
