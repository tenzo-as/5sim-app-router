import { useParams } from 'next/navigation'
import { Locale } from '@/shared/constants/LOCALES'

export const useLocale = () => {
    const { locale } = useParams<{ locale: Locale }>()

    return locale
}