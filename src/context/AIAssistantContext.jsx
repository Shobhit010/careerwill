import { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AIIntelligenceService } from "../services/ai/AIService";

const AIAssistantContext = createContext();

export function AIAssistantProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, role: "assistant", text: "Hi! I'm your AI Study Assistant. How can I help you today?" }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const location = useLocation();

    // Context-aware logic
    useEffect(() => {
        // When route changes, we might want to suggest something relevant
        // But for now, we just track the context implicitly via location
    }, [location]);

    const toggleAssistant = () => setIsOpen(prev => !prev);

    const minimize = () => setIsMinimized(true);
    const expand = () => {
        setIsMinimized(false);
        setIsOpen(true);
    };


    const sendMessage = async (text) => {
        const newUserMsg = { id: Date.now(), role: "user", text };
        setMessages(prev => [...prev, newUserMsg]);
        setIsTyping(true);

        try {
            // Call the Intelligence Service
            const context = {
                route: location.pathname,
                // scalable: add user info here
            };

            const response = await AIIntelligenceService.process(text, context);

            const newAiMsg = {
                id: Date.now() + 1,
                role: "assistant",
                text: response.text,
                mode: response.mode // We can use this for UI styling later if needed
            };

            setMessages(prev => [...prev, newAiMsg]);
        } catch (error) {
            console.error("AI Service Error:", error);
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                role: "assistant",
                text: "I'm having trouble connecting to my brain right now. Please try again."
            }]);
        } finally {
            setIsTyping(false);
        }
    };

    // generateResponse function is no longer needed locally as it's moved to service

    return (
        <AIAssistantContext.Provider value={{
            isOpen,
            isMinimized,
            toggleAssistant,
            minimize,
            expand,
            messages,
            sendMessage,
            isTyping
        }}>
            {children}
        </AIAssistantContext.Provider>
    );
}

export function useAIAssistant() {
    return useContext(AIAssistantContext);
}
