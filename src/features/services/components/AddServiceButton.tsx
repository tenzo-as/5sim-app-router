import Button from '@/shared/components/Button'
import { useTranslations } from 'next-intl'
import { MdControlPointDuplicate } from 'react-icons/md'
import { ROUTE } from '@/shared/constants/ROUTE'
import { useRouter } from '@/shared/hooks/useRouter'
import { twMerge } from 'tailwind-merge'

type Props = {
    className?: string
}

const AddServiceButton = ({ className }: Props) => {
    const t = useTranslations('services')
    const { push } = useRouter()

    return (
        <Button
            variant={'text'}
            color={'primary'}
            startIcon={MdControlPointDuplicate}
            onClick={() => push(ROUTE.Support)}
            fullWidth
            disableShadow
            className={twMerge('text-base font-normal', className)}
        >
            {t('addService')}
        </Button>
    )
}

export default AddServiceButton