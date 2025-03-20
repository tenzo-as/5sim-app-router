import { Label } from '@/features/gateway/components/shared/Label'
import { Count } from '@/features/gateway/components/shared/Count'
import { GatewayCard } from '@/features/gateway/components/shared/GatewayCard'
import { MouseEventHandler } from 'react'
import { operatorNameBy } from '@/features/operators/utlis/operatorNameBy'
import { BuyButton } from '@/features/operators/components/BuyButton'
import { Price } from '@/features/operators/components/Price'
import { RateIcon } from '@/features/operators/icons/RateIcon'
import { Rate } from '@/features/operators/components/Rate'
import { MoreOneSMS } from '@/features/operators/components/MoreOneSMS'
import { operatorAcceptOneSMS } from '@/features/operators/utlis/operatorAcceptOneSMS'

export type OperatorProps = {
    id: string
    price: number
    count: number
    rate?: number
    className?: string
    onBuy?: () => void
}

const Operator = ({
    id,
    price,
    count,
    onBuy,
    className,
}: OperatorProps) => {
    const handleSelect: MouseEventHandler<HTMLDivElement> = event => {
        const isStarIcon = event.target instanceof SVGElement

        if (!isStarIcon) onBuy?.()
    }

    return (
        <GatewayCard
            className={''}
            size={64}
            onClick={handleSelect}
        >
            <div className={'flex flex-col justify-center pl-6 pr-2 min-w-0'}>
                <Label>{operatorNameBy(id)}</Label>
                <div className={'flex items-center mt-1'}>
                    <Rate />
                    {!operatorAcceptOneSMS.has(id) &&
                        <MoreOneSMS className={'ml-1'} />
                    }
                </div>
            </div>
            <div className={'flex items-center pr-3'}>
                <div className={'flex flex-col items-end justify-center mr-4'}>
                    <Price value={price} />
                    <Count value={count} className={'mt-1 leading-4'} />
                </div>
                <BuyButton />
            </div>
        </GatewayCard>
    )
}

export default Operator