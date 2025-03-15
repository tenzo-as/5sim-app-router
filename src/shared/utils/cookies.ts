import UniversalCookies from 'universal-cookie'

export enum CookiesKey {
    Token = 'token',
    Theme = 'theme',
    Service = 'service',
    LastService = 'lastService',
    FavoriteServices = 'favoriteServices',
    Country = 'country',
    LastCountry = 'lastCountry',
}

const cookies = new UniversalCookies(null, { path: '/' })

export default cookies