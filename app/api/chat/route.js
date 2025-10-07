import { NextResponse } from "next/server";
import chatbotData from "@/data/chatbotData.json";

export async function POST(req) {
  try {
    const { messages = [], language = "en" } = await req.json();

    if (!messages.length) {
      return NextResponse.json({
        text: language === "en"
          ? "🤔 Please type something!"
          : "🤔 कृपया कुछ टाइप करें!"
      });
    }

    const lastMessageRaw = messages[messages.length - 1]?.content || "";
    const lastMessage = lastMessageRaw.trim().toLowerCase();

    // Default response
    let botResponse = language === "en"
      ? "🤔 I don’t understand, can you ask in another way?"
      : "🤔 मुझे समझ नहीं आया, कृपया फिर से पूछें।";

    // 1️⃣ Exact key match
    for (const key in chatbotData) {
      const entry = chatbotData[key];
      if (lastMessage.includes(key.toLowerCase())) {
        botResponse = language === "en" ? entry.answer.en : entry.answer.hi;
        break;
      }
    }

    // 2️⃣ Keyword match if still not matched
    if (botResponse.includes("🤔")) {
      for (const key in chatbotData) {
        const entry = chatbotData[key];
        if (Array.isArray(entry.keywords)) {
          for (const kw of entry.keywords) {
            if (lastMessage.includes(kw.toLowerCase())) {
              botResponse = language === "en" ? entry.answer.en : entry.answer.hi;
              break;
            }
          }
        }
        if (!botResponse.includes("🤔")) break;
      }
    }

    return NextResponse.json({ text: botResponse });

  } catch (error) {
    console.error("Server/API error:", error);
    return NextResponse.json({
      text: language === "en"
        ? "⚠️ Server error, please try again later."
        : "⚠️ सर्वर त्रुटि, कृपया बाद में पुनः प्रयास करें।"
    });
  }
}
