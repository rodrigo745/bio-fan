import Uno from "@/components/inicio/LeerMas/uno"


export default function LeerMas({params}){
    return(
        <div>
            {
                params.id == 0 && <Uno/>
            }
        </div>
    )
}