"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSeedling,
  FaCloudSun,
  FaLeaf,
  FaWater,
  FaMicrophone,
  FaTimes,
} from "react-icons/fa";

export default function Chatbot() {
  const [open, setOpen] = useState(false); // start closed
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [language, setLanguage] = useState("en"); // default English
  const chatEndRef = useRef(null);
  const notificationSound = useRef(null);
  const recognitionRef = useRef(null);

  useEffect(() => {
    // notificationSound.current = new Audio(
    //   "/425556__t_roy_920__rock-808-beat.mp3"
    // );

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

  const speak = (text) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language === "en" ? "en-IN" : "hi-IN";
      speechSynthesis.speak(utterance);
    }
  };

  const addBotMessage = (botReply) => {
    setMessages((prev) => [...prev, { role: "bot", content: botReply }]);
    notificationSound.current?.play();
    speak(botReply);
  };

  const handleVoiceInput = () => {
    if (!recognitionRef.current)
      return alert("Speech Recognition not supported.");
    recognitionRef.current.start();
  };

  const sendMessage = async (voiceInput) => {
    const userText = voiceInput || input;
    if (!userText) return;

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
      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="w-80 sm:w-96 h-[500px] flex flex-col border-2 border-green-400 rounded-2xl shadow-2xl bg-gradient-to-br from-green-50 to-green-100 overflow-hidden"
          >
            {/* Header with title + language + close */}
            <div className="flex justify-between items-center bg-green-500 text-white px-4 py-3">
              <h3 className="font-bold flex items-center gap-2">
                <FaSeedling /> Kashtkaar Chatbot
              </h3>
              <div className="flex items-center gap-2">
                {/* Language buttons */}
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-1 rounded ${
                    language === "en"
                      ? "bg-white text-green-600"
                      : "bg-green-400"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("hi")}
                  className={`px-3 py-1 rounded ${
                    language === "hi"
                      ? "bg-white text-green-600"
                      : "bg-green-400"
                  }`}
                >
                  HI
                </button>
                {/* Close button */}
                <button
                  onClick={() => setOpen(false)}
                  className="text-white hover:text-red-300 ml-2"
                >
                  <FaTimes size={18} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-3 overflow-y-auto space-y-2">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <span
                    className={`px-3 py-2 rounded-xl shadow ${
                      msg.role === "user"
                        ? "bg-green-200 text-green-900"
                        : "bg-white text-gray-900 border border-green-200"
                    } max-w-[75%] break-words`}
                  >
                    {msg.content}
                  </span>
                </div>
              ))}
              {typingText && (
                <p className="text-gray-700 bg-white border border-green-200 px-3 py-2 rounded-xl inline-block">
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
            <div className="flex p-3 border-t bg-white gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={
                  language === "en"
                    ? "Ask about farming..."
                    : "खेती के बारे में पूछें..."
                }
                className="flex-1 border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-500"
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <motion.button
                onClick={() => sendMessage()}
                className="bg-green-500 text-white px-3 py-2 rounded-lg flex items-center gap-1"
              >
                <FaCloudSun /> Send
              </motion.button>
              <motion.button
                onClick={handleVoiceInput}
                className="bg-yellow-400 text-white px-3 py-2 rounded-lg flex items-center gap-1"
              >
                <FaMicrophone /> Speak
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Icon (only water drop now) */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1, boxShadow: "0 0 20px #34D399" }}
        className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center shadow-2xl transition-transform"
      >
        <FaWater size={28} />
      </motion.button>
    </div>
  );
}
