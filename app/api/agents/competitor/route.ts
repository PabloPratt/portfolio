import { Anthropic } from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

const client = new Anthropic();

export async function POST(request: NextRequest) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const { yourProduct, competitors } = await request.json();

    const response = await client.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 2000,
      system: `You are a competitive analysis expert. Return ONLY valid JSON:
{
  "strengths": ["<your strength>", ...],
  "weaknesses": ["<your weakness>", ...],
  "opportunities": ["<market opportunity>", ...],
  "threats": ["<competitive threat>", ...],
  "marketPosition": "<where you stand>",
  "recommendations": ["<actionable recommendation>", ...],
  "summary": "<executive summary>"
}`,
      messages: [
        {
          role: "user",
          content: `Analyze: Your product - ${yourProduct}\nCompetitors: ${competitors}`,
        },
      ],
    });

    const text = response.content[0].type === "text" ? response.content[0].text : "";
    return NextResponse.json(JSON.parse(text.trim()));
  } catch (error) {
    console.error("Competitor analysis error:", error);
    return NextResponse.json({ error: "Failed to analyze" }, { status: 500 });
  }
}
