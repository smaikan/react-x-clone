import { useParams } from "react-router-dom"

export default function Profile(){

   const {nick} = useParams()
    return(
        <>
        {nick} component
                </>
    )
}