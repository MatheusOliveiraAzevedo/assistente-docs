
type PropsSpinner = {
    configExtraClass?: string,
    size?: string,
    border?: string
}
export default function Spinner({ configExtraClass, size = "w-5 h-5", border = "border-2"} : PropsSpinner) {
    return (
        <div className={`flex items-center justify-center ${configExtraClass}`}>
            <div className={`${size} ${border} border-gray-600 border-t-gray-300  rounded-full animate-spin`}></div>
        </div>
    )
}