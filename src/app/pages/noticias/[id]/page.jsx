import Image from "next/image";
import Noti1 from "@/components/noticias/noti1";
import Noti2 from "@/components/noticias/noti2";
import Noti3 from "@/components/noticias/noti3";

export default function Noticias({params}){
    return(
        <div className="mt-8 px-20">
            {
            params.id == 0 &&
                <Noti1/>
            }
            {
            params.id == 1 &&
                <Noti2/> 
            }
            {
            params.id == 2 &&
                <Noti3/>
            }
        </div>
    )
}