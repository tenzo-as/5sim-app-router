import { capitalizeFirstLetter } from '@/shared/utils/capitalizeFirstLetter'

export const operatorNameBy = (id: string): string => {
    if (nameById.has(id)) return nameById.get(id) as string

    return capitalizeFirstLetter(id)
}

const nameById: Map<string, string> = new Map([
    ['virtual39', 'Virtual39 (voice from bot)'],
])
