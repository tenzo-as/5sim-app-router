import Services from '@/features/services/components/Services'
import { useString } from '@/shared/hooks/useString'
import { useServicesByCountry } from '@/features/services/hooks/useServicesByCountry'
import { useGateway } from '@/features/gateway/hooks/useGateway'
import { useServices } from '@/features/services/hooks/useServices'
import Countries from '@/features/countries/components/Countries'
import { useCountries } from '@/features/countries/hooks/useCountries'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { useCountriesByService } from '@/features/countries/hooks/useCountriesByService'
import Button from '@/shared/components/Button'
import { ChangeOrderIcon } from '@/features/gateway/icons/ChangeOrderIcon'

const Gateway = () => {
    const { service, setService, country, setCountry } = useGateway()
    const services = useServices()
    const countries = useCountries()
    const { data: servicesByCountry } = useServicesByCountry(service ? null : country)
    const { data: countriesByService } = useCountriesByService(country ? null : service)
    const servicesSearch = useString()
    const countriesSearch = useString()

    return (
        <div className={'py-6 px-4'}>
            <div className={'mb-4 flex items-center justify-between pr-3'}>
                <StepName>1. Выбрать сервис</StepName>
                <Button
                    square
                    size={32}
                >
                    <ChangeOrderIcon />
                </Button>
            </div>
            <Services
                selectedService={service}
                search={servicesSearch.value}
                onChangeSearch={servicesSearch.setValue}
                serviceIds={servicesByCountry ? Object.keys(servicesByCountry) : services.ids}
                serviceById={country ? (servicesByCountry || {}) : services.byId}
                collapsedList={['amazon', 'facebook', 'telegram', 'whatsapp', 'google', 'microsoft', 'openai', 'instagram']}
                onSelect={id => setService(id)}
                favoriteServices={services.favorites}
                onToggleFavorite={services.toggleFavorite}
            />
            <StepName className={'mt-8 mb-4'}>2. Выбрать сервис</StepName>
            <Countries
                selectedCountry={country}
                search={countriesSearch.value}
                onChangeSearch={countriesSearch.setValue}
                countryIds={countriesByService ? Object.keys(countriesByService) : countries.ids}
                countryById={service ? (countriesByService || {}) : {}}
                collapsedList={['canada', 'england', 'romania', 'russia', 'usa', 'vietnam', 'india', 'mongolia']}
                onSelect={id => setCountry(id)}
                favoriteCountries={countries.favorites}
                onToggleFavorite={countries.toggleFavorite}
            />
            <StepName className={'mt-8 mb-4'}>3. Выбрать оператор</StepName>
        </div>
    )
}

export default Gateway

type StepNameProps = {
    className?: string
    children?: ReactNode
}

const StepName = ({ className, children }: StepNameProps) =>
    <h2 className={twMerge('text-xl leading-8 font-semibold ml-5 text-[#395372] dark:text-[#e2f1fd]', className)}>
        {children}
    </h2>