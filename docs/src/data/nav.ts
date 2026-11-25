export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const docsNav: NavSection[] = [
  {
    title: 'Overview',
    items: [
      {
        title: 'Getting Started',
        href: '/guide/getting-started',
        description: 'Introduction to PMM and core concepts',
      },
      {
        title: 'Installation',
        href: '/guide/installation',
        description: 'Install PMM on Windows, macOS, and Linux',
      },
    ],
  },
  {
    title: 'Reference',
    items: [
      {
        title: 'CLI Commands',
        href: '/guide/commands',
        description: 'Commands, flags, and usage examples',
      },
    ],
  },
];

export const flatDocsNav: NavItem[] = docsNav.flatMap((section) => section.items);

export const GITHUB_REPO = 'https://github.com/j00shi/pmm';
