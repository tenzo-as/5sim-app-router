'use client'
import { useTranslations } from 'next-intl'
import Main from '@/shared/components/Main'
import Title from '@/shared/components/Title'
import Text from '@/shared/components/Text'
import Image from '@/shared/components/Image'

const Home = () => {
    const t = useTranslations('HomePage')
    const symbol = useTranslations('symbol')

    return (
        <Main>
            <Title level={'h1'}>{t('title')}</Title>
            <Text className={'mt-8'}>{t('description')}</Text>
            <Title level={'h2'} className={'mt-16'}>
                {t('about.title')}
            </Title>
            {about.map(key => {
                const title = t(`about.${key}.title`)
                const description = t(`about.${key}.description`)

                return (
                    <div key={key} className={'mt-12 grid gap-6 sm:grid-cols-[160px_1fr] lg:max-xl:gap-12 2xl:gap-12'}>
                        <Image
                            src={`/media/home/${key}.png`}
                            alt={[title, symbol('dot'), symbol('space'), description].join('')}
                            width={160}
                            height={160}
                        />
                        <div>
                            <Title level={'h3'}>{title}</Title>
                            <Text className={'mt-3'}>{description}</Text>
                        </div>
                    </div>
                )
            })}
            <Title level={'h3'}>

            </Title>
        </Main>
    )
}

export default Home

const about = [
    'lots_of_numbers', 'daily_replenishment', 'one_time_and_repeated_use',
    'api_for_developers', 'minimum_fees', 'round_clock_support'
] as const