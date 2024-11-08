import addprofiles from "./profiles"

const Addprofiles=()=>{
    return(
        <>
        {addprofiles.map((account,index)=>(
            <div key={index} className="profilediv">
            
            <img className="ppauth" src={account.pp} alt="" />
            <div className="ortadiv">

            <div className="nick">
           <div className="accountname2">{account.name}</div> 
           <div className="accountnick">@{account.nickName}</div>
        </div>
        <div className='submit' style={{
            width: '88px',
            height:'32px',
            backgroundColor:'rgb(239, 243, 244)',
            color:'black',
            border:'none',
            alignSelf:'center',
            marginLeft:'auto'
        }} >Gönder</div>

        </div>
        
        </div>
        
        ))}</>
        
        
        
    )
}

export default Addprofiles