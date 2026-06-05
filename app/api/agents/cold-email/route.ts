import { Anthropic } from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic();

export async function POST(request: NextRequest) {
  try {
    const { senderName, senderRole, targetName, targetCompany, targetRole, value, cta } = await request.json();

    const response = await client.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1000,
      system: `You write highly personalized, concise cold outreach emails that get replies. Return ONLY valid JSON with no markdown:
{
  "subject": "<compelling subject line under 50 chars>",
  "email": "<the full email text, 3-4 short paragraphs, conversational not salesy>",
  "followUpSubject": "<follow-up subject>",
  "followUp": "<short 2-paragraph follow-up email for 1 week later>"
}`,
      messages: [
        {
          role: "user",
          content: `Sender: ${senderName}, ${senderRole}
Target: ${targetName || "there"} at ${targetCompany}, ${targetRole}
Value proposition: ${value}
Call to action: ${cta || "15-minute call"}`,
        },
      ],
    });

    const text = response.content[0].type === "text" ? response.content[0].text : "";
    const json = JSON.parse(text.trim());
    return NextResponse.json(json);
  } catch (error) {
    console.error("Cold email error:", error);
    return NextResponse.json({ error: "Failed to generate email" }, { status: 500 });
  }
}
