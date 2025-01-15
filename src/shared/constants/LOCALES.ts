import { objectKeys } from '../utils/objectKeys'

export type Locale = 'en' | 'ru' | 'zh'

export const LOCALE: Record<Locale, string> = {
    en: 'en',
    ru: 'ru',
    zh: 'zh',
}

export const LOCALES: Locale[] = objectKeys(LOCALE)

export const DEFAULT_LOCALE: Locale = 'en'

export const NAME_BY_LOCALE: Record<Locale, string> = {
    en: 'English',
    ru: 'Русский',
    zh: '中文',
}
