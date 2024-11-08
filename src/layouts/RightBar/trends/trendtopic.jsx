import TrendList from "./TrendList"

export default function Topic(){
    const NumberFormat=(number)=>{
        let config={}
        if(number>9999)
        {
          config={ 
                notation: 'compact',
                maximumFractionDigits:1

            }
            
        }
        return  new Intl.NumberFormat('tr',config ).format(number)
    }
    return(
        <> {TrendList.map(trend=>(
            <div key={trend.list} className="topic">
                        <div className="konu">{trend.konu} · Gündemdekiler  <div className="more"><svg viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi"><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg></div></div>
                        <div className="baslik">{trend.name}</div>
                        <div className="postcount">{NumberFormat(trend.posts)} posts</div>
                  
                    </div>
                    ))}</>
       
        
    )
}