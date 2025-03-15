import Services from '@/features/services/components/Services'
import { useString } from '@/shared/hooks/useString'
import { useServicesByCountry } from '@/features/services/hooks/useServicesByCountry'
import { useGateway } from '@/features/gateway/hooks/useGateway'
import { useServices } from '@/features/services/hooks/useServices'

const Gateway = () => {
    const { service, setService, country } = useGateway()
    const services = useServices()
    const { data: servicesByCountry } = useServicesByCountry(country)
    const servicesSearch = useString()

    return (
        <div className={'py-6 px-4'}>
            <Services
                selectedCountry={service}
                search={servicesSearch.value}
                onChangeSearch={servicesSearch.setValue}
                serviceIds={services.ids}
                serviceById={services.byId}
                collapsedList={['amazon', 'facebook', 'telegram', 'whatsapp', 'google', 'microsoft', 'openai', 'instagram']}
                onSelect={id => setService(id)}
                favoriteServices={services.favorites}
                onToggleFavorite={services.toggleFavorite}
            />
        </div>
    )
}

export default Gateway