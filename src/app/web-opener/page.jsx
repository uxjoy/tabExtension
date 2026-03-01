"use client";

import { Info } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const WEB_STORE_URL =
  "https://chromewebstore.google.com/detail/lfchodlbelcpndbaebikoneaabddhofk?utm_source=item-share-cb";

export default function WebOpenerPage() {
  const [tabs, setTabs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        if (typeof window === "undefined") return;

        const url = new URL(window.location.href);
        const searchParams = url.searchParams;
        const hash = window.location.hash.startsWith("#")
          ? window.location.hash.substring(1)
          : "";
        const hashParams = new URLSearchParams(hash);

        // 1) Prefer short id-based links: ?id=... or #id=...
        const id = searchParams.get("id") ?? hashParams.get("id");
        if (id) {
          const res = await fetch(`/api/share?id=${encodeURIComponent(id)}`);
          if (!res.ok) {
            throw new Error("Shared tabs not found.");
          }
          const data = await res.json();
          const fetchedTabs = Array.isArray(data.tabs) ? data.tabs : [];
          if (!fetchedTabs.length) {
            throw new Error("No tabs found for this link.");
          }
          setTabs(fetchedTabs);
          setLoading(false);
          return;
        }

        // 2) Fallback: legacy #data=... base64 mode
        const encodedData = hashParams.get("data") ?? searchParams.get("data");

        if (!encodedData) {
          throw new Error("No tab data found in the link.");
        }

        let jsonString;
        try {
          jsonString = decodeURIComponent(atob(encodedData));
        } catch (e) {
          throw new Error("Invalid encoded data in link.");
        }

        let decoded;
        try {
          decoded = JSON.parse(jsonString);
        } catch (e) {
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
    }

    load();
  }, []);

  const openAllTabs = () => {
    if (!tabs.length || typeof document === "undefined") return;

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
      const text = tabs
        .map((t, i) => `${i + 1}. ${t.title || t.url}\n${t.url}`)
        .join("\n\n");

      await navigator.clipboard.writeText(text);
      setMessage("Copied all links to clipboard.");
    } catch (e) {
      console.error("Clipboard error:", e);
      setMessage("Could not copy links (clipboard blocked).");
    }
  };

  return (
    <main className="min-h-screen flex flex-col gap-6 items-center justify-center bg-neutral-900 px-4 py-6">
      <div className="w-full max-w-xl rounded-4xl bg-white shadow-2xl p-6 md:p-8">
        <header className="mb-8 flex flex-col items-center justify-center text-center relative pt-8">
          <svg
            className="w-24 h-24 absolute -top-22 left-1/2 transform -translate-x-1/2 rounded-full border-8 border-neutral-950"
            width="96"
            height="96"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_41_40)">
              <rect
                width="96"
                height="96"
                rx="28"
                fill="url(#paint0_linear_41_40)"
              />
              <path
                d="M28.4969 48.9484L27.6339 50.9283C27.0023 52.3777 24.9975 52.3777 24.3659 50.9283L23.503 48.9484C21.9647 45.4181 19.1941 42.6074 15.7368 41.0698L13.0782 39.8873C11.6406 39.2479 11.6406 37.1558 13.0782 36.5164L15.5882 35.4C19.1343 33.8228 21.9546 30.9081 23.4664 27.2579L24.3526 25.1184C24.9702 23.6272 27.0296 23.6272 27.6472 25.1184L28.5334 27.2579C30.0452 30.9081 32.8655 33.8228 36.4118 35.4L38.9216 36.5164C40.3595 37.1558 40.3595 39.2479 38.9216 39.8873L36.263 41.0698C32.8058 42.6074 30.0351 45.4181 28.4969 48.9484ZM22.7226 99.6462C26.3099 77.977 34.0887 30.988 85.5 30.988C80.2647 41.488 76.75 46.738 73.25 50.238L69.75 53.738L75 57.238C71.5 67.7381 61 79.9881 47 81.7381C37.6601 82.9053 31.8247 89.3223 29.4938 100.988H22.5C22.5726 100.553 22.6466 100.105 22.7226 99.6462Z"
                fill="#173E08"
              />
            </g>
            <rect
              x="0.5"
              y="0.5"
              width="95"
              height="95"
              rx="27.5"
              stroke="white"
              stroke-opacity="0.72"
            />
            <defs>
              <linearGradient
                id="paint0_linear_41_40"
                x1="0"
                y1="0"
                x2="96"
                y2="96"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.2" stop-color="#D9F99D" />
                <stop offset="1" stop-color="#84CC16" />
              </linearGradient>
              <clipPath id="clip0_41_40">
                <rect width="96" height="96" rx="28" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <h1 className="text-2xl font-bold text-neutral-900 flex items-center gap-2">
            {/* <span>🔗 TabShare</span> */}
            <span>Copy All Open Tab URLs – TabShare</span>
          </h1>
          {/* <p className="mt-1 text-sm text-neutral-600">Open the tabs someone shared with you. No extension required.</p> */}

          <Link
            href={WEB_STORE_URL}
            target="_blank"
            className="flex items-center gap-1.5 font-medium mt-4 p-2 pr-3 rounded-full bg-linear-to-r from-neutral-900 to-lime-700 text-white text-sm shadow-lg transition hover:shadow-xl hover:brightness-120"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0002 14.6364C12.5611 14.6364 14.637 12.5604 14.637 9.99948C14.637 7.4386 12.5611 5.36255 10.0002 5.36255C7.43936 5.36255 5.36331 7.4386 5.36331 9.99948C5.36331 12.5604 7.43929 14.6364 10.0002 14.6364"
                fill="white"
              />
              <path
                d="M4.0033 7.721C3.65738 7.12182 3.25078 6.49298 2.78351 5.83447C2.05197 7.10123 1.66683 8.53826 1.66681 10.0011C1.66678 11.4639 2.05188 12.9009 2.78336 14.1677C3.51485 15.4345 4.56696 16.4864 5.8339 17.2176C7.10084 17.9488 8.53797 18.3336 10.0008 18.3333C10.7678 17.2575 11.2885 16.4819 11.563 16.0064C12.0903 15.0932 12.7722 13.7856 13.6088 12.0838V12.0829C13.2433 12.7165 12.7174 13.2428 12.084 13.6088C11.4506 13.9747 10.732 14.1674 10.0005 14.1675C9.26896 14.1676 8.5503 13.9751 7.91678 13.6094C7.28326 13.2436 6.75721 12.7175 6.39152 12.084C5.25532 9.96495 4.45925 8.51059 4.0033 7.721Z"
                fill="#229342"
              />
              <path
                d="M10.0006 18.3333C11.095 18.3335 12.1786 18.118 13.1897 17.6993C14.2008 17.2806 15.1195 16.6668 15.8934 15.8929C16.6672 15.119 17.281 14.2003 17.6996 13.1892C18.1183 12.1781 18.3337 11.0944 18.3334 9.99998C18.3331 8.53715 17.9477 7.10018 17.216 5.8335C15.6374 5.6779 14.4723 5.6001 13.7208 5.6001C12.8688 5.6001 11.6285 5.6779 10 5.8335L9.99908 5.83415C10.7306 5.83379 11.4494 6.02606 12.083 6.39162C12.7167 6.75719 13.2429 7.28316 13.6087 7.91664C13.9746 8.55012 14.1672 9.26877 14.1672 10.0003C14.1672 10.7319 13.9746 11.4505 13.6087 12.084L10.0006 18.3333Z"
                fill="#FBC116"
              />
              <path
                d="M10.0002 13.2993C11.8221 13.2993 13.299 11.8224 13.299 10.0005C13.299 8.17855 11.8221 6.70166 10.0002 6.70166C8.17834 6.70166 6.70139 8.17862 6.70139 10.0005C6.70139 11.8224 8.17834 13.2993 10.0002 13.2993Z"
                fill="#1A73E8"
              />
              <path
                d="M10.0002 5.83371H17.2162C16.485 4.56675 15.4331 3.51464 14.1663 2.78317C12.8995 2.05169 11.4624 1.66665 9.99959 1.66675C8.53676 1.66685 7.09975 2.05209 5.83304 2.78373C4.56633 3.51537 3.51458 4.56763 2.78354 5.83469L6.39156 12.0841L6.39253 12.0846C6.02649 11.4512 5.83366 10.7326 5.83344 10.0011C5.83323 9.26956 6.02563 8.55086 6.39131 7.91728C6.75698 7.2837 7.28304 6.75757 7.91656 6.39181C8.55009 6.02604 9.26876 5.83353 10.0003 5.83364L10.0002 5.83371Z"
                fill="#E33B2E"
              />
            </svg>

            <span>Add to Chrome</span>
          </Link>
        </header>

        {loading && !error && (
          <p className="text-sm text-neutral-500">Loading shared tabs…</p>
        )}

        {error && (
          <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {/* <p className="font-semibold">Error</p> */}
            <p className="text-lg font-semibold">{error}</p>
            <p className="text-neutral-800">
              Make sure you opened the full link that was shared with you.
            </p>
          </div>
        )}

        {/* If link available */}
        {!error && tabs.length > 0 && (
          <div className="space-y-5">
            <div className="max-h-72 overflow-y-auto rounded-xl bg-neutral-50 border border-neutral-200 mb-6">
              {tabs.map((tab, i) => (
                <Link
                  key={i}
                  href={tab.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start justify-between gap-6 break-all text-sm text-neutral-700 hover:underline px-4 py-3 border-b last:border-0 border-neutral-200 hover:bg-neutral-100 hover:text-neutral-900 no-underline! hover:pl-5 transition-all"
                >
                  <span className="flex-1">
                    {i + 1}. {tab.title || tab.url}
                  </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right w-4 h-4 ml-1 inline-block text-lime-500"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M17 7l-10 10" />
                    <path d="M8 7l9 0l0 9" />
                  </svg>
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {/* <button
                onClick={copyLinks}
                className="flex-1 min-w-[140px] inline-flex items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm font-semibold text-neutral-800 hover:bg-neutral-100"
              >
                📋 Copy Links
              </button> */}
              <button
                onClick={openAllTabs}
                className="flex-1 inline-flex items-center justify-center rounded-full bg-linear-to-r from-lime-500 to-indigo-500 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:shadow-xl hover:brightness-105 cursor-pointer"
              >
                ✨ Open All {tabs.length} Tabs
              </button>
            </div>

            <p className="text-xs text-center text-neutral-600 px-6 italic">
              Tip: If only one tab opens, your browser is probably{" "}
              <span className="font-semibold text-rose-500">
                blocking pop-ups
              </span>
              . Please allow pop-ups for{" "}
              <span className="font-mono text-neutral-900 font-semibold">
                tabshareurl.vercel.app
              </span>{" "}
              and try again.
            </p>
          </div>
        )}

        {message && (
          <div className="w-full text-center mt-3">
            <p className="mt-3 inline-flex items-center justify-center gap-1 text-center border border-amber-500 rounded-full bg-amber-50 p-2 text-xs text-amber-600 font-semibold">
              <Info className="inline-block w-4 h-4" />
              <span> {message}</span>
            </p>
          </div>
        )}
      </div>

      <Link
        href="/"
        className="bg-linear-to-r from-lime-300 to-lime-600 text-transparent bg-clip-text hover:underline underline-offset-2 p-2 transition hover:brightness-110"
      >
        Go to Website
      </Link>
    </main>
  );
}
