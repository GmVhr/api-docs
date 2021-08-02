const YAML = require('yaml');
const fs = require('fs');
const path = require('path');
// const numbersSpec = fs.readFileSync('./specsnumbers.json', 'utf-8');
const phoneNumberLookupSpec = fs.readFileSync('./specs/phoneNumberLookup.json', 'utf-8');
const voiceSpec = fs.readFileSync('./specs/voice.json', 'utf-8');
const messagingSpec = fs.readFileSync('./specs/messaging.json', 'utf-8');
// const messagingInternationalSpec = fs.readFileSync('./specs/messagingInternational.json', 'utf-8');
const webRtcSpec = fs.readFileSync('./specs/webRtc.json', 'utf-8');
const multiFactorAuthSpec = fs.readFileSync('./specs/multiFactorAuth.json', 'utf-8');
const dashSpec = fs.readFileSync('./specs/dash.json', 'utf-8');

module.exports = {
  title: 'Bandwidth API Docs',
  tagline: 'Learn About Bandwidth\'s Product API\'s',
  url: 'https://dev.bandwidth.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'bandwidth', // Usually your GitHub org/user name.
  projectName: 'api-docs', // Usually your repo name.
  themeConfig: {
    image: 'img/bandwidth.png',    // used for meta tag
    colorMode: {
      disableSwitch: false    // for disabling dark mode
    },
    announcementBar: {
      id: 'new_docsite_flag', // Any value that will identify this message.
      content:
        'Welcome to the new home of Bandwidth\'s Developer Documentation. To visit the old docs, <a target="_blank" href="https://dev.bandwidth.com/">click here.</a>',
      backgroundColor: '#FFFFFF', // Defaults to `#fff`.
      textColor: '#079CEE', // Defaults to `#000`.
      isCloseable: false, // Defaults to `true`.
    },
    // this is broken
    // prism: {
    //   additionalLanguages: ['java', 'csharp', 'php', 'ruby'],
    // },
    sidebarCollapsible: true,
    navbar: {
      title: 'Bandwidth',
      hideOnScroll: false,
      logo: {
        alt: 'Bandwidth',
        src: 'img/bandwidth-logo.png',
      },
      items: [{
        to: 'docs',
        activeBasePath: 'docs',
        label: 'Docs',
        position: 'left',
      },{
        label: 'API Reference',
        items: [{
          to: 'numbers-api-reference',
          label: 'Numbers'
        }, {
          to: 'number-lookup-api-reference',
          label: 'Phone Number Lookup'
        },{
          to: 'voice-api-reference',
          label: 'Voice'
        }, {
          to: 'messaging-api-reference',
          label: 'Messaging'
        }, {
          to: 'multifactorauth-api-reference',
          label: 'Multi-Factor Authentication'
        }, {
          to: 'webrtc-api-reference',
          label: 'WebRTC'
        }, {
          to: 'dash-api-reference',
          label: 'DASH'
        }]
      }, {
        href: 'https://github.com/Bandwidth-Samples',
        label: 'Samples',
        position: 'left',
      }]
    },
    footer: {
      style: "dark",
      logo: {
        alt: 'Bandwidth',
        src: 'img/bandwidth-logo-footer.png',
        href: 'https://www.bandwidth.com',
      },
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Guides & Tutorials',
              to: '/docs/',
            }, {
              to: 'changelog',
              activeBasePath: 'changelog',
              label: 'Changelog',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Developer Forum',
              href: 'http://bandwidthdashboard.discussion.community/',
            }
          ],
        },
        {
          title: 'More',
          items: [
            // 'Blog' 404's with no md files in the blog folder
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/Bandwidth',
            }, {
              label: 'Try Sandbox',
              href: 'https://simulator.bandwidth.com/'
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Bandwidth Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebar.js'),
          editUrl:
            'https://github.com/Bandwidth/api-docs/edit/main/site/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/Bandwidth/api-docs/edit/main/site/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  customFields: {
      // numbersSpec: JSON.parse(numbersSpec),
      phoneNumberLookupSpec: JSON.parse(phoneNumberLookupSpec),
      voiceSpec: JSON.parse(voiceSpec),
      messagingSpec: JSON.parse(messagingSpec),
      // messagingInternationalSpec: JSON.parse(messagingInternationalSpec),
      webRTCSpec: JSON.parse(webRtcSpec),
      multiFactorAuthSpec: JSON.parse(multiFactorAuthSpec),
      dashSpec: JSON.parse(dashSpec),
      // CSS Colors
      bwBlue: '#079CEE',
      voicePurple: '#9a59c5',
      messagingGreen: '#00bf8c',
      emergencyOrange: '#ff6f47',
      numbersMaroon: '#652B51',
      white: '#FFFFFF',
      lightBlue: '#E6F5FD',
      grey: '#9C9A9B',
      midnight: '#084f7A',
      black: '#090306',
      redocCodeBackground: '#263238',
    },
    plugins: [path.resolve(__dirname, 'redoc-plugin')],
};
