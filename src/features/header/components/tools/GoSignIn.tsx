import Button from '@/shared/components/Button'
import { useTranslations } from 'next-intl'
import { useRouter } from '@/shared/hooks/useRouter'

export const GoSignIn = () => {
    const t = useTranslations()
    const router = useRouter()

    return (
        <Button
            onClick={() => router.push('/')}
        >
            {t('header.signIn')}
        </Button>
    )
}