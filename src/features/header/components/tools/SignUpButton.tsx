'use client'

import Button from '@/shared/components/Button'
import { useRouter } from '@/shared/hooks/useRouter'
import { useTranslations } from 'next-intl'
import { twMerge } from 'tailwind-merge'

type Props = {
    className?: string
}

export const SignUpButton = ({ className }: Props) => {
    const t = useTranslations('header')
    const router = useRouter()

    return (
        <Button
            color={'white'}
            variant={'outlined'}
            className={twMerge('py-1', className)}
            onClick={() => router.push('/')}
        >
            {t('signUp')}
        </Button>
    )
}
