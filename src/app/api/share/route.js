import { kv } from "@vercel/kv";
import { nanoid } from "nanoid";

const corsHeaders = {
  // You can replace "*" with "chrome-extension://<your-extension-id>" if you want to restrict it
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}

export async function POST(req) {
  try {
    const body = await req.json();
    const tabs = body?.tabs;

    if (!Array.isArray(tabs) || tabs.length === 0) {
      return new Response("Invalid tabs", {
        status: 400,
        headers: corsHeaders,
      });
    }

    const id = nanoid(8);
    await kv.set(`tabs:${id}`, JSON.stringify(tabs), {
      ex: 60 * 60 * 24 * 7, // 7 days
    });

    return new Response(JSON.stringify({ id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (err) {
    console.error("POST /api/share error:", err);
    return new Response("Server error", {
      status: 500,
      headers: corsHeaders,
    });
  }
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
