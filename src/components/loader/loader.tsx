"use client"
import { useLoader } from "@/shared/useContext/loaderContext";
import Backdrop from "../Backdrop/backdrop";
import Spinner from "../spinner/spinner";



export default function Loader() {
    const { loadingLoader } = useLoader();
    
    return(
        <>
            {!loadingLoader &&
                <Backdrop >
                    <div className="bg-gray-100/50 flex justify-center items-center rounded-2xl p-4 shadow-2xl z-15">
                        <Spinner size="w-20 h-20" border="border-4" />
                    </div>
                </Backdrop>   
            }
        </>
    )
}