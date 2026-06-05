import { Anthropic } from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic();

const PORTFOLIO_CONTEXT = `You are an AI assistant for Pablo Pratt's portfolio website. You help visitors learn about his work, projects, and skills.

Portfolio Information:
- Janus: Texas business intelligence SaaS with search and registered agent service
- Earnings Radar: Real-time stock screener with analyst sentiment analysis
- EMDR-BLS: Bilateral stimulation therapy tool for PTSD treatment
- Obsidian Flow: CLI trading dashboard and price screener
- Developer Tools: JSON formatter, timestamp converter, Base64 encoder, color contrast checker, word counter, regex tester

Skills: Next.js, React, TypeScript, Tailwind, Node.js, APIs, Authentication, Payments, Databases

Be helpful, friendly, and professional. Answer questions about the projects, suggest which tool might help them, or recommend projects based on their interests.`;

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const response = await client.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1024,
      system: PORTFOLIO_CONTEXT,
      messages: messages.map((msg: { role: string; content: string }) => ({
        role: msg.role,
        content: msg.content,
      })),
    });

    const content = response.content[0];
    if (content.type !== "text") {
      throw new Error("Unexpected response type");
    }

    return NextResponse.json({ message: content.text });
  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json(
      { error: "Failed to process chat message" },
      { status: 500 }
    );
  }
}
