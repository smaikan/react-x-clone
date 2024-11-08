import React from "react"

const Postuser=({username,usernick,date})=>{
    return(
        <div className="postuser">
        
        <div className="postname">{username}</div>

        <div className="postnick">@{usernick} · <div className="postdate">{date}</div></div>

        <div className="more"><svg viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi"><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg></div>

        
    </div>
    )
}
export default Postuser