"use client";

import React, { useState, useEffect, useRef } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);
  const notificationSound = useRef(null);

  useEffect(() => {
    notificationSound.current = new Audio("/425556__t_roy_920__rock-808-beat.mp3");
  }, []);

  const scrollToBottom = () => chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(() => scrollToBottom(), [messages, loading]);

  const sendMessage = async () => {
    if (!input) return;
    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      const data = await res.json();
      setMessages((prev) => {
        const updated = [...prev, { role: "bot", content: data.text }];
        notificationSound.current?.play();
        return updated;
      });
    } catch (error) {
      console.error(error);
      setMessages((prev) => [...prev, { role: "bot", content: "Error: Try again!" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-0 right-0 z-50 flex flex-col items-end">
      {/* Chat Window */}
      <div
        className={`transform transition-transform duration-500 ease-in-out ${
          open ? "translate-y-0 opacity-100" : "translate-y-[90px] opacity-0 pointer-events-none"
        } w-96 h-[550px] flex flex-col border-4 border-green-600 rounded-3xl shadow-2xl bg-gradient-to-b from-green-100 to-green-50 overflow-hidden mb-2 animate-fadeIn`}
      >
        {/* Header */}
        <div className="flex justify-between items-center bg-green-600 text-white p-4 rounded-t-3xl shadow-lg">
          <span className="font-bold text-lg flex items-center gap-2">
            🌿 Kashtkaar Chatbot
          </span>
          <button
            onClick={() => setOpen(false)}
            className="text-white font-bold text-xl hover:text-yellow-300 transition-colors"
          >
            ✖
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto bg-green-50">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`my-2 flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {/* Avatar */}
              {msg.role === "bot" && (
                <div className="w-8 h-8 bg-green-600 rounded-full mr-2 flex items-center justify-center text-white font-bold">
                  🌾
                </div>
              )}
              <span
                className={`px-4 py-2 rounded-xl shadow-lg ${
                  msg.role === "user"
                    ? "bg-yellow-200 text-yellow-900"
                    : "bg-green-200 text-green-900"
                } max-w-[70%] break-words`}
              >
                {msg.content}
              </span>
            </div>
          ))}

          {/* Typing animation */}
          {loading && (
            <div className="flex items-center my-2">
              <div className="w-8 h-8 bg-green-600 rounded-full mr-2 flex items-center justify-center text-white font-bold">
                🌾
              </div>
              <div className="flex space-x-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce animation-delay-200"></span>
                <span className="w-2 h-2 bg-green-500 rounded-full animate-bounce animation-delay-400"></span>
              </div>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Input */}
        <div className="flex p-3 border-t border-green-300 bg-green-50">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question..."
            className="flex-1 border border-green-400 rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-green-500 transition-all"
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="ml-3 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors"
          >
            Send
          </button>
        </div>
      </div>

      {/* Floating Chat Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center shadow-2xl hover:bg-green-700 animate-pulse transition-transform duration-300 mb-2"
        >
          💬
        </button>
      )}
    </div>
  );
}
