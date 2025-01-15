import { ReactNode } from 'react'
import { Header } from '@/features/header/components/Header'

type Props = {
    children: ReactNode
}

const MainLayout = ({ children }: Props) => {
    return (
        <div className={''}>
            <Header/>
            {children}
        </div>
    )
}