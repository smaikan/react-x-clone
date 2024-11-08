import { NavLink } from "react-router-dom";
import itemss from "./menuitems";
import { useAccount } from "../../../redux/hooks";

export default function Menu() {
  const accountNick=useAccount().nickName
  const items =  itemss(accountNick)
  return (
    <div  className="menu">
        {items.map((item,index)=> 
        (<NavLink key={index} to={item.link} className={({ isActive }) => (isActive ? 'active' : 'inactive')} >
        
        {({ isActive }) => (
            <div style={{
              fontWeight: isActive && '700'
            }} className="menuitem">
              
              {isActive ? item.logo.active : item.logo.disactive}
              {item.text}
            </div>
          )}
        
      </NavLink>)
        
      )}
      </div>
        )}
      
  
