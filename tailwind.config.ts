import daisyui from 'daisyui'
import themes from 'daisyui/src/theming/themes'
import type { Config } from 'tailwindcss'

const commonTheme = {
    'primary-content': '#ffffff',
    'secondary-content': '#ffffff',
    'accent-content': '#ffffff',
    'ghost-content': '#ffffff',
    'neutral-content': '#ffffff',
    'info-content': '#ffffff',
    'success-content': '#ffffff',
    'warning-content': '#ffffff',
    'error-content': '#ffffff',
    '--border-btn': '2px',

}

export default {
    content: [
        './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
        './src/features/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    plugins: [daisyui],
    theme: {
        extend: {
            colors: {
                'header': 'oklch(var(--header) / <alpha-value>)',
                'divider': 'oklch(var(--divider) / <alpha-value>)',
            },
        },
        fontFamily: {
            inter: ['"Inter"', 'sans-serif'],
        },
        screens: {
            sm: '640px', // sm 600
            md: '768px', //
            lg: '1024px', // md 900
            xl: '1280px', // lg 1200
            '2xl': '1536px', // xl 1536
        },
    },
    daisyui: {
        // defaultTheme: 'light',
        themes: [
            {
                light: {
                    ...themes.light,
                    ...commonTheme,
                    '--header': '43.52% 0.0605 253.42',
                    '--divider': '90.97% 0 0',
                },
            },
            {
                dark: {
                    ...themes.dark,
                    ...commonTheme,
                    'base-100': '#1e2e3e',
                    'base-200': '#1e2e3e',
                    '--header': '43.52% 0.0605 253.42',
                    '--divider': '43.52% 0.0605 253.42',
                },
            },
        ],
        darkTheme: 'dark',
        darkMode: ['selector', 'data-theme="dark"'],
    },
    darkTheme: 'dark',
    darkMode: ['selector', '[data-theme="dark"]'],
} satisfies Config

// theme: {
//   extend: {
//     colors: {
//       background: "var(--background)",
//           foreground: "var(--foreground)",
//     },
//   },
// },
