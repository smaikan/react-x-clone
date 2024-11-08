import Content from "./Content"
import Item from "./Item"
import Items from "./Items"
import { TabContext } from "./Context"
import { useState } from "react"

export default function Tab({children,ActiveTab}){
    const [active,setActive] = useState(ActiveTab)

    const items = children.filter(c=>c.type===Items)
    const contents = children.filter(c=>c.type===Content)

    const content = contents.filter(c=>c.props.id===active)



    
    const data={
        active,
        setActive
    }
    
    console.log(active)

    return(
        <TabContext.Provider  value={data}>
         {items}
         {content}
        </TabContext.Provider>
    )
}

Tab.Items=Items
Tab.Item=Item
Tab.Content=Content