// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const organizationName = "Triteras";
const projectName = "MineDocs";
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Triteras Minecraft",
  tagline: "Documentação do Servidor do Triteras Minecraft",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://minedocs.triteras.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onDuplicateRoutes: "throw",
  onBrokenMarkdownLinks: "throw",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "pt-BR",
    locales: ["pt-BR"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        // The application ID provided by Algolia
        appId: "S803N8AY5F",

        // Public API key: it is safe to commit it
        apiKey: "2a77cc0b2a5f139bd3b04f9c230b2b60",

        indexName: "minetriteras",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: "external\\.com|domain\\.com",

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: "/docs/", // or as RegExp: /\/docs\//
          to: "/",
        },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",

        //... other Algolia params
      },
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Início",
        logo: {
          alt: "Triteras Minecraft",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "inicio/bemvindoaotriteras",
            position: "left",
            label: "Documentação",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/Triteras/MineDocs",
            className: "navbar-item-github",
            position: "right",
          },
          {
            href: "https://discordapp.com/invite/A2mzgJgrmj",
            className: "navbar-item-discord",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        // links: [
        //   {
        //     title: "Documentação",
        //     items: [
        //       {
        //         label: "Documentação do Servidor",
        //         to: "docs/inicio/bem-vindo-ao-triteras",
        //       },
        //     ],
        //   },
        //   {
        //     title: "Comunidade",
        //     items: [
        //       {
        //         label: "Discord Minecraft em Português",
        //         href: "https://discordapp.com/invite/A2mzgJgrmj",
        //       },
        //       {
        //         label: "Discord Triteras",
        //         href: "https://discordapp.com/invite/AEAPmS3gjg",
        //       },
        //     ],
        //   },
        //   {
        //     title: "Mais",
        //     items: [
        //       {
        //         label: "Blog",
        //         to: "/blog",
        //       },
        //       {
        //         label: "GitHub",
        //         href: "https://github.com/facebook/docusaurus",
        //       },
        //     ],
        //   },
        // ],
        copyright: `Direitos Autorais © ${new Date().getFullYear()} Triteras`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
