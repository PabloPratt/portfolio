import { Anthropic } from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

const client = new Anthropic();

export async function POST(request: NextRequest) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const { topic, tone, includeHashtags, thread } = await request.json();

    const response = await client.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1500,
      system: `You write engaging tweets. Return ONLY valid JSON:
{
  "tweets": ["<tweet 1 (280 chars)>", ...],
  "hashtags": ["<hashtag>", ...],
  "tips": ["<engagement tip>", ...],
  "bestTime": "<recommended posting time>",
  "followUp": "<suggested response to likely replies>"
}`,
      messages: [
        {
          role: "user",
          content: `Write ${thread ? 'a tweet thread' : 'tweets'} about: ${topic}\nTone: ${tone}${includeHashtags ? '\nInclude hashtags' : ''}`,
        },
      ],
    });

    const text = response.content[0].type === "text" ? response.content[0].text : "";
    return NextResponse.json(JSON.parse(text.trim()));
  } catch (error) {
    console.error("Tweet generation error:", error);
    return NextResponse.json({ error: "Failed to generate tweets" }, { status: 500 });
  }
}
