import Services from '@/features/services/components/Services'
import { useString } from '@/shared/hooks/useString'
import { useServices } from '@/features/services/hooks/useServices'

const Gateway = () => {
    const { value: country } = useString()
    const { data: services } = useServices(country)
    const servicesSearch = useString()

    return (
        <div className={'py-6 px-6'}>
            <Services
                search={servicesSearch.value}
                onChangeSearch={servicesSearch.setValue}
                serviceIds={Object.keys(services || {})}
                serviceById={services || {}}
                collapsedList={['amazon', 'facebook', 'telegram', 'whatsapp', 'google', 'microsoft', 'openai', 'instagram']}
                onSelect={() => {}}
                onToggleFavorite={() => {}}
            />
        </div>
    )
}

export default Gateway