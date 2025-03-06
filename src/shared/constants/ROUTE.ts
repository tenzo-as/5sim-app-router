export const ROUTE = {
    Home: '/',
    SignIn: '/login',
    Support: '/support',
} as const

export type Route = (typeof ROUTE)[keyof typeof ROUTE]
