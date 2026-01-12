import { classifyIntent } from "./IntentClassifier";
import { generateResponse } from "./ResponseGenerator";

// Public API for the AI Service
export const AIIntelligenceService = {
    /**
     * Process a user query with context and return a structured response.
     * @param {string} query - The user's input text
     * @param {object} context - Current application state (route, user info, etc.)
     * @returns {Promise<{text: string, mode: string, intent: string}>}
     */
    async process(query, context) {
        // 1. Simulate network delay for realism (300-800ms)
        const delay = 300 + Math.random() * 500;
        await new Promise(resolve => setTimeout(resolve, delay));

        // 2. Classify Intent
        const intent = classifyIntent(query);

        // 3. Generate Response
        const responseCallback = generateResponse(intent, query, context);

        return {
            text: responseCallback.text,
            mode: responseCallback.mode,
            intent: intent
        };
    }
};
