export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Veloce",
  description: "Modern, self-hostable deployment platform for developers.",
  navItems: [
    {
      label: "Features",
      href: "/features",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Documentation",
      href: "/docs",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/veloceorg",
    twitter: "https://twitter.com/veloce",
    docs: "https://docs.veloce.dev",
    discord: "https://discord.gg/veloce",
    sponsor: "https://github.com/sponsors/veloceorg",
  },
  footerLinks: [
    {
      title: "Legal",
      links: [
        { label: "Terms", href: "/terms" },
        { label: "Privacy", href: "/privacy" },
      ],
    },
  ],
  legalLinks: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "DMCA Policy", href: "/dmca" },
    { label: "Acceptable Use", href: "/acceptable-use" },
    { label: "DPA", href: "/dpa" },
    { label: "SLA", href: "/sla" },
    { label: "Sub-processors", href: "/sub-processors" },
  ],
};
