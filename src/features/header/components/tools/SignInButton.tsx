'use client'
import Button from '@/shared/components/Button'
import { useRouter } from '@/shared/hooks/useRouter'
import { useTranslations } from 'next-intl'
import { twMerge } from 'tailwind-merge'

type Props = {
    className?: string
}

export const SignInButton = ({ className }: Props) => {
    const t = useTranslations('header')
    const router = useRouter()

    return (
        <Button
            color={'white'}
            variant={'text'}
            className={twMerge('py-1', className)}
            onClick={() => router.push('/')}
        >
            {t('signIn')}
        </Button>
    )
}
