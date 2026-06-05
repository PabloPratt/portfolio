import { Anthropic } from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic();

export async function POST(request: NextRequest) {
  try {
    const { clientName, description, rate, hours, dueDate } = await request.json();

    const response = await client.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 800,
      system: `Generate a professional invoice text. Return ONLY valid JSON:
{
  "invoiceNumber": "<INV-2025-XXXX>",
  "invoiceText": "<full formatted invoice text ready to copy into email or document>",
  "summary": { "subtotal": <number>, "tax": <number>, "total": <number> }
}`,
      messages: [
        {
          role: "user",
          content: `Client: ${clientName}\nWork: ${description}\nRate: $${rate}/hour\nHours: ${hours}\nDue: ${dueDate}`,
        },
      ],
    });

    const text = response.content[0].type === "text" ? response.content[0].text : "";
    return NextResponse.json(JSON.parse(text.trim()));
  } catch (error) {
    console.error("Invoice error:", error);
    return NextResponse.json({ error: "Failed to generate invoice" }, { status: 500 });
  }
}
