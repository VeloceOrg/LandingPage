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
      label: "Blog",
      href: "/blog",
    }
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
    github: "https://github.com/veloce",
    twitter: "https://twitter.com/veloce",
    docs: "https://docs.veloce.dev",
  },
};
