import { forwardRef, type ReactNode } from "react"

type ButtonDefaultProps = {
    children: ReactNode,
    type?: 'primary' | 'secondary',
    size?: 'sm' | 'lg',
    onClick?: () => void,
    disabled?: boolean,
    circle?: boolean,
    tooltip?: string
}

function ButtonDefaultBase( { children, type='primary', size='sm', onClick, disabled, circle = false, tooltip="" }: ButtonDefaultProps, ref: React.Ref<HTMLButtonElement> ) {
    const color = type === 'primary' ? 'bg-blue-700 active:bg-blue-400 hover:bg-blue-900' : 'bg-gray-600 active:bg-gray-400 hover:bg-gray-800'
    const sizeButton = size === 'sm' ? 'w-auto' : 'w-full'
    const bordersButton = circle ? 'rounded-full p-4' : 'rounded-xl px-4 py-2'
    return(
        <button className={`${color} ${sizeButton} text-white font-medium self-center ${bordersButton}`} disabled={disabled} ref={ref} onClick={onClick} title={tooltip}>{children}</button>
    )
}

const ButtonDefault = forwardRef<HTMLButtonElement, ButtonDefaultProps>(ButtonDefaultBase);

export default ButtonDefault;