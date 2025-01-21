'use client'
import { useCallback, useState } from 'react'

import type { Dispatch, SetStateAction } from 'react'

type UseBooleanReturn = {
    value: boolean
    setValue: Dispatch<SetStateAction<boolean>>
    setTrue: () => void
    setFalse: () => void
    toggle: () => void
}

export const useBoolean = (defaultValue = false): UseBooleanReturn => {
    const [value, setValue] = useState<boolean>(defaultValue)

    const setTrue = useCallback(() => {
        setValue(true)
    }, [])

    const setFalse = useCallback(() => {
        setValue(false)
    }, [])

    const toggle = useCallback(() => {
        setValue(x => !x)
    }, [])

    return { value, setValue, setTrue, setFalse, toggle }
}
