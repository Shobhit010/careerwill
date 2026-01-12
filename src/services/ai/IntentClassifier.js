// Simple keyword-based Intent Classifier using scoring

export const INTENTS = {
    GREETING: "GREETING",
    PLATFORM_HELP: "PLATFORM_HELP",
    SUBJECT_QUESTION: "SUBJECT_QUESTION",
    GENERAL_KNOWLEDGE: "GENERAL_KNOWLEDGE",
    OFF_TOPIC: "OFF_TOPIC"
};

const KEYWORDS = {
    [INTENTS.GREETING]: ["hi", "hello", "hey", "morning", "evening", "greetings"],
    [INTENTS.PLATFORM_HELP]: ["where", "how to", "find", "test", "result", "buy", "package", "notes", "pdf", "dashboard", "adaptive", "smart mode", "contact", "support", "password"],
    [INTENTS.SUBJECT_QUESTION]: ["what is", "explain", "derive", "formula", "solve", "math", "physics", "history", "science", "quadratic", "newton", "mughal", "algebra", "trigonometry"],
    [INTENTS.GENERAL_KNOWLEDGE]: ["who is", "capital", "weather", "news", "movie", "song"]
};

export function classifyIntent(query) {
    const lowerQuery = query.toLowerCase();

    // Quick checks
    const scores = {};

    // Initialize scores
    Object.values(INTENTS).forEach(intent => scores[intent] = 0);

    // Score based on keyword matches
    for (const [intent, keywords] of Object.entries(KEYWORDS)) {
        keywords.forEach(word => {
            if (lowerQuery.includes(word)) {
                scores[intent] += 1;
            }
        });
    }

    // Heuristics
    if (lowerQuery.length < 5 && scores[INTENTS.GREETING] > 0) return INTENTS.GREETING;

    // Find highest score
    let maxScore = 0;
    let bestIntent = INTENTS.OFF_TOPIC;

    for (const [intent, score] of Object.entries(scores)) {
        if (score > maxScore) {
            maxScore = score;
            bestIntent = intent;
        }
    }

    // Fallback if no specific intent found but query looks substantial
    if (maxScore === 0 && lowerQuery.length > 10) {
        // Assume subject question if it sounds academic (naive check)
        if (lowerQuery.includes("?") || lowerQuery.includes("define") || lowerQuery.includes("meaning")) {
            return INTENTS.SUBJECT_QUESTION;
        }
    }

    return bestIntent;
}
