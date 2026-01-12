import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { User, Bell, Shield, LogOut } from "lucide-react";

export default function Settings() {
    return (
        <div className="space-y-6 max-w-4xl animate-in fade-in duration-500">
            <h1 className="text-2xl font-bold text-slate-900">Account Settings</h1>

            <Card>
                <CardHeader className="flex flex-row items-center gap-4 border-b border-slate-100 pb-6">
                    <div className="h-16 w-16 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                        <User className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-slate-900">Student Name</h3>
                        <p className="text-slate-500">student@example.com</p>
                    </div>
                    <Button variant="outline">Change Avatar</Button>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Full Name</label>
                            <Input defaultValue="Student Name" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Email</label>
                            <Input defaultValue="student@example.com" disabled />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Phone Number</label>
                            <Input defaultValue="+91 9876543210" />
                        </div>
                    </div>

                    <div className="border-t border-slate-100 pt-6">
                        <h4 className="text-base font-semibold mb-4 flex items-center gap-2">
                            <Bell className="h-4 w-4" /> Notifications
                        </h4>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-slate-600">Email Alerts</span>
                                <input type="checkbox" className="toggle" defaultChecked />
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-slate-600">SMS Notifications</span>
                                <input type="checkbox" className="toggle" />
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-100 pt-6">
                        <Button variant="destructive" className="gap-2">
                            <LogOut className="h-4 w-4" /> Sign Out
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
