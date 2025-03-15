import { QueryClient } from '@tanstack/react-query'

const fiveMin = 1000 * 60 * 5

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: fiveMin,
            refetchOnWindowFocus: true,
        },
    },
})