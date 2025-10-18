"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSeedling,
  FaPaperPlane,
  FaLeaf,
  FaWater,
  FaMicrophone,
  FaTimes,
} from "react-icons/fa";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [language, setLanguage] = useState("en");
  const chatEndRef = useRef(null);
  const recognitionRef = useRef(null);

  // --- Voice recognition setup ---
  useEffect(() => {
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = language === "en" ? "en-IN" : "hi-IN";

      recognitionRef.current.onresult = (event) => {
        const transcript =
          event.results[event.results.length - 1][0].transcript.toLowerCase();
        setInput(transcript);
        sendMessage(transcript);
        recognitionRef.current.stop();
      };
    }
  }, [language]);

  const scrollToBottom = () =>
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => scrollToBottom(), [messages, typingText]);

  // --- Reset chat & show greeting every time window opens ---
  useEffect(() => {
    if (open) {
      const greeting =
        language === "hi"
          ? "🙏🏻 नमस्ते! मैं Khashtkaar Agro Bio Care A.I. असिस्टेंट हूँ। आज मैं आपकी क्या मदद कर सकता हूँ?"
          : "🙏🏻 Namaste! I am Khashtkaar Agro Bio Care A.I. Assistant. How can I help you today?";
      setMessages([{ role: "bot", content: greeting }]);
      speak(greeting);
    }
  }, [open, language]);

  const speak = (text) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language === "en" ? "en-IN" : "hi-IN";
      speechSynthesis.speak(utterance);
    }
  };

  const addBotMessage = (botReply) => {
    setMessages((prev) => [...prev, { role: "bot", content: botReply }]);
    speak(botReply);
  };

  const handleVoiceInput = () => {
    if (!recognitionRef.current)
      return alert("Speech Recognition not supported in this browser.");
    recognitionRef.current.start();
  };

  const sendMessage = async (voiceInput) => {
    const userText = voiceInput || input;
    if (!userText.trim()) return;

    const userMessage = { role: "user", content: userText };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    setTypingText("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          language,
        }),
      });
      const data = await res.json();
      const botReply = data.text;

      let i = 0;
      const typingInterval = setInterval(() => {
        setTypingText(botReply.slice(0, i + 1));
        i++;
        if (i === botReply.length) {
          clearInterval(typingInterval);
          addBotMessage(botReply);
          setTypingText("");
        }
      }, 30);
    } catch (error) {
      console.error(error);
      addBotMessage(
        language === "en" ? "Error: Try again!" : "त्रुटि: कृपया पुनः प्रयास करें!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="w-80 sm:w-96 h-[500px] flex flex-col border border-green-400 rounded-2xl shadow-2xl bg-[#E5DDD5] overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-3">
              <div className="flex items-center gap-2 text-sm sm:text-base font-bold">
                <FaSeedling />
                <span>Khashtkaar Chatbot</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-2 py-1 text-xs rounded ${
                    language === "en" ? "bg-white text-green-600" : ""
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("hi")}
                  className={`px-2 py-1 text-xs rounded ${
                    language === "hi" ? "bg-white text-green-600" : ""
                  }`}
                >
                  HI
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="hover:text-red-300"
                >
                  <FaTimes size={16} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-3 overflow-y-auto space-y-2">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <span
                    className={`px-3 py-2 rounded-2xl shadow text-sm ${
                      msg.role === "user"
                        ? "bg-[#DCF8C6] text-gray-900 rounded-br-none"
                        : "bg-white text-gray-900 rounded-bl-none"
                    } max-w-[75%] break-words`}
                  >
                    {msg.content}
                  </span>
                </motion.div>
              ))}
              {typingText && (
                <p className="text-gray-700 bg-white border border-green-100 px-3 py-2 rounded-xl inline-block">
                  {typingText}
                  <span className="animate-pulse">|</span>
                </p>
              )}
              {loading && !typingText && (
                <p className="text-gray-400 flex items-center gap-2">
                  <FaLeaf className="animate-spin text-green-500" /> Bot is
                  thinking...
                </p>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <div className="flex items-center p-3 border-t bg-[#F0F0F0] gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={
                  language === "en"
                    ? "Type your message..."
                    : "अपना संदेश टाइप करें..."
                }
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-green-500"
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />

              <motion.button
                onClick={() => sendMessage()}
                className="bg-green-500 text-white p-3 rounded-full shadow-md flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaPaperPlane size={18} />
              </motion.button>

              <motion.button
                onClick={handleVoiceInput}
                className="bg-yellow-400 text-white p-3 rounded-full shadow-md flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaMicrophone size={18} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1, boxShadow: "0 0 20px #34D399" }}
        className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center shadow-2xl"
      >
        <FaWater size={28} />
      </motion.button>
    </div>
  );
}
