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
    const {essayData} = await request.json();

    console.log("essay data in ai", essayData.essayData);
    
    if(!essayData) throw new Error("No essay data provided");

    const verdict = await generateVerdict(prompt,essayData);
    return NextResponse.json({ verdict });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.toString() });
  }
}

async function generateVerdict(essayData: string,prompt: string) {
  // Generate a verdict based on the summ:ary.
  let system_prompt =
    "You are an experienced AI writing assistant. Your role is to provide feedback and insights on the given input. The input consists of observations using the AEIOU framework, and the user has requested evaluation, identification of gaps, and suggestions for improvement. You should thoroughly analyze the provided observations and provide thoughtful and constructive feedback based on the questions posed. Your responses should help the user gain a deeper understanding of the AEIOU observations and guide them in capturing interactions, activities, and other essential aspects. Please provide comprehensive and informative answers to assist the user effectively.    ";

  let user_prompt = `This is your user written data ${essayData}, and this is your prompt ${prompt} Limit your response to 500 characters.`;
  console.log("prompt", user_prompt);
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
