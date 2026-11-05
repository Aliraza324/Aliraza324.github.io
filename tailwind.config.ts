import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          50: '#FAF8F5',
          100: '#F4EFE6',
          200: '#E8E0D1',
          300: '#D5C9B3',
        },
        ink: {
          DEFAULT: '#141416',
          heading: '#111112',
          body: '#2D2B28',
          muted: '#68645E',
          faint: '#9E988F',
          border: '#E8E2D8',
          borderLight: '#F0EBE1',
        },
        editorial: {
          accent: '#9A3412', // Terracotta ochre
          accentLight: '#FFEDD5',
          accentDark: '#7C2D12',
          emerald: '#065F46',
          emeraldLight: '#D1FAE5',
          navy: '#1E3A8A',
          navyLight: '#DBEAFE',
        },
      },
      fontFamily: {
        serif: [
          'Charter',
          'Bitstream Charter',
          'Sitka Text',
          'Cambria',
          'Georgia',
          'serif',
        ],
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '72ch',
            color: '#2D2B28',
            fontFamily: 'Charter, Cambria, Georgia, serif',
            fontSize: '1.125rem',
            lineHeight: '1.8',
            p: {
              marginBottom: '1.5em',
            },
            h1: {
              color: '#111112',
              fontFamily: 'Charter, Cambria, Georgia, serif',
              fontWeight: '700',
              letterSpacing: '-0.02em',
            },
            h2: {
              color: '#111112',
              fontFamily: 'Charter, Cambria, Georgia, serif',
              fontWeight: '700',
              letterSpacing: '-0.015em',
              marginTop: '2em',
              marginBottom: '0.8em',
              borderBottomWidth: '1px',
              borderBottomColor: '#E8E2D8',
              paddingBottom: '0.4em',
            },
            h3: {
              color: '#111112',
              fontFamily: 'Charter, Cambria, Georgia, serif',
              fontWeight: '600',
              marginTop: '1.6em',
              marginBottom: '0.6em',
            },
            blockquote: {
              borderLeftColor: '#9A3412',
              borderLeftWidth: '3px',
              fontStyle: 'italic',
              color: '#4B4741',
              paddingLeft: '1.25rem',
            },
            a: {
              color: '#9A3412',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              '&:hover': {
                color: '#7C2D12',
              },
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;

