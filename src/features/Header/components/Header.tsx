import { AuthToolbar } from '@/features/Header/components/toolbar/AuthToolbar'
import { NotAuthToolbar } from '@/features/Header/components/toolbar/NotAuthToolbar'

export const Header = () => {
    return (
        <div className={'flex h-14 items-center bg-[#395372] px-1 lg:px-6'}>
            <NotAuthToolbar />
            <AuthToolbar />
        </div>
    )
}
