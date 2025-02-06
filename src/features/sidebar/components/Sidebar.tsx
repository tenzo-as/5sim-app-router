import { Banner } from '@/features/sidebar/components/Banner'

type Props = {
    className?: string
}

const Sidebar = ({
    className,
}: Props) => {
    return (
        <div className={className}>
            <Banner />
        </div>
    )
}

export default Sidebar