// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EmJe',
  tagline: ' ',
  favicon: 'img/emjelogo.ico',

  // Set the production url of your site here
  url: 'https://mjazuly.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'coffee-90', // Usually your GitHub org/user name.
  projectName: 'mjazuly-sites', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: false,
        blog: {
          showReadingTime: true,
          routeBasePath: '/',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          ///editUrl:
            ///'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'mjazuly logo',
          src: 'img/emje-logo-2.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Notes',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/about', label: 'Kenalan', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Notes',
            items: [
              {
                label: 'Indeks KAMI 5.0',
                to: '/docs/category/indeks-kami-50',
              },
            ],
          },
          {
            title: 'Social Media',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/coffee-90',
              },
              {
                label: 'X',
                href: 'https://x.com/emjazuly',
              },
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/mjazuly',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Kenalan',
                to: '/about',
              },
              // {
              //   label: 'GitHub',
              //   href: 'https://github.com/facebook/docusaurus',
              // },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} mjazuly.id. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'php']
      },
    }),
};

export default config;
