export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "luvera.club - Smart skincare, tailored for you.",
  description: "Welcome to Luvera.club, your personal skincare companion! Our platform provides personalized skincare recommendations based on AI-powered skin analysis.",
  navItems: [
    {
      label: "home",
      href: "/",
    },
    {
      label: "about",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
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
      label: "Calendar",
      href: "/calendar",
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
    github: "https://github.com/dylantonthat/luvera",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
  },
};
