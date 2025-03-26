import { useState } from "react";
import DefaultLayout from "@/layouts/default";

// Define changelog entry types
type ChangelogEntry = {
  title: string;
  date: string;
  version: string;
  description: string;
  changes: {
    type: "feature" | "improvement" | "fix" | "security" | "breaking";
    text: string;
  }[];
  isPinned?: boolean;
};

export default function ChangelogAlt2Page() {
  // State for filtering and active version
  const [filter, setFilter] = useState<string | null>(null);
  const [activeVersion, setActiveVersion] = useState<string | null>(null);
  
  // Changelog data
  const changelog: ChangelogEntry[] = [
    {
      title: "Global Edge Network",
      date: "March 15, 2025",
      version: "v2.4.0",
      description: "Expanded our global edge network to 30+ regions for faster deployments worldwide.",
      isPinned: true,
      changes: [
        { type: "feature", text: "Added 12 new edge locations across Asia and South America" },
        { type: "feature", text: "Implemented smart routing for optimal performance" },
        { type: "improvement", text: "Reduced cold start times by 40% globally" },
        { type: "improvement", text: "Enhanced DDoS protection across all regions" },
        { type: "fix", text: "Fixed latency issues in Southeast Asia region" },
      ],
    },
    {
      title: "Database Scaling",
      date: "February 28, 2025",
      version: "v2.3.2",
      description: "Improved database scaling and added support for more database engines.",
      changes: [
        { type: "feature", text: "Added support for MongoDB 6.0" },
        { type: "feature", text: "Introduced auto-scaling for PostgreSQL instances" },
        { type: "improvement", text: "Enhanced connection pooling for all database types" },
        { type: "fix", text: "Fixed an issue with Redis persistence configuration" },
        { type: "security", text: "Updated database encryption protocols" },
      ],
    },
    {
      title: "Team Collaboration",
      date: "February 10, 2025",
      version: "v2.3.0",
      description: "Enhanced team collaboration features and permissions management.",
      changes: [
        { type: "feature", text: "Added granular role-based access controls" },
        { type: "feature", text: "Introduced team activity logs" },
        { type: "improvement", text: "Redesigned team invitation flow" },
        { type: "improvement", text: "Enhanced audit logging for team actions" },
        { type: "security", text: "Added two-factor authentication for team admins" },
      ],
    },
    {
      title: "CLI Improvements",
      date: "January 25, 2025",
      version: "v2.2.5",
      description: "Major improvements to the Veloce CLI with new deployment options.",
      changes: [
        { type: "feature", text: "Added `veloce rollback` command for quick rollbacks" },
        { type: "feature", text: "Introduced environment variable management via CLI" },
        { type: "improvement", text: "Faster deployments with parallel processing" },
        { type: "improvement", text: "Enhanced error reporting and suggestions" },
        { type: "fix", text: "Fixed Windows path handling issues" },
      ],
    },
    {
      title: "Monitoring & Alerts",
      date: "January 12, 2025",
      version: "v2.2.0",
      description: "Comprehensive monitoring system with customizable alerts.",
      changes: [
        { type: "feature", text: "Introduced real-time metrics dashboard" },
        { type: "feature", text: "Added customizable alert thresholds" },
        { type: "feature", text: "Integrated with popular notification services" },
        { type: "improvement", text: "Enhanced log search and filtering" },
        { type: "improvement", text: "Added historical performance trends" },
      ],
    },
    {
      title: "Custom Domains",
      date: "December 20, 2024",
      version: "v2.1.0",
      description: "Improved custom domain management with wildcard support.",
      changes: [
        { type: "feature", text: "Added support for wildcard domains" },
        { type: "feature", text: "Introduced automatic DNS verification" },
        { type: "improvement", text: "Faster SSL certificate provisioning" },
        { type: "improvement", text: "Enhanced domain management UI" },
        { type: "fix", text: "Fixed CNAME configuration issues" },
      ],
    },
    {
      title: "Initial Release",
      date: "December 1, 2024",
      version: "v2.0.0",
      description: "The first public release of Veloce deployment platform.",
      changes: [
        { type: "feature", text: "Core deployment functionality" },
        { type: "feature", text: "Support for Node.js, Python, and Go" },
        { type: "feature", text: "Basic monitoring and logging" },
        { type: "feature", text: "Custom domain support" },
        { type: "feature", text: "Team collaboration" },
      ],
    },
  ];

  // Filter changelog entries
  const filteredChangelog = filter
    ? changelog.filter(entry => 
        entry.changes.some(change => change.type === filter)
      )
    : changelog;

  // Set first version as active if none selected
  if (!activeVersion && filteredChangelog.length > 0) {
    setActiveVersion(filteredChangelog[0].version);
  }

  // Get active entry
  const activeEntry = filteredChangelog.find(entry => entry.version === activeVersion) || filteredChangelog[0];

  return (
    <DefaultLayout>
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full text-sm font-medium mb-4">
            Product Updates
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Veloce Changelog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Track our progress as we improve the platform.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === null
                ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            All Updates
          </button>
          <button
            onClick={() => setFilter("feature")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === "feature"
                ? "bg-primary-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            Features
          </button>
          <button
            onClick={() => setFilter("improvement")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === "improvement"
                ? "bg-secondary-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            Improvements
          </button>
          <button
            onClick={() => setFilter("fix")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === "fix"
                ? "bg-amber-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            Fixes
          </button>
          <button
            onClick={() => setFilter("security")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === "security"
                ? "bg-green-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            Security
          </button>
        </div>

        {/* Split view layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
          {/* Version list sidebar */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 h-fit lg:sticky lg:top-24">
            <h2 className="text-lg font-semibold mb-4 px-2">Releases</h2>
            <div className="space-y-1 max-h-[500px] overflow-y-auto pr-1">
              {filteredChangelog.map((entry) => (
                <button
                  key={entry.version}
                  onClick={() => setActiveVersion(entry.version)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                    activeVersion === entry.version
                      ? "bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300"
                      : "hover:bg-gray-50 dark:hover:bg-gray-700/50"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="font-medium">{entry.title}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{entry.date}</span>
                  </div>
                  <div className={`text-xs px-2 py-1 rounded-full ${
                    activeVersion === entry.version
                      ? "bg-primary-100 dark:bg-primary-800/30 text-primary-700 dark:text-primary-300"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  }`}>
                    {entry.version}
                  </div>
                </button>
              ))}
            </div>
            
            {/* Email subscription in sidebar */}
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-sm font-semibold mb-2">Stay Updated</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                Get notified about new releases.
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button
                  type="submit"
                  className="w-full px-3 py-2 text-sm bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          {/* Main content area */}
          {activeEntry && (
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              {/* Release header */}
              <div className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-750 border-b border-gray-200 dark:border-gray-700 p-6">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <h2 className="text-2xl font-bold">{activeEntry.title}</h2>
                      {activeEntry.isPinned && (
                        <span className="px-2.5 py-0.5 text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300 rounded-full">
                          Latest
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Released on {activeEntry.date}
                    </p>
                  </div>
                  <span className="px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-700 rounded-full">
                    {activeEntry.version}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  {activeEntry.description}
                </p>
              </div>
              
              {/* Changes list */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Changes</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Group changes by type */}
                  {(["feature", "improvement", "fix", "security", "breaking"] as const).map(type => {
                    const changesOfType = activeEntry.changes.filter(change => change.type === type);
                    if (changesOfType.length === 0) return null;
                    
                    return (
                      <div key={type} className="col-span-1">
                        <h4 className={`text-sm font-medium mb-3 flex items-center ${
                          type === "feature" 
                            ? "text-primary-600 dark:text-primary-400" 
                            : type === "improvement"
                            ? "text-secondary-600 dark:text-secondary-400"
                            : type === "fix"
                            ? "text-amber-600 dark:text-amber-400"
                            : type === "security"
                            ? "text-green-600 dark:text-green-400"
                            : "text-red-600 dark:text-red-400"
                        }`}>
                          <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full mr-2 ${
                            type === "feature" 
                              ? "bg-primary-100 dark:bg-primary-900/30" 
                              : type === "improvement"
                              ? "bg-secondary-100 dark:bg-secondary-900/30"
                              : type === "fix"
                              ? "bg-amber-100 dark:bg-amber-900/30"
                              : type === "security"
                              ? "bg-green-100 dark:bg-green-900/30"
                              : "bg-red-100 dark:bg-red-900/30"
                          }`}>
                            {type === "feature" ? "+" : 
                             type === "improvement" ? "↑" : 
                             type === "fix" ? "✓" : 
                             type === "security" ? "🛡️" : "!"}
                          </span>
                          {type.charAt(0).toUpperCase() + type.slice(1)}s
                        </h4>
                        
                        <ul className="space-y-2">
                          {changesOfType.map((change, i) => (
                            <li key={i} className="flex items-start p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                              <span className="text-gray-700 dark:text-gray-300">{change.text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Navigation between versions */}
              <div className="border-t border-gray-200 dark:border-gray-700 p-4 flex justify-between">
                {filteredChangelog.findIndex(e => e.version === activeEntry.version) < filteredChangelog.length - 1 && (
                  <button 
                    onClick={() => {
                      const currentIndex = filteredChangelog.findIndex(e => e.version === activeEntry.version);
                      if (currentIndex < filteredChangelog.length - 1) {
                        setActiveVersion(filteredChangelog[currentIndex + 1].version);
                      }
                    }}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 flex items-center"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                    Older
                  </button>
                )}
                
                <div className="flex-grow"></div>
                
                {filteredChangelog.findIndex(e => e.version === activeEntry.version) > 0 && (
                  <button 
                    onClick={() => {
                      const currentIndex = filteredChangelog.findIndex(e => e.version === activeEntry.version);
                      if (currentIndex > 0) {
                        setActiveVersion(filteredChangelog[currentIndex - 1].version);
                      }
                    }}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 flex items-center"
                  >
                    Newer
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </DefaultLayout>
  );
} 