
type PropsSpinner = {
    configExtraClass?: string
}
export default function Spinner({configExtraClass} : PropsSpinner) {
    return (
        <div className={`flex items-center justify-center ${configExtraClass}`}>
            <div className="w-5 h-5 border-2 border-gray-600 border-t-gray-300  rounded-full animate-spin"></div>
        </div>
    )
}