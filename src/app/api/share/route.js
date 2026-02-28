const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // later: restrict if you want
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

// Simple in-memory store (not persistent across deploys/restarts)
const store = new Map();

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders });
}

export async function POST(req) {
  try {
    const body = await req.json();
    const tabs = body?.tabs;

    if (!Array.isArray(tabs) || tabs.length === 0) {
      return new Response("Invalid tabs", { status: 400, headers: corsHeaders });
    }

    const id = crypto.randomUUID().slice(0, 8);
    store.set(id, tabs);

    return new Response(JSON.stringify({ id }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
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

    const tabs = store.get(id);
    if (!tabs) {
      return new Response("Not found", {
        status: 404,
        headers: corsHeaders,
      });
    }

    return new Response(JSON.stringify({ id, tabs }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (err) {
    console.error("GET /api/share error:", err);
    return new Response("Server error", {
      status: 500,
      headers: corsHeaders,
    });
  }
}
