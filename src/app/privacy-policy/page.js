import { ArrowLeft, Shield } from "lucide-react";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
      {/* Navigation */}
      <nav className="border-b border-neutral-700 bg-neutral-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <ArrowLeft className="w-5 h-5" />
            <h1 className="text-2xl font-bold bg-linear-to-r from-lime-200 to-lime-300 bg-clip-text text-transparent">
              TabShare
            </h1>
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-lime-300" />
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-neutral-400">
            <strong>Effective Date:</strong> February 23, 2026
          </p>
        </section>

        {/* Intro */}
        <section className="mb-8 text-neutral-300 leading-relaxed">
          <p>
            Copy All Open Tab URLs – TabShare ("the Extension") respects your privacy. This Privacy Policy explains how
            information is handled when you use the Extension.
          </p>
        </section>

        {/* Content */}
        <article className="space-y-8">
          {/* No Data Collection */}
          <section>
            <h2 className="text-2xl font-bold text-lime-300 mb-4">1. No Data Collection</h2>
            <p className="text-neutral-300 leading-relaxed">
              The Extension does not collect, store, transmit, or sell any personal information or user data.
            </p>
          </section>

          {/* Local Data Processing */}
          <section>
            <h2 className="text-2xl font-bold text-lime-300 mb-4">2. Local Data Processing</h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              The Extension accesses open tab titles and URLs solely to allow users to:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-neutral-300">
                <span className="text-lime-300 font-bold mt-1">•</span>
                <span>Select open tabs</span>
              </li>
              <li className="flex gap-3 text-neutral-300">
                <span className="text-lime-300 font-bold mt-1">•</span>
                <span>Group tabs by domain</span>
              </li>
              <li className="flex gap-3 text-neutral-300">
                <span className="text-lime-300 font-bold mt-1">•</span>
                <span>Copy selected tab URLs</span>
              </li>
            </ul>
            <p className="text-neutral-300 leading-relaxed mt-4">
              All processing occurs locally within the user's browser. No tab information is transmitted to any external
              server.
            </p>
          </section>

          {/* No Third-Party Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-lime-300 mb-4">3. No Third-Party Sharing</h2>
            <p className="text-neutral-300 leading-relaxed">
              The Extension does not share data with third parties. It does not use analytics services, tracking tools,
              or remote logging.
            </p>
          </section>

          {/* No Remote Code */}
          <section>
            <h2 className="text-2xl font-bold text-lime-300 mb-4">4. No Remote Code</h2>
            <p className="text-neutral-300 leading-relaxed">
              All code required for the Extension to function is packaged within the extension bundle. The Extension
              does not load or execute remote scripts.
            </p>
          </section>

          {/* Permissions */}
          <section>
            <h2 className="text-2xl font-bold text-lime-300 mb-4">5. Permissions</h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              The Extension uses the following Chrome permissions:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-neutral-300">
                <span className="text-lime-300 font-bold mt-1">•</span>
                <span>
                  <strong>tabs</strong> – To read open tab titles and URLs so users can select and copy them.
                </span>
              </li>
              <li className="flex gap-3 text-neutral-300">
                <span className="text-lime-300 font-bold mt-1">•</span>
                <span>
                  <strong>tabGroups</strong> – To create and manage tab groups when the user activates auto-grouping.
                </span>
              </li>
            </ul>
            <p className="text-neutral-400 text-sm mt-4">
              These permissions are used strictly to provide the extension's stated functionality.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section>
            <h2 className="text-2xl font-bold text-lime-300 mb-4">6. Changes to This Policy</h2>
            <p className="text-neutral-300 leading-relaxed">
              This Privacy Policy may be updated if the Extension's functionality changes. Any updates will be reflected
              on this page.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-neutral-700/20 border border-neutral-600/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-lime-300 mb-4">7. Contact</h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              If you have any questions regarding this Privacy Policy, please contact:
            </p>
            <p className="text-neutral-300 font-semibold">sohanoor404@gmail.com</p>
          </section>

          {/* Footer Section */}
          <section className="bg-lime-300/10 border border-lime-300/30 rounded-lg p-6 text-center">
            <p className="text-neutral-300">© 2026 Copy All Open Tab URLs – TabShare</p>
          </section>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-700 bg-neutral-900/50 mt-24 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center text-neutral-500">
          <p>© 2026 TabShare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
