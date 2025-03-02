import Services from '@/features/services/components/Services'
import { useString } from '@/shared/hooks/useString'
import { useServices } from '@/features/services/hooks/useServices'

const Gateway = () => {
    const { value: country } = useString()

    const { data: services, isFetched } = useServices(country)
    const servicesSearch = useString()

    return (
        <div>
            <Services
                search={servicesSearch.value}
                onChangeSearch={servicesSearch.setValue}
                serviceIds={isFetched ? Object.keys(services) : ['amazon', 'facebook', 'telegram', 'whatsapp', 'google', 'microsoft', 'openai', 'instagram']}
                serviceById={services}
                onSelect={}
                onToggleFavorite={}
            />
        </div>
    )
}

export default Gateway