import { Anthropic } from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic();

export async function POST(request: NextRequest) {
  try {
    const { resume, jobDescription } = await request.json();
    if (!resume || !jobDescription) {
      return NextResponse.json({ error: "resume and jobDescription required" }, { status: 400 });
    }

    const response = await client.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1500,
      system: `You are an expert resume reviewer and recruiter. Analyze the resume against the job description. Return ONLY valid JSON, no markdown, no code blocks:
{
  "score": <integer 0-100>,
  "matchLevel": "<Excellent|Good|Fair|Poor>",
  "strengths": ["<strength>", ...],
  "gaps": ["<missing skill or experience>", ...],
  "suggestions": ["<specific actionable improvement>", ...],
  "keywords": { "found": ["<keyword>", ...], "missing": ["<keyword>", ...] },
  "summary": "<2-3 sentence honest assessment>"
}`,
      messages: [
        {
          role: "user",
          content: `RESUME:\n${resume}\n\nJOB DESCRIPTION:\n${jobDescription}`,
        },
      ],
    });

    const text = response.content[0].type === "text" ? response.content[0].text : "";
    return NextResponse.json(JSON.parse(text.trim()));
  } catch (error) {
    console.error("Resume scorer error:", error);
    return NextResponse.json({ error: "Failed to analyze resume" }, { status: 500 });
  }
}
