"use client";

import { useEffect, useState } from "react";

export default function WebOpenerPage() {
  const [tabs, setTabs] = useState([]);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    try {
      if (typeof window === "undefined") return;

      // Support both hash (#data=...) and query (?data=...)
      const hash = window.location.hash.startsWith("#") ? window.location.hash.substring(1) : "";
      const hashParams = new URLSearchParams(hash);
      const searchParams = new URLSearchParams(window.location.search);

      const encodedData = hashParams.get("data") ?? searchParams.get("data");

      if (!encodedData) {
        throw new Error("No tab data found in the link.");
      }

      const decoded = JSON.parse(atob(encodedData));
      if (!Array.isArray(decoded)) {
        throw new Error("Invalid tab data format.");
      }

      const cleaned = decoded.filter((t) => t && typeof t.url === "string");
      setTabs(cleaned);
    } catch (e) {
      console.error(e);
      setError(e?.message || "Failed to load shared tabs.");
    }
  }, []);

  const openAllTabs = () => {
    if (!tabs.length || typeof window === "undefined") return;

    tabs.forEach((tab) => {
      if (!tab.url) return;
      window.open(tab.url, "_blank");
    });

    setMessage(`Opening ${tabs.length} tabs...`);
  };

  const copyLinks = async () => {
    if (!tabs.length || typeof navigator === "undefined") return;

    const text = tabs.map((t, i) => `${i + 1}. ${t.title || t.url}\n${t.url}`).join("\n\n");

    await navigator.clipboard.writeText(text);
    setMessage("Copied all links to clipboard.");
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg,#667eea,#764ba2)",
        padding: 20,
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: 12,
          maxWidth: 600,
          width: "100%",
          padding: 32,
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        }}
      >
        <h1 style={{ fontSize: 28, marginBottom: 8 }}>🔗 TabShare</h1>
        <p style={{ color: "#666", marginBottom: 24 }}>Your shared tabs are ready to open.</p>

        {error && (
          <div
            style={{
              background: "#fee",
              color: "#c00",
              padding: 12,
              borderRadius: 8,
              marginBottom: 16,
              borderLeft: "4px solid #c00",
            }}
          >
            {error}
          </div>
        )}

        {!error && !tabs.length && <p style={{ color: "#999" }}>Loading shared tabs…</p>}

        {tabs.length > 0 && (
          <>
            <div
              style={{
                maxHeight: 260,
                overflowY: "auto",
                marginBottom: 24,
              }}
            >
              {tabs.map((tab, i) => (
                <div
                  key={i}
                  style={{
                    background: "#f9f9f9",
                    padding: 10,
                    marginBottom: 8,
                    borderRadius: 6,
                    borderLeft: "3px solid #667eea",
                  }}
                >
                  <div style={{ fontWeight: 500, marginBottom: 4 }}>
                    {i + 1}. {tab.title || tab.url}
                  </div>
                  <a
                    href={tab.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: 12,
                      color: "#667eea",
                      wordBreak: "break-all",
                      textDecoration: "none",
                    }}
                  >
                    {tab.url}
                  </a>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
              <button
                onClick={openAllTabs}
                style={{
                  flex: 1,
                  padding: "10px 16px",
                  borderRadius: 8,
                  border: "none",
                  background: "linear-gradient(135deg,#667eea,#764ba2)",
                  color: "white",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                ✨ Open All {tabs.length} Tabs
              </button>
              <button
                onClick={copyLinks}
                style={{
                  flex: 1,
                  padding: "10px 16px",
                  borderRadius: 8,
                  border: "1px solid #ddd",
                  background: "#f5f5f5",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                📋 Copy Links
              </button>
            </div>
          </>
        )}

        {message && (
          <div
            style={{
              marginTop: 8,
              fontSize: 13,
              color: "#065f46",
              background: "#d1fae5",
              padding: 8,
              borderRadius: 6,
            }}
          >
            {message}
          </div>
        )}
      </div>
    </main>
  );
}
