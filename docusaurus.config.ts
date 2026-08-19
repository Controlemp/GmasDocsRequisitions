import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Manual Portal de Requisiciones',
  tagline: 'Guia funcional por rol',
  favicon: 'img/favicon.ico',

  future: {
    v4: true
  },

  url: 'https://manual-requisiciones.local',
  baseUrl: '/',

  organizationName: 'grupomas',
  projectName: 'gmas-docs-requisitions',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn'
    }
  },

  i18n: {
    defaultLocale: 'es',
    locales: ['es']
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts'
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css'
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true
    },
    navbar: {
      title: 'Portal de Requisiciones',
      logo: {
        alt: 'Portal de Requisiciones',
        src: 'img/logo.svg'
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'manualSidebar',
          position: 'left',
          label: 'Manual de Usuario'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Manual',
          items: [
            {
              label: 'Inicio',
              to: '/docs/intro'
            },
            {
              label: 'Flujo General',
              to: '/docs/manual/flujo-general'
            }
          ]
        },
        {
          title: 'Roles',
          items: [
            {
              label: 'Administrador',
              to: '/docs/manual/administrador'
            },
            {
              label: 'Operativo',
              to: '/docs/manual/operativo'
            },
            {
              label: 'Integracion BC',
              to: '/docs/manual/integrador-dynamics'
            }
          ]
        },
        {
          title: 'Proceso',
          items: [
            {
              label: 'Estados',
              to: '/docs/manual/estados'
            },
            {
              label: 'Preguntas Frecuentes',
              to: '/docs/manual/preguntas-frecuentes'
            }
          ]
        }
      ],
      copyright: `Copyright Â© ${new Date().getFullYear()} GrupoMas. Manual Portal de Requisiciones.`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    }
  } satisfies Preset.ThemeConfig
};

export default config;

