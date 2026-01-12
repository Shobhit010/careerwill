import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Suggestions() {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Personalized Suggestions</h1>
                <p className="text-slate-500">Based on your recent performance in "SSC CGL Tier I Mock 3".</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                    <Card key={i} className="border-rose-100 bg-rose-50/30">
                        <CardHeader>
                            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-rose-100 text-rose-600">
                                <Sparkles className="h-5 w-5" />
                            </div>
                            <CardTitle className="text-lg">Quant: Geometry Practice</CardTitle>
                            <CardDescription>You missed 3 easy questions in Geometry.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-slate-600">
                                Improves your accuracy in Triangles and Circles concepts.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Link to="/test-series" className="w-full">
                                <Button className="w-full gap-2">
                                    Start Practice <ArrowRight className="h-4 w-4" />
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
