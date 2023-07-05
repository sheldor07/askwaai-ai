import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function POST(request: Request) {

  try {
    const { searchParams } = new URL(request.url);
    const prompt = searchParams.get("query");

    const verdict = await generateVerdict(prompt);
    return NextResponse.json({ verdict });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.toString() });
  }
}

async function generateVerdict(prompt: string) {
  // Generate a verdict based on the summary.
  let system_prompt =
    "Refer to yourself, as the Fact Checker AI, You are an advanced AI that specializes in summarizing and analyzing information from fact-checking websites about various claims. Your goal is to identify the claims that are directly relevant to a given query, evaluate them objectively, and provide a balanced and fair verdict based on the information provided. Remember to maintain impartiality and rely only on the available facts. Limit your words to 100";

  let user_prompt = `this is your query "${prompt}`;
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: system_prompt },
      { role: "user", content: user_prompt },
    ],
  });
  console.log("got from api", completion?.data?.choices[0]?.message?.content);
  return completion?.data?.choices[0]?.message?.content;
}
