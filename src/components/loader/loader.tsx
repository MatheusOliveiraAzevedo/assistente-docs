"use client"
import { useLoader } from "@/shared/useContext/loaderContext";
import Backdrop from "../Backdrop/backdrop";
import Spinner from "../spinner/spinner";



export default function Loader() {
    const { loadingLoader } = useLoader();
    
    return(
        <>
            { loadingLoader &&
                <Backdrop >
                    <Spinner size="w-20 h-20" border="border-4" />
                </Backdrop>   
            }
        </>
    )
}