import { Locale } from '@/shared/constants/LOCALES'
import { useParams } from 'next/navigation'

export const useLocale = () => {
    const { locale } = useParams<{ locale: Locale }>()

    return locale
}
