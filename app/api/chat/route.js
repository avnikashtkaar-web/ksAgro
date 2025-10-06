import { NextResponse } from "next/server";

// Toggle between Free mode and OpenAI mode
const USE_OPENAI = false; // 🔹 Set to true to use OpenAI

export async function POST(req) {
  try {
    const { messages } = await req.json();

    if (!USE_OPENAI) {
      // ✅ Free testing (mock responses)
      const lastMessage = messages[messages.length - 1]?.content || "";

      let botResponse = "Sorry, I don't understand.";
      if (lastMessage.toLowerCase().includes("hello")) {
        botResponse = "Hello! How can I help you today?";
      } else if (lastMessage.toLowerCase().includes("fertilizer")) {
        botResponse = "We recommend using organic fertilizer for better crop yield.";
      } else if (lastMessage.trim() === "") {
        botResponse = "Please type something!";
      } else {
        botResponse = "This is a mock response from your bot.";
      }

      return NextResponse.json({ text: botResponse });
    }

    // 🔹 OpenAI Mode
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages,
        temperature: 0.7,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("OpenAI API error:", data);
      return NextResponse.json({ text: "Sorry, something went wrong!" });
    }

    const text = data.choices?.[0]?.message?.content || "Sorry, something went wrong!";
    return NextResponse.json({ text });

  } catch (error) {
    console.error("Server/API error:", error);
    return NextResponse.json({ text: "Sorry, something went wrong!" });
  }
}
