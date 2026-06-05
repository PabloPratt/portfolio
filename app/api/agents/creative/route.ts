import { Anthropic } from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

const client = new Anthropic();

export async function POST(request: NextRequest) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const { prompt, type, length } = await request.json();

    const response = await client.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 3000,
      system: `You are a professional ${type} writer. Return ONLY valid JSON:
{
  "title": "<title>",
  "content": "<full formatted ${type}>",
  "wordCount": <number>,
  "summary": "<brief summary>"
}`,
      messages: [
        {
          role: "user",
          content: `Write a ${length} ${type} about: ${prompt}`,
        },
      ],
    });

    const text = response.content[0].type === "text" ? response.content[0].text : "";
    return NextResponse.json(JSON.parse(text.trim()));
  } catch (error) {
    console.error("Creative writing error:", error);
    return NextResponse.json({ error: "Failed to generate" }, { status: 500 });
  }
}
