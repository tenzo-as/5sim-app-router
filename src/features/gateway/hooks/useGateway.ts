import { GatewayContext, GatewayContextType } from '@/features/gateway/providers/GatewayProvider'
import { useContext } from 'react'

export const useGateway = (): GatewayContextType => {
    const context = useContext(GatewayContext)

    if (!context) {
        throw new Error('useGateway must be used within a GatewayProvider')
    }

    return context
}
