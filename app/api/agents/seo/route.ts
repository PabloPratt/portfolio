import { Anthropic } from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

const client = new Anthropic();

export async function POST(request: NextRequest) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const { url, content } = await request.json();

    const response = await client.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1500,
      system: `You are an SEO expert. Analyze the content and return ONLY valid JSON:
{
  "score": <0-100>,
  "targetKeywords": ["<keyword>", ...],
  "improvements": ["<specific suggestion>", ...],
  "metaDescription": "<optimized meta description>",
  "titleSuggestion": "<optimized title tag>",
  "headingStructure": ["<H1>", "<H2>", ...],
  "backlinks": <estimated quantity>,
  "issues": ["<issue>", ...]
}`,
      messages: [
        {
          role: "user",
          content: `Analyze SEO for URL: ${url}\nContent:\n${content}`,
        },
      ],
    });

    const text = response.content[0].type === "text" ? response.content[0].text : "";
    return NextResponse.json(JSON.parse(text.trim()));
  } catch (error) {
    console.error("SEO analysis error:", error);
    return NextResponse.json({ error: "Failed to analyze SEO" }, { status: 500 });
  }
}
