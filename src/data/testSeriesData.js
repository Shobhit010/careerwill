import { Calendar, Users, FileText, CheckCircle, Smartphone, Clock, Award, BarChart2 } from "lucide-react";

export const testPackages = [
    {
        id: "neet-minor-major",
        title: "NEET Minor/Major Test Package – Biweekly Every Sunday",
        features: [
            { icon: Calendar, text: "Bi-weekly Sunday Live Test" },
            { icon: Users, text: "Free for all (No batch needed)" },
            { icon: FileText, text: "Syllabus & schedule updated by Tuesday (Click on View Syllabus)" },
            { icon: Award, text: "For Careerwill – NEET Achiever Batch" },
            { icon: FileText, text: "NTA-like exam experience" },
            { icon: BarChart2, text: "Detailed performance analysis" },
            { icon: CheckCircle, text: "Question insights + Bookmark for revision" },
            { icon: Clock, text: "Reattempt available" },
            { icon: FileText, text: "Updates in Announcement Section" },
            { icon: Clock, text: "Live at 9:00 AM (attempt anytime later too)" },
            { icon: Award, text: "Results every Monday at 10:00 AM" },
        ],
        tests: [
            {
                id: "minor-test-03",
                title: "Minor Test-03 ( NEET Acheiver Online 1.O)",
                questions: 180,
                marks: 720,
                duration: 180,
                type: "Multiple Attempted Test",
                date: "07-09-2025 (11:00 AM)",
                status: "start", // start, result, analysis etc.
            },
            {
                id: "minor-test-01",
                title: "Minor Test-01 ( NEET Acheiver Online 2.O)",
                questions: 180,
                marks: 720,
                duration: 180,
                type: "Multiple Attempted Test",
                date: "07-09-2025 (11:00 AM)",
                status: "start",
            },
        ],
        liveTests: [],
        tabs: ["description", "all-tests", "live-tests"],
    },
    {
        id: "clat-package",
        title: "CLAT Package",
        tabs: ["videos-lessons", "live-video", "description", "all-tests"],
        features: [
            { icon: Calendar, text: "Weekly Mock Tests" },
            { icon: BarChart2, text: "All India Rank analysis" },
        ],
        tests: [],
        liveTests: [],
        videos: [
            {
                section: "Math Sec 2",
                items: [
                    { title: "CLAT", type: "Video", status: "Live", action: "PLAY" },
                    { title: "Lecture 02", type: "Video", status: "Live", action: "PLAY" },
                ]
            }
        ]
    },
    {
        id: "class-11-series",
        title: "Class 11 Test Series (N Series Batch)",
        tabs: ["description", "view-syllabus", "all-tests", "live-tests"],
        features: [
            { icon: Calendar, text: "Live Test on Sundays only" },
            { icon: Users, text: "Free for all (No batch required)" },
            { icon: FileText, text: "Syllabus and details for upcoming test shared by Monday (Click on View Syllabus)" },
            { icon: Award, text: "Useful for Careerwill Students (Batch Enrollment) – N1,N2&N3" },
            { icon: FileText, text: "NTA-like Exam Interface" },
            { icon: BarChart2, text: "Detailed Performance Analysis" },
            { icon: CheckCircle, text: "Question Insights + Bookmark for revision" },
            { icon: FileText, text: "Updates in Announcement Section" },
            {
                icon: Clock, text: "Schedule:", isHeader: true, subItems: [
                    "JEE Main -> 9:00 AM – 12:00 PM",
                    "JEE Advanced (Paper 1) -> 9:00 AM – 12:00 PM",
                    "JEE Advanced (Paper 2) -> 2:30 PM – 5:30 PM",
                    "Can attempt even after live time ends"
                ]
            },
            { icon: Award, text: "Results every Monday at 10:00 AM" },
        ],
        tests: [],
        liveTests: [],
    },
    {
        id: "class-12-series",
        title: "Class 12 Test Series (E Series Batch)",
        tabs: ["description", "view-syllabus", "all-tests", "live-tests"],
        features: [
            { icon: Calendar, text: "Live Test on Sundays only" },
            { icon: Users, text: "Free for all (No batch required)" },
            { icon: FileText, text: "Syllabus and details for upcoming test shared by Monday (Click on View Syllabus)" },
            { icon: Award, text: "Useful for Careerwill Students (Batch Enrollment) – E1,E2&E3" },
            { icon: FileText, text: "NTA-like Exam Interface" },
            { icon: BarChart2, text: "Detailed Performance Analysis" },
            { icon: CheckCircle, text: "Question Insights + Bookmark for revision" },
            { icon: FileText, text: "Updates in Announcement Section" },
            {
                icon: Clock, text: "Schedule:", isHeader: true, subItems: [
                    "JEE Main -> 9:00 AM – 12:00 PM",
                    "JEE Advanced (Paper 1) -> 9:00 AM – 12:00 PM",
                    "JEE Advanced (Paper 2) -> 2:30 PM – 5:30 PM",
                    "Can attempt even after live time ends"
                ]
            },
            { icon: Award, text: "Results every Monday at 10:00 AM" },
        ],
        tests: [],
        liveTests: [],
    },
    {
        id: "testing-package",
        title: "Testing Package",
        features: [],
        tests: [],
        liveTests: [],
    },
];
