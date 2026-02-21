import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Thomas Prévost',
  tagline: 'Thomas Prévost personal page',
  favicon: 'img/favicon.webp',

  // Set the production url of your site here
  url: 'https://www.thomasarmel.fr',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'thomasarmel', // Usually your GitHub org/user name.
  projectName: 'thomasarmel.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',

  markdown: {
      hooks: {
          onBrokenMarkdownLinks: 'warn'
      }
  },

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
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/'
        },
        blog: false,
        pages: false,
        theme: {
          customCss: './style/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Thomas Prévost',
      logo: {
        alt: 'Logo Caliméro',
        src: 'img/calimero.webp',
      },
      items: [
        {
          href: 'https://github.com/thomasarmel',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  scripts: [
    {
      src: '/js/matomo.js', // chemin relatif au dossier `static`
      async: true,
      defer: true,
    },
    // ou inline :
    /*{
      content: `
        console.log("Script global chargé !");
        // Ton JS ici
      `,
    },*/
  ],
};

export default config;
