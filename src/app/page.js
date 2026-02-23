import { CheckCircle, Copy, File, Layers, Zap } from "lucide-react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
      <nav className="border-b border-neutral-700 bg-neutral-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_33_13)">
                <rect width="48" height="48" rx="12" fill="url(#paint0_linear_33_13)" />
                <path
                  d="M14.2484 24.4742L13.8169 25.4641C13.5011 26.1889 12.4987 26.1889 12.183 25.4641L11.7515 24.4742C10.9824 22.7091 9.59704 21.3037 7.86842 20.5349L6.53908 19.9436C5.82031 19.6239 5.82031 18.5779 6.53908 18.2582L7.7941 17.7C9.56716 16.9114 10.9773 15.454 11.7332 13.6289L12.1763 12.5592C12.4851 11.8136 13.5148 11.8136 13.8236 12.5592L14.2667 13.6289C15.0226 15.454 16.4328 16.9114 18.2059 17.7L19.4608 18.2582C20.1797 18.5779 20.1797 19.6239 19.4608 19.9436L18.1315 20.5349C16.4029 21.3037 15.0175 22.7091 14.2484 24.4742ZM11.3613 49.8231C13.1549 38.9885 17.0443 15.494 42.75 15.494C40.1323 20.744 38.375 23.369 36.625 25.119L34.875 26.869L37.5 28.619C35.75 33.8691 30.5 39.994 23.5 40.869C18.8301 41.4527 15.9124 44.6611 14.7469 50.494H11.25C11.2863 50.2763 11.3233 50.0525 11.3613 49.8231Z"
                  fill="#173E08"
                />
              </g>
              <defs>
                <linearGradient id="paint0_linear_33_13" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                  <stop offset="0.2" stop-color="#D9F99D" />
                  <stop offset="1" stop-color="#84CC16" />
                </linearGradient>
                <clipPath id="clip0_33_13">
                  <rect width="48" height="48" rx="12" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <h1 className="text-2xl font-bold bg-linear-to-r from-lime-200 to-lime-300 bg-clip-text text-transparent">
              TabShare
            </h1>
          </div>

          <Link href="/privacy-policy" className=" text-neutral-400 hover:text-lime-300 transition">
            Privacy Policy
          </Link>

          {/* <button className="bg-lime-600 hover:bg-lime-700 transition px-6 py-2 rounded-lg font-semibold">
            Add to Chrome
          </button> */}
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-20 space-y-20">
        {/* Hero Section */}
        <section className="text-left">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Copy All Open Tab URLs –
            <span className="bg-linear-to-r from-lime-300 to-lime-300 bg-clip-text text-transparent">TabShare</span>
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mb-8 leading-relaxed">
            Copy and organize your open Chrome tabs. Auto-group by domain and copy selected tab URLs in seconds.
          </p>
          {/* <p className="text-lg text-neutral-400 max-w-2xl">
            If you frequently copy multiple tabs for research, documentation, sharing links, or organizing browsing
            sessions, this tool saves time and eliminates manual copying.
          </p> */}
        </section>

        <div className="w-full h-px bg-neutral-700/50 "></div>

        {/* Description */}
        <section className="space-y-4">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold flex items-center gap-3">
              <File className="w-8 h-8 text-lime-300" />
              Description
            </h3>
          </div>
          <p className="text-neutral-300 leading-relaxed">
            **TabShare** lets you copy open tab URLs in Chrome quickly and efficiently.
            <br />
            Select one tab or multiple tabs, br group Chrome tabs automatically by domain, and copy grouped tab URLs in
            a clean format with one click.
            <br />
            If you frequently copy multiple tabs for research, documentation, sharing links, or organizing browsing
            sessions, this tool saves time and eliminates manual copying.
          </p>
        </section>

        {/* Features Section */}
        <section className="w-full space-y-6">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold flex items-center gap-3">
              <Zap className="w-8 h-8 text-lime-300" />
              Features
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-2">
            {[
              "Copy the active tab URL with one click",
              "Select multiple tabs and copy only what you need",
              "Automatically group tabs by domain",
              "Copy URLs by group",
              "Select specific tabs using checkboxes",
              "Copy all selected links at once",
              "Auto Group to organize your open tabs by domain",
            ].map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-6 rounded-lg bg-neutral-700/30 border border-neutral-600/50 hover:border-lime-300/50 transition group"
              >
                <CheckCircle className="w-6 h-6 text-lime-300 flex-shrink-0 mt-1 group-hover:scale-110 transition" />
                <p className="text-neutral-200 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Ideal For Section */}
        <section className="bg-neutral-700/20 border border-neutral-600/50 rounded-2xl p-12 ">
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Layers className="w-8 h-8 text-lime-300" />
            Ideal For
          </h3>

          <ul className="grid md:grid-cols-2 gap-5">
            {[
              "Save time when sharing multiple links",
              "Avoid manual copy-paste repetition",
              "Research and study sessions",
              "Sharing multiple links via email or chat",
              "Organizing open Chrome tabs",
              "QA and bug reporting with reference links",
              "Managing grouped browsing sessions",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <span className="text-lime-300 font-bold mb-1">→</span>
                <span className="text-neutral-300">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Lightweight Section */}
        <section className="bg-linear-to-r from-lime-300/20 to-lime-300/20 border border-lime-300/30 rounded-2xl p-16">
          <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Copy className="w-8 h-8 text-lime-300" />
            Fast & Lightweight
          </h3>

          <p className="text-lg text-neutral-300 max-w-2xl mb-6 leading-relaxed">
            This extension focuses only on copying and grouping open tabs in Chrome.
          </p>
          <p className="text-neutral-400 mb-8">No unnecessary features. No clutter.</p>
          <p className="text-neutral-300 max-w-2xl font-semibold">
            Whether you're sending links to Slack, email, Notion, Jira, or WhatsApp — TabShare gives you a structured
            list instantly.
          </p>
        </section>

        {/* CTA Section */}
        {/* <section className="text-center">
          <button className="bg-linear-to-r from-lime-300 to-lime-300 hover:from-lime-400 hover:to-lime-400 transition px-10 py-4 rounded-lg font-bold text-lg mb-4 shadow-lg shadow-lime-300/30">
            Add TabShare to Chrome
          </button>
          <p className="text-neutral-400">Free • No Sign-up Required • 100% Privacy</p>
        </section> */}
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-700 bg-neutral-900/50 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-neutral-500 mb-4">© 2026 TabShare. Built for Chrome lovers.</p>
          <div className="flex justify-center gap-6 text-neutral-400">
            <Link href="/privacy-policy" className="hover:text-lime-500 transition">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
