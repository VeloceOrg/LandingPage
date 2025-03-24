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
};
