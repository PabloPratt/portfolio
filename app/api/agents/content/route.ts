import { Anthropic } from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

const client = new Anthropic();

export async function POST(request: NextRequest) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const { topic, format, tone, length } = await request.json();

    const response = await client.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 2000,
      system: `You are a professional content writer. Generate ${format} content that is ${tone} in tone and ${length} in length. Return ONLY valid JSON:
{
  "title": "<compelling title>",
  "content": "<full formatted content>",
  "seoKeywords": ["<keyword>", ...],
  "summary": "<brief summary>"
}`,
      messages: [
        {
          role: "user",
          content: `Create ${format} about: ${topic}`,
        },
      ],
    });

    const text = response.content[0].type === "text" ? response.content[0].text : "";
    return NextResponse.json(JSON.parse(text.trim()));
  } catch (error) {
    console.error("Content generation error:", error);
    return NextResponse.json({ error: "Failed to generate content" }, { status: 500 });
  }
}
