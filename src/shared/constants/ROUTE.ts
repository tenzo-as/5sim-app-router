export const ROUTE = {
    Home: '/',
    SignIn: '/login',
} as const

export type Route = (typeof ROUTE)[keyof typeof ROUTE]
