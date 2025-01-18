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
    'header': '#395372',
}

export default {
    content: [
        './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
        './src/features/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {},
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
    plugins: [daisyui],
    darkTheme: 'dark',
    darkMode: ['selector', '[data-theme="dark"]'],
    daisyui: {
        // defaultTheme: 'light',
        themes: [
            {
                light: {
                    ...themes.light,
                    ...commonTheme,
                },
            },
            {
                dark: {
                    ...themes.dark,
                    ...commonTheme,
                },
            },
        ],
        darkTheme: 'dark',
        darkMode: ['selector', 'data-theme="dark"'],
    },
} satisfies Config

// theme: {
//   extend: {
//     colors: {
//       background: "var(--background)",
//           foreground: "var(--foreground)",
//     },
//   },
// },
