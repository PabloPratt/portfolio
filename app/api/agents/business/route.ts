import { Anthropic } from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic();

export async function POST(request: NextRequest) {
  try {
    const { idea, market, monetization } = await request.json();

    if (!idea || !market) {
      return NextResponse.json({ error: "idea and market are required" }, { status: 400 });
    }

    const response = await client.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1500,
      system: `You are a startup advisor and business analyst. Analyze the business idea and return ONLY valid JSON with no markdown, no code blocks, no extra text. Return this exact shape:
{
  "viabilityScore": <integer 0-100>,
  "marketSize": "<string describing TAM>",
  "verdict": "<Strong|Moderate|Weak>",
  "competitors": ["<name>", ...],
  "uniqueAdvantages": ["<advantage>", ...],
  "risks": ["<risk>", ...],
  "nextSteps": ["<actionable step>", ...],
  "summary": "<2-3 sentence executive summary>"
}`,
      messages: [
        {
          role: "user",
          content: `Business Idea: ${idea}\nTarget Market: ${market}\nMonetization: ${monetization || "Not specified"}`,
        },
      ],
    });

    const text = response.content[0].type === "text" ? response.content[0].text : "";
    const json = JSON.parse(text.trim());
    return NextResponse.json(json);
  } catch (error) {
    console.error("Business validator error:", error);
    return NextResponse.json({ error: "Failed to analyze business idea" }, { status: 500 });
  }
}
