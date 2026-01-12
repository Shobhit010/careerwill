import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { ContainerTextFlip } from "../components/ui/ContainerTextFlip";

export default function Contact() {
    return (
        <div className="grid gap-8 lg:grid-cols-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="lg:col-span-5 space-y-8">



                <div>
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                        Get in <ContainerTextFlip
                            words={["Touch", "Sync", "Contact"]}
                            className="text-rose-600"
                        />
                    </h1>
                    <p className="text-lg text-slate-500 mt-3 leading-relaxed">
                        Have a question or facing an issue? We're here to help you ace your exams.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm transition-all hover:shadow-md">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-600 border border-rose-100">
                            <Mail className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900">Email Support</h3>
                            <p className="text-sm text-slate-500 mt-1">support@careerwill.com</p>
                            <p className="text-xs text-rose-600 font-medium mt-2 cursor-pointer hover:underline">Send an email &to; </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm transition-all hover:shadow-md">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                            <Phone className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900">Phone Support</h3>
                            <p className="text-sm text-slate-500 mt-1">+91 98765 43210</p>
                            <p className="text-xs text-slate-400 mt-1">Mon-Sat, 9am - 6pm</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm transition-all hover:shadow-md">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600 border border-amber-100">
                            <MapPin className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900">Visit Us</h3>
                            <p className="text-sm text-slate-500 mt-1">Mukherjee Nagar, Delhi, India</p>
                        </div>
                    </div>
                </div>
            </div>

            <Card className="lg:col-span-7 border-slate-200 shadow-lg shadow-slate-200/50">
                <CardHeader className="border-b border-slate-100 pb-6">
                    <CardTitle className="text-xl">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5 pt-6">
                    <div className="grid grid-cols-2 gap-5">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Name</label>
                            <Input placeholder="John Doe" className="bg-slate-50/50 border-slate-200 focus:bg-white transition-all" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Phone</label>
                            <Input placeholder="+91..." className="bg-slate-50/50 border-slate-200 focus:bg-white transition-all" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Subject</label>
                        <Input placeholder="Regarding..." className="bg-slate-50/50 border-slate-200 focus:bg-white transition-all" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Message</label>
                        <textarea
                            className="flex min-h-[150px] w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-2 text-sm ring-offset-white placeholder:text-slate-400 focus:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all resize-none"
                            placeholder="How can we help you?"
                        />
                    </div>
                    <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold h-11 shadow-rose-200 shadow-sm">
                        Send Message <Send className="ml-2 h-4 w-4" />
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
