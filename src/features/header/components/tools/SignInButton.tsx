'use client'
import Button from '@/shared/components/Button'
import { twMerge } from 'tailwind-merge'
import { useTranslations } from 'next-intl'
import { useRouter } from '@/shared/hooks/useRouter'

type Props = {
    className?: string
}

export const SignInButton = ({ className }: Props) => {
    const t = useTranslations()
    const router = useRouter()

    return (
        <Button
            color={'white'}
            variant={'text'}
            className={twMerge('py-1', className)}
            onClick={() => router.push('/')}
        >
            {t('header.signIn')}
        </Button>
    )
}