import { CgClose } from 'react-icons/cg'
import { twMerge } from 'tailwind-merge'

type Props = {
    className?: string
}

const RemoveButton = ({ className }: Props) => (
    <div className={twMerge('size-8 rounded-xl text-[#42a5f5] bg-[#e2f1fd] dark:bg-[#2a3e52]', className)}>
        <CgClose className={'size-6'}/>
    </div>
)

export default RemoveButton