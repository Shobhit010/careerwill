// Comprehensive Knowledge Base for the AI Assistant

export const PLATFORM_KNOWLEDGE = {
    features: [
        {
            keywords: ["test series", "mock test", "exam"],
            title: "Test Series",
            description: "Our Test Series offers comprehensive mock exams for NEET, JEE, and SSC. You can access them via the 'Test Series' tab. We offer 'Adaptive Mode' to adjust difficulty based on your performance."
        },
        {
            keywords: ["adaptive", "smart mode", "difficulty"],
            title: "Adaptive Testing",
            description: "Adaptive Mode uses AI to increase or decrease question difficulty in real-time based on your answers, helping you identify your true proficiency level."
        },
        {
            keywords: ["documents", "notes", "pdf", "study material"],
            title: "Study Material",
            description: "You can find high-quality PDFs, class notes, and formula sheets in the 'Documents' section. Use the 'AI Summary' button to get quick insights."
        },
        {
            keywords: ["results", "score", "analysis", "progress"],
            title: "Performance Analysis",
            description: "The Results page provides deep insights into your accuracy, speed, and weak areas. Look for the 'AI Performance Insight' card for personalized tips."
        },
        {
            keywords: ["buy", "purchase", "package", "price"],
            title: "Buying Packages",
            description: "Visit the 'Buy Packages' section to explore premium test series. We accept all major payment methods."
        }
    ],
    faqs: [
        { q: "how to start", a: "Head to the Dashboard to see your recommended learning path, or jump straight into a Test Series." },
        { q: "contact support", a: "You can reach us at support@careerwill.com or call our helpline available in the footer." },
        { q: "reset password", a: "Go to Settings > Security to update your password." }
    ]
};

export const SUBJECT_KNOWLEDGE = {
    math: [
        {
            topic: "Quadratic Equations",
            keywords: ["quadratic", "roots", "equation", "algebra"],
            explanation: "A quadratic equation is a polynomial equation of degree 2, typically in the form ax² + bx + c = 0. The solutions are called roots.",
            key_formula: "x = (-b ± √(b² - 4ac)) / 2a",
            tip: "The term b² - 4ac is called the discriminant (D). If D > 0, roots are real and distinct. If D = 0, roots are real and equal."
        },
        {
            topic: "Trigonometry",
            keywords: ["sin", "cos", "tan", "trigonometry", "triangle"],
            explanation: "Trigonometry deals with the relationships between side lengths and angles of triangles. The core functions are Sine, Cosine, and Tangent.",
            key_formula: "sin²θ + cos²θ = 1",
            tip: "Remember SOH CAH TOA: Sine = Opposite/Hypotenuse, Cosine = Adjacent/Hypotenuse, Tangent = Opposite/Adjacent."
        }
    ],
    science: [
        {
            topic: "Newton's Laws",
            keywords: ["newton", "force", "motion", "physics", "gravity"],
            explanation: "Newton's First Law (Inertia): An object remains at rest or in uniform motion unless acted upon by a force. Second Law: F = ma. Third Law: For every action, there is an equal and opposite reaction.",
            key_formula: "F = ma (Force = mass × acceleration)",
            tip: "Inertia is directly proportional to mass. Heavier objects are harder to move."
        }
    ],
    history: [
        {
            topic: "Mughal Empire",
            keywords: ["mughal", "akbar", "babur", "history", "india"],
            explanation: "The Mughal Empire ruled most of the Indian subcontinent from the early 16th to the mid-19th century. Founded by Babur in 1526.",
            key_fact: "Akbar the Great (1556–1605) is known for his policy of religious tolerance and centralized administration."
        }
    ]
};

export const GENERAL_CONVERSATION = {
    greetings: ["Hello! Ready to study?", "Hi there! How can I help you learn today?", "Welcome back! What's on your mind?"],
    unknown: ["That's an interesting question. I'm focusing on your syllabus right now, but you could check the external library.", "I'm not sure about that one, but I can help you with Maths, Science, or platform features."]
};
