import daisyui from 'daisyui'
import type { Config } from 'tailwindcss'
import themes from 'daisyui/src/theming/themes'

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
    daisyui: {
        // defaultTheme: 'light',
        themes: [
            {
                light: {
                    ...themes.light,
                    '--pc': '#ffffff',
                    '--sc': '#ffffff',
                    '--ac': '#ffffff',
                    '--nc': '#ffffff',
                    '--bc': '#ffffff',
                    '--inc': '#ffffff',
                    '--suc': '#ffffff',
                    '--wac': '#ffffff',
                    '--erc': '#ffffff',
                }
            },
            {
                dark: {
                    ...themes.dark,
                    '--pc': '#ffffff',
                    '--sc': '#ffffff',
                    '--ac': '#ffffff',
                    '--nc': '#ffffff',
                    '--bc': '#ffffff',
                    '--inc': '#ffffff',
                    '--suc': '#ffffff',
                    '--wac': '#ffffff',
                    '--erc': '#ffffff',
                }
            },
        ],
        darkTheme: 'dark',
        darkMode: ['selector', 'data-theme="dark"']
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
