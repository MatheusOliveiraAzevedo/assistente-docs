import { ReactNode } from "react"

type BackdropProps = {
    children: ReactNode
    onClick?: () => void
}

export default function Backdrop({ children, onClick }: BackdropProps) {
    return (
        <div className="bg-gray-100/30 flex justify-center items-center absolute top-0 left-0 w-full h-full z-15" onClick={onClick}>
            {children}
        </div>
    )
}