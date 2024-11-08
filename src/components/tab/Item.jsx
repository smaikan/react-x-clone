import { Link } from "react-router-dom"
import { useTabContext } from "./Context"

export default function Item({children,id}){

  const  {active,setActive}=useTabContext()

    return(
        <a onClick={()=>setActive(id)} className="tabbuton">
          <div style={{color:id===active && 'rgb(231, 233, 234)',fontWeight:id===active && 700
          }} className="tabname">
            {children}
            {id===active&&<div className="stick"/>}
          </div>
        
        </a>
    )
}