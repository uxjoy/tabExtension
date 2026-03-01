import { ArrowLeft, Shield } from "lucide-react";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
      {/* Navigation */}
      <nav className="border-b border-neutral-700 bg-neutral-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
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
          <p className="text-neutral-400 mt-1">
            <strong>Last Updated:</strong> March 1, 2026
          </p>
        </section>

        {/* Intro */}
        <section className="mb-8 text-neutral-300 leading-relaxed">
          <p>
            Copy All Open Tab URLs – TabShare ("the Extension") respects your
            privacy. This Privacy Policy explains how information is handled
            when you use the Extension.
          </p>
        </section>

        {/* Content */}
        <article className="space-y-8">
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-bold text-lime-300 mb-4">
              1. Overview
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              The Extension allows users to copy, group, organize, and
              optionally generate shareable links for open Chrome tabs.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              Core tab management features operate locally within the user's
              browser.
            </p>
          </section>

          {/* Local Data Processing */}
          <section>
            <h2 className="text-2xl font-bold text-lime-300 mb-4">
              2. Local Data Processing
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              The Extension accesses open tab titles and URLs solely to allow
              users to:
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
              <li className="flex gap-3 text-neutral-300">
                <span className="text-lime-300 font-bold mt-1">•</span>
                <span>Generate shareable session links</span>
              </li>
            </ul>
            <p className="text-neutral-300 leading-relaxed mt-4">
              All tab access occurs only when the user opens and interacts with
              the extension.
            </p>
          </section>

          {/* Data Transmission for Share Links */}
          <section>
            <h2 className="text-2xl font-bold text-lime-300 mb-4">
              3. Data Transmission for Share Links
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              When a user chooses to generate a shareable link:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-neutral-300">
                <span className="text-lime-300 font-bold mt-1">•</span>
                <span>
                  Selected tab titles and URLs are transmitted securely to the
                  TabShare server.
                </span>
              </li>
              <li className="flex gap-3 text-neutral-300">
                <span className="text-lime-300 font-bold mt-1">•</span>
                <span>
                  This transmission occurs only after explicit user action.
                </span>
              </li>
              <li className="flex gap-3 text-neutral-300">
                <span className="text-lime-300 font-bold mt-1">•</span>
                <span>
                  No browsing data is transmitted automatically or in the
                  background.
                </span>
              </li>
              <li className="flex gap-3 text-neutral-300">
                <span className="text-lime-300 font-bold mt-1">•</span>
                <span>
                  If the share server is unavailable, the Extension may generate
                  a fully local encoded link that does not transmit data
                  externally.
                </span>
              </li>
            </ul>
          </section>

          {/* Data Storage and Retention */}
          <section>
            <h2 className="text-2xl font-bold text-lime-300 mb-4">
              4. Data Storage and Retention
            </h2>
            <p className="text-neutral-300 leading-relaxed">
              Shared tab data may be temporarily stored on our server to enable
              link retrieval.
            </p>
            <p className="text-neutral-300 leading-relaxed mt-4">
              Data is not sold, rented, or shared with advertisers or third
              parties. Stored share data is automatically deleted after a
              limited retention period.
            </p>
            <p className="text-neutral-300 leading-relaxed mt-4">
              Users may request deletion of shared data by contacting us. The
              Extension does not build user profiles or track browsing history.
            </p>
          </section>

          {/* No Background Tracking */}
          <section>
            <h2 className="text-2xl font-bold text-lime-300 mb-4">
              5. No Background Tracking
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              The Extension does not:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-neutral-300">
                <span className="text-lime-300 font-bold mt-1">•</span>
                <span>Monitor browsing activity</span>
              </li>
              <li className="flex gap-3 text-neutral-300">
                <span className="text-lime-300 font-bold mt-1">•</span>
                <span>Collect browsing history automatically</span>
              </li>
              <li className="flex gap-3 text-neutral-300">
                <span className="text-lime-300 font-bold mt-1">•</span>
                <span>Track visited websites in the background</span>
              </li>
              <li className="flex gap-3 text-neutral-300">
                <span className="text-lime-300 font-bold mt-1">•</span>
                <span>Access tabs without user interaction</span>
              </li>
            </ul>
          </section>

          {/* No Third-Party Advertising or Analytics */}
          <section>
            <h2 className="text-2xl font-bold text-lime-300 mb-4">
              6. No Third-Party Advertising or Analytics
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              The Extension does not use:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-neutral-300">
                <span className="text-lime-300 font-bold mt-1">•</span>
                <span>Advertising networks</span>
              </li>
              <li className="flex gap-3 text-neutral-300">
                <span className="text-lime-300 font-bold mt-1">•</span>
                <span>Tracking pixels</span>
              </li>
              <li className="flex gap-3 text-neutral-300">
                <span className="text-lime-300 font-bold mt-1">•</span>
                <span>Behavioral analytics</span>
              </li>
              <li className="flex gap-3 text-neutral-300">
                <span className="text-lime-300 font-bold mt-1">•</span>
                <span>Cross-site tracking</span>
              </li>
            </ul>
            <p className="text-neutral-300 leading-relaxed mt-4">
              Server infrastructure is used solely for generating shareable
              links.
            </p>
          </section>

          {/* Permissions */}
          <section>
            <h2 className="text-2xl font-bold text-lime-300 mb-4">
              7. Permissions
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              The Extension uses the following Chrome permissions:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-neutral-300">
                <span className="text-lime-300 font-bold mt-1">•</span>
                <span>
                  <strong>tabs</strong> – To read open tab titles and URLs so
                  users can select and copy them.
                </span>
              </li>
              <li className="flex gap-3 text-neutral-300">
                <span className="text-lime-300 font-bold mt-1">•</span>
                <span>
                  <strong>tabGroups</strong> – To create and manage tab groups
                  when the user activates auto-grouping.
                </span>
              </li>
            </ul>
            <p className="text-neutral-400 text-sm mt-4">
              These permissions are used strictly to provide the extension's
              stated functionality.
            </p>
          </section>

          {/* Security */}
          <section>
            <h2 className="text-2xl font-bold text-lime-300 mb-4">
              8. Security
            </h2>
            <p className="text-neutral-300 leading-relaxed">
              All server communication occurs over HTTPS. Reasonable technical
              safeguards are implemented to protect transmitted data.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section>
            <h2 className="text-2xl font-bold text-lime-300 mb-4">
              9. Changes to This Policy
            </h2>
            <p className="text-neutral-300 leading-relaxed">
              This Privacy Policy may be updated if the Extension's
              functionality changes. Any updates will be reflected on this page.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-neutral-700/20 border border-neutral-600/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-lime-300 mb-4">
              {" "}
              Contact Information
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              If you have questions about this Privacy Policy or wish to request
              deletion of shared data, please contact:
            </p>
            <p className="text-neutral-300 font-semibold">
              sohanoor404@gmail.com
            </p>
          </section>

          {/* Footer Section */}
          <section className="bg-lime-300/10 border border-lime-300/30 rounded-lg p-6 text-center">
            <p className="text-neutral-300">
              © 2026 Copy All Open Tab URLs – TabShare
            </p>
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
