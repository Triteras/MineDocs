// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const organizationName = "Triteras";
const projectName = "MineDocs";
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// TODO: Wait for docusaurus typescript support
/** @type {import('@docusaurus/types').PluginConfig} */
const searchLocalPlugin = [
  require.resolve("@easyops-cn/docusaurus-search-local"),
  /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
  // @ts-ignore
  ({
    hashed: true,
    language: "pt",
  }),
];

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
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
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
            docId: "inicio/bemvindo",
            position: "left",
            label: "Documentação",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/Triteras/MineDocs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Documentação",
            items: [
              {
                label: "Documentação do Servidor",
                to: "docs/inicio/bemvindo",
              },
            ],
          },
          {
            title: "Comunidade",
            items: [
              {
                label: "Discord Minecraft em Português",
                href: "https://discordapp.com/invite/A2mzgJgrmj",
              },
              {
                label: "Discord Triteras",
                href: "https://discordapp.com/invite/AEAPmS3gjg",
              },
            ],
          },
          {
            title: "Mais",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Triteras`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  themes: [searchLocalPlugin],
};

module.exports = config;
