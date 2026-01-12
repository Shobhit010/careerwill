import { PackageCard } from "../components/buy-packages/PackageCard";
import pkg1 from "../assets/package1.png";
import pkg2 from "../assets/package2.jpg";
import pkg3 from "../assets/package3.jpg";
import { Calendar, Users, FileText, Award, BarChart2, CheckCircle, Clock, Volume2, Globe } from "lucide-react";
import { ContainerTextFlip } from "../components/ui/ContainerTextFlip";

const coursePackages = [
    {
        id: 1,
        title: "Class 11 Test Series (P Series Batch)",
        image: pkg1,
        price: "599",
        discount: "100%",
        features: [
            { icon: Calendar, text: "Live Test on Sundays only" },
            { icon: Users, text: "Free for all (No batch required)" },
            { icon: FileText, text: "Syllabus and details for upcoming test shared by Monday (Click on <i>View Syllabus</i>)" },
            { icon: Globe, text: "Useful for Careerwill Students (Batch Enrollment) – P1&P2" },
            { icon: FileText, text: "NTA-like Exam Interface" },
            { icon: BarChart2, text: "Detailed Performance Analysis" },
            { icon: CheckCircle, text: "Question Insights + Bookmark for revision" },
            { icon: Volume2, text: "Updates in Announcement Section" },
            {
                icon: Clock, text: "Schedule:", subItems: [
                    "JEE Main → 9:00 AM – 12:00 PM",
                    "JEE Advanced (Paper 1) → 9:00 AM – 12:00 PM",
                    "JEE Advanced (Paper 2) → 2:30 PM – 5:30 PM",
                    "Can attempt even after live time ends"
                ]
            },
            { icon: Award, text: "Results every Monday at 10:00 AM" }
        ]
    },
    {
        id: 2,
        title: "Class 12 Test Series (A Series Batch)",
        image: pkg2,
        price: "599",
        discount: "100%",
        features: [
            { icon: Calendar, text: "Live Test on Sundays only" },
            { icon: Users, text: "Free for all (No batch required)" },
            { icon: FileText, text: "Syllabus and details for upcoming test shared by Monday (Click on <i>View Syllabus</i>)" },
            { icon: Globe, text: "Useful for Careerwill Students (Batch Enrollment) – A1&A2" },
            { icon: FileText, text: "NTA-like Exam Interface" },
            { icon: BarChart2, text: "Detailed Performance Analysis" },
            { icon: CheckCircle, text: "Question Insights + Bookmark for revision" },
            { icon: Volume2, text: "Updates in Announcement Section" },
            {
                icon: Clock, text: "Schedule:", subItems: [
                    "JEE Mains → 9:00 AM – 12:00 PM",
                    "JEE Advanced (Paper 1) → 9:00 AM – 12:00 PM",
                    "JEE Advanced (Paper 2) → 2:30 PM – 5:30 PM",
                    "Can attempt even after live time ends"
                ]
            },
            { icon: Award, text: "Results every Monday at 10:00 AM" }
        ]
    },
    {
        id: 3,
        title: "Class 13 (Dropper) Test Series ( X Series...)",
        image: pkg3,
        price: "599",
        discount: "100%",
        features: [
            { icon: Calendar, text: "Live Test on Sundays only" },
            { icon: Users, text: "Free for all (No batch required)" },
            { icon: FileText, text: "Syllabus and details for upcoming test shared by Monday (Click on <i>View Syllabus</i>)" },
            { icon: Globe, text: "Useful for Careerwill Students (Batch Enrollment) – X1, X2, X3" },
            { icon: FileText, text: "NTA-like Exam Interface" },
            { icon: BarChart2, text: "Detailed Performance Analysis" },
            { icon: CheckCircle, text: "Question Insights + Bookmark for revision" },
            { icon: Clock, text: "Reattempt option available" },
            { icon: Volume2, text: "Updates in Announcement Section" },
            {
                icon: Clock, text: "Schedule:", subItems: [
                    "JEE Main → 9:00 AM – 12:00 PM",
                    "JEE Advanced (Paper 1) → 9:00 AM – 12:00 PM",
                    "JEE Advanced (Paper 2) → 2:30 PM – 5:30 PM",
                    "Can attempt even after live time ends"
                ]
            },
            { icon: Award, text: "Results every Monday at 10:00 AM" }
        ]
    }
];

export default function BuyPackages() {
    return (
        <div className="space-y-6 animate-in fade-in duration-500 max-w-7xl mx-auto">



            <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-light text-slate-800 flex items-center gap-2">
                    Buy Test Packages & <ContainerTextFlip
                        words={["Start Winning", "Get Selected", "Beat Exam"]}
                        className="text-emerald-600 font-semibold"
                        interval={2500}
                    />
                </h1>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {coursePackages.map((pkg) => (
                    <PackageCard key={pkg.id} pkg={pkg} />
                ))}
            </div>
        </div>
    );
}

