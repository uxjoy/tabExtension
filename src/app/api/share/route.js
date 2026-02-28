// app/api/share/route.ts
import { kv } from "@vercel/kv";
import { nanoid } from "nanoid";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // or your exact extension origin
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders });
}

export async function POST(req: Request) {
  const { tabs } = await req.json();
  if (!Array.isArray(tabs) || tabs.length === 0) {
    return new Response("Invalid tabs", { status: 400, headers: corsHeaders });
  }

  const id = nanoid(8);
  await kv.set(`tabs:${id}`, JSON.stringify(tabs), { ex: 60 * 60 * 24 * 7 });

  return Response.json({ id }, { headers: corsHeaders });
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) return new Response("Missing id", { status: 400, headers: corsHeaders });

  const stored = await kv.get<string>(`tabs:${id}`);
  if (!stored) return new Response("Not found", { status: 404, headers: corsHeaders });

  return Response.json({ id, tabs: JSON.parse(stored) }, { headers: corsHeaders });
}