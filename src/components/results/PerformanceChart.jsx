import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';

const data = [
    { name: 'Test 1', score: 120 },
    { name: 'Test 2', score: 132 },
    { name: 'Test 3', score: 101 },
    { name: 'Test 4', score: 138 },
    { name: 'Test 5', score: 145 },
    { name: 'Test 6', score: 152 },
];

export function PerformanceChart() {
    return (
        <Card className="col-span-1 lg:col-span-2 border-slate-200">
            <CardHeader className="border-b border-slate-100 pb-4">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-bold text-slate-900">Score Performance</CardTitle>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                            <span className="h-2 w-2 rounded-full bg-rose-500"></span> Score
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="h-[320px] pt-6 pl-0">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 30, left: 10, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.2} />
                                <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#64748b', fontSize: 11 }}
                            domain={[0, 200]}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#fff',
                                borderRadius: '8px',
                                border: '1px solid #e2e8f0',
                                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                            }}
                            itemStyle={{ color: '#0f172a', fontWeight: 600 }}
                            labelStyle={{ color: '#64748b', fontSize: '11px', marginBottom: '4px' }}
                            cursor={{ stroke: '#6366f1', strokeWidth: 1, strokeDasharray: '4 4' }}
                        />
                        <Area
                            type="monotone"
                            dataKey="score"
                            stroke="#4f46e5"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorScore)"
                            activeDot={{ r: 6, strokeWidth: 0, fill: '#4f46e5' }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
