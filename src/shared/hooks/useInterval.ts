import { useIsomorphicLayoutEffect } from '@/shared/hooks/useIsomorphicLayoutEffect'
import { useEffect, useRef } from 'react'

export function useInterval(callback: () => void, delay: number | null) {
    const savedCallback = useRef(callback)

    useIsomorphicLayoutEffect(() => {
        savedCallback.current = callback
    }, [callback])

    useEffect(() => {
        if (delay === null) {
            return
        }

        const id = setInterval(() => {
            savedCallback.current()
        }, delay)

        return () => {
            clearInterval(id)
        }
    }, [delay])
}