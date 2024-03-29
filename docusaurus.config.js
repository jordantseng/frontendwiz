// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const organizationName = 'jordantseng';
const projectName = 'frontendwiz';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FrontendWiz',
  tagline: 'Dinosaurs are cool',

  // Set the production url of your site here
  url: `https://${organizationName}.github.io`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: `/${projectName}/`,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-TW',
    locales: ['zh-TW', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        pages: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
        logo: {
          src: './img/logo-light.svg',
          srcDark: './img/logo-dark.svg',
          style: {
            height: 44,
          },
        },
        items: [
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'John',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/chuan-chih-cheng/',
              },
              {
                label: 'Github',
                href: 'https://github.com/OInVein',
              },
            ],
          },
          {
            title: 'Jordan',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/jordan-tseng/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/jordantseng',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} FrontendWiz, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'KO737BWM40',
        apiKey: 'c32b27b5da575b1a6baa1a943a55f4ca',
        indexName: 'FRONTENDWIZ_INDEX',
        contextualSearch: true,
      },
    }),
};

module.exports = config;
