import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'
import { NextRequest } from 'next/server'
import { Theme } from '@/features/theme/types'
import { CookiesKey } from '@/shared/utils/cookies'

export const config = {
    matcher: ['/', '/(en|ru|zh)/:path*'],
}

export const middleware = (request: NextRequest) => {
    const theme = request.cookies.get(CookiesKey.Theme)?.value || Theme.Light
    const service = request.cookies.get(CookiesKey.Service)?.value
    const lastService = request.cookies.get(CookiesKey.LastService)?.value
    const favoriteServices = request.cookies.get(CookiesKey.FavoriteServices)?.value
    const country = request.cookies.get(CookiesKey.Country)?.value
    const lastCountry = request.cookies.get(CookiesKey.LastCountry)?.value

    const intlMiddleware = createMiddleware(routing)
    const response = intlMiddleware(request)

    response.headers.set(CookiesKey.Theme, theme)
    if (service) response.headers.set(CookiesKey.Service, service)
    if (lastService) response.headers.set(CookiesKey.LastService, lastService)
    if (favoriteServices) response.headers.set(CookiesKey.FavoriteServices, favoriteServices)
    if (country) response.headers.set(CookiesKey.Country, country)
    if (lastCountry) response.headers.set(CookiesKey.LastCountry, lastCountry)

    return response
}