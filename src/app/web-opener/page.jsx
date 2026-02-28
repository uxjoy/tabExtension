"use client";

import { useEffect, useState } from "react";

export default function WebOpenerPage() {
  const [tabs, setTabs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  // Decode data from #data=... (or ?data=...) once on mount
  useEffect(() => {
    try {
      if (typeof window === "undefined") return;

      const hash = window.location.hash.startsWith("#") ? window.location.hash.substring(1) : "";
      const hashParams = new URLSearchParams(hash);
      const searchParams = new URLSearchParams(window.location.search);

      const encodedData = hashParams.get("data") ?? searchParams.get("data");

      if (!encodedData) {
        throw new Error("No tab data found in the link.");
      }

      // Match extension encoding: btoa(encodeURIComponent(JSON))
      let jsonString;
      try {
        jsonString = decodeURIComponent(atob(encodedData));
      } catch {
        throw new Error("Invalid encoded data in link.");
      }

      let decoded;
      try {
        decoded = JSON.parse(jsonString);
      } catch {
        throw new Error("Failed to parse tab data.");
      }

      if (!Array.isArray(decoded)) {
        throw new Error("Invalid tab data format.");
      }

      const cleaned = decoded.filter((t) => t && typeof t.url === "string");

      if (!cleaned.length) {
        throw new Error("No valid tabs found in data.");
      }

      setTabs(cleaned);
    } catch (e) {
      console.error("WebOpener error:", e);
      setError(e?.message || "Failed to load shared tabs.");
    } finally {
      setLoading(false);
    }
  }, []);

  const openAllTabs = () => {
    if (!tabs.length || typeof document === "undefined") return;

    // Use temporary anchors to reduce popup blocking
    tabs.forEach((tab) => {
      if (!tab.url) return;
      const a = document.createElement("a");
      a.href = tab.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      document.body.appendChild(a);
      a.click();
      a.remove();
    });

    setMessage(`Attempting to open ${tabs.length} tabs...`);
  };

  const copyLinks = async () => {
    if (!tabs.length || typeof navigator === "undefined") return;

    try {
      const text = tabs.map((t, i) => `${i + 1}. ${t.title || t.url}\n${t.url}`).join("\n\n");

      await navigator.clipboard.writeText(text);
      setMessage("Copied all links to clipboard.");
    } catch (e) {
      console.error("Clipboard error:", e);
      setMessage("Could not copy links (clipboard blocked).");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-700 px-4 py-6">
      <div className="w-full max-w-3xl rounded-2xl bg-white shadow-2xl p-6 md:p-8">
        <header className="mb-4">
          <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 flex items-center gap-2">
            <span>🔗 TabShare</span>
          </h1>
          <p className="mt-1 text-sm text-slate-600">Open the tabs someone shared with you. No extension required.</p>
        </header>

        {loading && !error && <p className="text-sm text-slate-500">Loading shared tabs…</p>}

        {error && (
          <div className="mb-4 rounded-lg border-l-4 border-red-600 bg-red-50 px-4 py-3 text-sm text-red-800">
            <p className="font-semibold">Error</p>
            <p>{error}</p>
            <p className="mt-1 text-xs text-red-700">Make sure you opened the full link that was shared with you.</p>
          </div>
        )}

        {!error && tabs.length > 0 && (
          <>
            <div className="mb-4 max-h-72 overflow-y-auto rounded-xl bg-slate-50 p-3 space-y-2">
              {tabs.map((tab, i) => (
                <div key={i} className="rounded-lg border-l-4 border-indigo-500 bg-white px-3 py-2 shadow-sm">
                  <div className="text-sm font-medium text-slate-900 mb-0.5">
                    {i + 1}. {tab.title || tab.url}
                  </div>
                  <a
                    href={tab.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all text-xs text-indigo-600 hover:underline"
                  >
                    {tab.url}
                  </a>
                </div>
              ))}
            </div>

            <div className="mb-2 flex flex-wrap gap-3">
              <button
                onClick={openAllTabs}
                className="flex-1 min-w-[140px] inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:shadow-xl hover:brightness-105"
              >
                ✨ Open All {tabs.length} Tabs
              </button>
              <button
                onClick={copyLinks}
                className="flex-1 min-w-[140px] inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-100"
              >
                📋 Copy Links
              </button>
            </div>

            <p className="text-[11px] text-slate-500">
              If only one tab opens, allow pop‑ups for <span className="font-mono">tabshareurl.vercel.app</span> in your
              browser and try again.
            </p>
          </>
        )}

        {message && <div className="mt-3 rounded-md bg-emerald-50 px-3 py-2 text-xs text-emerald-800">{message}</div>}
      </div>
    </main>
  );
}
