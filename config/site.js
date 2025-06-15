import { type } from 'os';

export const siteConfig = {
  name: 'Next.js + HeroUI',
  description: 'Make beautiful websites regardless of your design experience.',
  pageRoutes: [
    {
      label: 'Home',
      href: '/',
      type: 1,
    },

    {
      label: 'Digital store',
      href: '/digital-store',
      type: 2,
    },
    {
      label: 'Management rights',
      href: '/rights-management/',
      type: 2,
    },
    {
      label: 'Youtube Monetization',
      href: '/monetization',
      type: 2,
    },
    {
      label: 'Publishing',
      href: '/publishing',
      type: 2,
    },
    {
      label: 'Services',
      href: '/services',
      type: 1,
    },
    {
      label: 'Music distribute',
      href: '/distribute-your-music',
      type: 1,
    },
    {
      label: 'About',
      href: '/about',
      type: 1,
    },
    {
      label: 'Pricing',
      href: '/pricing',
    },
    {
      label: 'Contact',
      href: '/contact',
      type: 1,
    },
  ],
  navMenuItems: [
    {
      label: 'Profile',
      href: '/profile',
    },
    {
      label: 'Dashboard',
      href: '/dashboard',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Team',
      href: '/team',
    },
    {
      label: 'Calendar',
      href: '/calendar',
    },
    {
      label: 'Settings',
      href: '/settings',
    },
    {
      label: 'Help & Feedback',
      href: '/help-feedback',
    },
    {
      label: 'Logout',
      href: '/logout',
    },
  ],
  links: {
    github: 'https://github.com/heroui-inc/heroui',
    twitter: 'https://twitter.com/hero_ui',
    docs: 'https://heroui.com',
    discord: 'https://discord.gg/9b6yyZKmH4',
    sponsor: 'https://patreon.com/jrgarciadev',
  },
};
