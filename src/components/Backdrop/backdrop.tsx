import { ReactNode } from "react"

type BackdropProps = {
    children: ReactNode
    onClick?: () => void
}

export default function Backdrop({ children, onClick }: BackdropProps) {
    return (
        <div className="bg-gray-700/20 flex justify-center items-center absolute top-0 left-0 w-[100vw] h-[100vh] z-15" onClick={onClick}>
            {children}
        </div>
    )
}