/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#09090b',
        surface: {
          DEFAULT: '#121215',
          subtle: '#18181b',
          muted: '#27272a',
          hover: '#1f1f23',
        },
        border: {
          DEFAULT: '#27272a',
          subtle: '#1e1e24',
          active: '#3f3f46',
        },
        accent: {
          emerald: {
            DEFAULT: '#10b981',
            light: '#34d399',
            dark: '#059669',
            glow: 'rgba(16, 185, 129, 0.15)',
          },
          cyan: {
            DEFAULT: '#38bdf8',
            light: '#7dd3fc',
            dark: '#0284c7',
            glow: 'rgba(56, 189, 248, 0.15)',
          },
          indigo: {
            DEFAULT: '#6366f1',
            light: '#818cf8',
            dark: '#4f46e5',
          },
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      typography: () => ({
        DEFAULT: {

          css: {
            '--tw-prose-body': '#a1a1aa',
            '--tw-prose-headings': '#f4f4f5',
            '--tw-prose-lead': '#d4d4d8',
            '--tw-prose-links': '#38bdf8',
            '--tw-prose-bold': '#f4f4f5',
            '--tw-prose-counters': '#71717a',
            '--tw-prose-bullets': '#52525b',
            '--tw-prose-hr': '#27272a',
            '--tw-prose-quotes': '#d4d4d8',
            '--tw-prose-quote-borders': '#10b981',
            '--tw-prose-captions': '#71717a',
            '--tw-prose-code': '#38bdf8',
            '--tw-prose-pre-code': '#e4e4e7',
            '--tw-prose-pre-bg': '#121215',
            '--tw-prose-th-borders': '#27272a',
            '--tw-prose-td-borders': '#1f1f23',
            color: '#a1a1aa',
            maxWidth: 'none',
            h1: {
              color: '#f4f4f5',
              fontWeight: '700',
              letterSpacing: '-0.025em',
            },
            h2: {
              color: '#f4f4f5',
              fontWeight: '600',
              letterSpacing: '-0.02em',
              borderBottom: '1px solid #27272a',
              paddingBottom: '0.5rem',
              marginTop: '2rem',
            },
            h3: {
              color: '#f4f4f5',
              fontWeight: '600',
              marginTop: '1.5rem',
            },
            a: {
              color: '#38bdf8',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            code: {
              backgroundColor: '#18181b',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              border: '1px solid #27272a',
              fontWeight: '400',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              border: '1px solid #27272a',
              borderRadius: '0.5rem',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
