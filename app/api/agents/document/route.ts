import { Anthropic } from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

const client = new Anthropic();

export async function POST(request: NextRequest) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const { document, analysisType } = await request.json();

    const response = await client.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 2000,
      system: `You are a document analysis expert. Analyze and return ONLY valid JSON:
{
  "summary": "<2-3 sentence summary>",
  "keyPoints": ["<key point>", ...],
  "sentiment": "<Positive|Neutral|Negative>",
  "actionItems": ["<action item>", ...],
  "risks": ["<identified risk>", ...],
  "opportunities": ["<opportunity>", ...],
  "nextSteps": ["<recommended step>", ...]
}`,
      messages: [
        {
          role: "user",
          content: `Analyze this ${analysisType}:\n${document}`,
        },
      ],
    });

    const text = response.content[0].type === "text" ? response.content[0].text : "";
    return NextResponse.json(JSON.parse(text.trim()));
  } catch (error) {
    console.error("Document analysis error:", error);
    return NextResponse.json({ error: "Failed to analyze" }, { status: 500 });
  }
}
