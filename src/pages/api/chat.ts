import type { APIRoute } from "astro";
import Anthropic from "@anthropic-ai/sdk";
import { business, chatbotFacts } from "../../data/golosea";

const client = new Anthropic({ apiKey: import.meta.env.ANTHROPIC_API_KEY });

const SYSTEM = `Eres el asistente virtual de ${business.name}, una tienda de golosinas en ${business.zona}.
Responde siempre en español, de forma amable y breve (máximo 3 frases cortas).
Solo habla sobre la tienda y sus productos. Si te preguntan algo ajeno al negocio, redirige amablemente.

Lo que sabes sobre la tienda:
${chatbotFacts.map((f) => `- ${f}`).join("\n")}`;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { messages } = await request.json();

    const response = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 300,
      system: SYSTEM,
      messages,
    });

    const reply =
      response.content[0].type === "text" ? response.content[0].text : "";

    return new Response(JSON.stringify({ reply }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(
      JSON.stringify({
        reply: `Lo siento, ahora mismo no puedo responder. Llámanos al ${business.phone}.`,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
