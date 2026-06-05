import { Anthropic } from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

const client = new Anthropic();

export async function POST(request: NextRequest) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const { companyName, problem, solution, market, fundingAsk } = await request.json();

    const response = await client.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 2500,
      system: `You are an expert pitch deck writer. Create a compelling pitch outline and return ONLY valid JSON:
{
  "slides": [
    { "title": "<slide title>", "content": "<talking points>" },
    ...
  ],
  "hook": "<opening hook>",
  "closing": "<strong closing statement>",
  "timeline": "<suggested presentation time>",
  "keyMetrics": ["<metric to emphasize>", ...],
  "summary": "<one-paragraph pitch summary>"
}`,
      messages: [
        {
          role: "user",
          content: `Create pitch deck outline:\nCompany: ${companyName}\nProblem: ${problem}\nSolution: ${solution}\nMarket: ${market}\nFunding: ${fundingAsk}`,
        },
      ],
    });

    const text = response.content[0].type === "text" ? response.content[0].text : "";
    return NextResponse.json(JSON.parse(text.trim()));
  } catch (error) {
    console.error("Pitch generation error:", error);
    return NextResponse.json({ error: "Failed to generate pitch" }, { status: 500 });
  }
}
