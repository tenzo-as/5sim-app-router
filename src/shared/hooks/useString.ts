import { ChangeEvent, useState } from 'react'

export const useString = (defaultValue: string = '') => {
    const [value, setValue] = useState<string>(defaultValue)

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = event.currentTarget.value

        setValue(value)
    }

    const reset = () => {
        setValue('')
    }

    return {
        value,
        setValue,
        handleChange,
        reset,
    }
}