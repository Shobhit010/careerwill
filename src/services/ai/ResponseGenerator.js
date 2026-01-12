import { INTENTS } from "./IntentClassifier";
import { PLATFORM_KNOWLEDGE, SUBJECT_KNOWLEDGE, GENERAL_CONVERSATION } from "./KnowledgeBase";

// Modes change the personality and depth of the response
export const MODES = {
    TUTOR: "TUTOR",   // Explanatory, encouraging, verbose
    EXPERT: "EXPERT", // Concise, factual, direct
    COACH: "COACH"    // Motivational, guiding
};

export function generateResponse(intent, query, context) {
    const { route } = context;
    const lowerQuery = query.toLowerCase();

    // 1. Handle Greetings
    if (intent === INTENTS.GREETING) {
        const greetings = GENERAL_CONVERSATION.greetings;
        return {
            text: greetings[Math.floor(Math.random() * greetings.length)],
            mode: MODES.COACH
        };
    }

    // 2. Handle Platform Help (Route Aware)
    if (intent === INTENTS.PLATFORM_HELP) {
        // Check for specific feature matches in Knowledge Base
        for (const feature of PLATFORM_KNOWLEDGE.features) {
            if (feature.keywords.some(k => lowerQuery.includes(k))) {
                return {
                    text: `${feature.description}`,
                    mode: MODES.EXPERT
                };
            }
        }

        // Contextual Fallbacks
        if (route.includes("test-series")) {
            return {
                text: "You are in the Test Series section. You can browse packages or switch to the 'All Tests' tab to start a mock exam.",
                mode: MODES.COACH
            };
        }
        return {
            text: "I can help you navigate. Try asking about 'Test Series', 'Documents', or 'Results'.",
            mode: MODES.COACH
        };
    }

    // 3. Handle Subject Questions (The "Brain")
    if (intent === INTENTS.SUBJECT_QUESTION) {
        // Flatten subject knowledge for search
        const allTopics = [
            ...SUBJECT_KNOWLEDGE.math,
            ...SUBJECT_KNOWLEDGE.science,
            ...SUBJECT_KNOWLEDGE.history
        ];

        const match = allTopics.find(t =>
            t.keywords.some(k => lowerQuery.includes(k))
        );

        if (match) {
            // TUTOR MODE: Rich explanation
            return {
                text: `**${match.topic}**: ${match.explanation}\n\n${match.key_formula ? `**Formula**: ${match.key_formula}\n` : ""}${match.key_fact ? `**Key Fact**: ${match.key_fact}\n` : ""}💡 **Tip**: ${match.tip || "Keep practicing!"}`,
                mode: MODES.TUTOR
            };
        }

        return {
            text: "That sounds like an academic question. While I don't have that specific topic in my local database yet, I suggest checking the 'Documents' section for class notes.",
            mode: MODES.TUTOR
        };
    }

    // 4. Default / Off Topic / General
    return {
        text: "I'm your specialized Study Assistant. I can help with platform features, Math, Science, or History concepts. For general queries, please search the web.",
        mode: MODES.COACH
    };
}
