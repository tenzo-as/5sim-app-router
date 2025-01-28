import { useParams as _useParams } from 'next/navigation'

export const useParams = () => {
    const { locale, ...params } = _useParams()

    return params
}
