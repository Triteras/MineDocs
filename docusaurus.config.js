// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const organizationName = "Triteras";
const projectName = "MineDocs";
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Triteras Minecraft",
  tagline: "Bem-vindo a documentação oficial do servidor do Triteras Minecraft",
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
          path: "docs",
          routeBasePath: "/",
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
        appId: "S803N8AY5F",
        apiKey: "2a77cc0b2a5f139bd3b04f9c230b2b60",
        indexName: "minetriteras",
        contextualSearch: true,
        externalUrlRegex: "minedocs.triteras\\.com|triteras\\.com",
        rateLimit: 8,
        maxDepth: 10,
        startUrls: ["https://minedocs.triteras.com/"],
        sitemaps: ["https://minedocs.triteras.com/sitemap.xml"],
        ignoreCanonicalTo: true,
        discoveryPatterns: ["https://minedocs.triteras.com/**"],
        actions: [
          {
            indexName: "minetriteras",
            pathsToMatch: ["https://minedocs.triteras.com/**"],
            recordExtractor: ({ $, helpers }) => {
              // priority order: deepest active sub list header -> navbar active item -> 'Documentation'
              const lvl0 =
                $(
                  ".menu__link.menu__link--sublist.menu__link--active, .navbar__item.navbar__link--active"
                )
                  .last()
                  .text() || "Documentation";

              return helpers.docsearch({
                recordProps: {
                  lvl0: {
                    selectors: "",
                    defaultValue: lvl0,
                  },
                  lvl1: ["header h1", "article h1"],
                  lvl2: "article h2",
                  lvl3: "article h3",
                  lvl4: "article h4",
                  lvl5: "article h5, article td:first-child",
                  lvl6: "article h6",
                  content: "article p, article li, article td:last-child",
                },
                indexHeadings: true,
                aggregateContent: true,
                recordVersion: "v3",
              });
            },
          },
        ],
        initialIndexSettings: {
          MINETRITERAS: {
            attributesForFaceting: [
              "type",
              "lang",
              "language",
              "version",
              "docusaurus_tag",
            ],
            attributesToRetrieve: [
              "hierarchy",
              "content",
              "anchor",
              "url",
              "url_without_anchor",
              "type",
            ],
            attributesToHighlight: ["hierarchy", "content"],
            attributesToSnippet: ["content:10"],
            camelCaseAttributes: ["hierarchy", "content"],
            searchableAttributes: [
              "unordered(hierarchy.lvl0)",
              "unordered(hierarchy.lvl1)",
              "unordered(hierarchy.lvl2)",
              "unordered(hierarchy.lvl3)",
              "unordered(hierarchy.lvl4)",
              "unordered(hierarchy.lvl5)",
              "unordered(hierarchy.lvl6)",
              "content",
            ],
            distinct: true,
            attributeForDistinct: "url",
            customRanking: [
              "desc(weight.pageRank)",
              "desc(weight.level)",
              "asc(weight.position)",
            ],
            ranking: [
              "words",
              "filters",
              "typo",
              "attribute",
              "proximity",
              "exact",
              "custom",
            ],
            highlightPreTag:
              '<span class="algolia-docsearch-suggestion--highlight">',
            highlightPostTag: "</span>",
            minWordSizefor1Typo: 3,
            minWordSizefor2Typos: 7,
            allowTyposOnNumericTokens: false,
            minProximity: 1,
            ignorePlurals: true,
            advancedSyntax: true,
            attributeCriteriaComputedByMinProximity: true,
            removeWordsIfNoResults: "allOptional",
            separatorsToIndex: "_",
          },
        },
        replaceSearchResultPathname: {
          from: "/docs/", // or as RegExp: /\/docs\//
          to: "/",
        },
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
