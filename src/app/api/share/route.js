import { kv } from "@vercel/kv";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // you can later lock this down
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders });
}

export async function POST(req) {
  const body = await req.json();
  const tabs = body?.tabs;

  if (!Array.isArray(tabs) || tabs.length === 0) {
    return new Response("Invalid tabs", { status: 400, headers: corsHeaders });
  }

  // TEMP: just echo tabs back; you can add KV later
  const id = crypto.randomUUID().slice(0, 8);
  return new Response(JSON.stringify({ id, tabs }), {
    status: 200,
    headers: { "Content-Type": "application/json", ...corsHeaders },
  });
}

export async function GET(req) {
  // TEMP: no storage yet, just show an error
  return new Response("Not implemented", {
    status: 501,
    headers: corsHeaders,
  });
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return new Response("Missing id", {
        status: 400,
        headers: corsHeaders,
      });
    }

    const stored = await kv.get(`tabs:${id}`);
    if (!stored) {
      return new Response("Not found", {
        status: 404,
        headers: corsHeaders,
      });
    }

    const tabs = JSON.parse(stored);

    return new Response(JSON.stringify({ id, tabs }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (err) {
    console.error("GET /api/share error:", err);
    return new Response("Server error", {
      status: 500,
      headers: corsHeaders,
    });
  }
}
