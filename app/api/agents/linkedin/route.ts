import { Anthropic } from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

const client = new Anthropic();

export async function POST(request: NextRequest) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const { topic, style, includeHashtags } = await request.json();

    const response = await client.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1000,
      system: `You write viral LinkedIn posts. Return ONLY valid JSON:
{
  "post": "<engaging post text with line breaks>",
  "hashtags": ${includeHashtags ? '["<hashtag>", ...]' : '[]'},
  "callToAction": "<CTA suggestion>",
  "engagementTips": ["<tip>", ...]
}`,
      messages: [
        {
          role: "user",
          content: `Write a ${style} LinkedIn post about: ${topic}`,
        },
      ],
    });

    const text = response.content[0].type === "text" ? response.content[0].text : "";
    return NextResponse.json(JSON.parse(text.trim()));
  } catch (error) {
    console.error("LinkedIn post error:", error);
    return NextResponse.json({ error: "Failed to generate post" }, { status: 500 });
  }
}
