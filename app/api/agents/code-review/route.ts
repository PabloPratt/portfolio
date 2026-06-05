import { Anthropic } from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

const client = new Anthropic();

export async function POST(request: NextRequest) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const { code, language } = await request.json();

    const response = await client.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1500,
      system: `You are a senior code reviewer. Review the code and return ONLY valid JSON:
{
  "score": <0-100>,
  "quality": "<Excellent|Good|Fair|Poor>",
  "bugs": ["<potential bug with line number>", ...],
  "improvements": ["<improvement suggestion>", ...],
  "performance": ["<performance optimization>", ...],
  "security": ["<security concern>", ...],
  "summary": "<overall assessment>"
}`,
      messages: [
        {
          role: "user",
          content: `Review this ${language} code:\n\`\`\`${language}\n${code}\n\`\`\``,
        },
      ],
    });

    const text = response.content[0].type === "text" ? response.content[0].text : "";
    return NextResponse.json(JSON.parse(text.trim()));
  } catch (error) {
    console.error("Code review error:", error);
    return NextResponse.json({ error: "Failed to review code" }, { status: 500 });
  }
}
