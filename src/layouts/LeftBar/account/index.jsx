import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

import { useAccount, useAccounts } from '../../../redux/hooks';
import { setCurrentAccount } from '../../../redux/auth';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';




function Account() {
  
  
  const dispatch = useDispatch()

  const account = useAccount()
  const accounts = useAccounts()

  const setProfile=(e)=>{
    dispatch(setCurrentAccount(e))
  }

  

  
  return (
    <div className="pop"><Popover className="popover">
      <PopoverButton className='popbutton'   > 
        {account.pp}
        <div className="nick">
           <div className="accountname">{account.name}</div> 
           <div className="accountnick">@{account.nickName}</div> 
        </div>
        <svg style={{
           width: '18.75px',
           height: '18.75px',
           fill: '#EEEEEE',
           marginLeft:'auto',
           marginRight:'8px'
        }} viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi"><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg>

        
        </PopoverButton>
      <PopoverPanel  anchor="top" className="poppanel">
        {accounts.map((ac,index)=>(
          <div onClick={()=>setProfile(ac)} key={index} className='panelprofile'>
            {ac.pp}
            <div className="nick">
           <div className="accountname">{ac.name}</div> 
           <div className="accountnick">@{ac.nickName}</div> 
        </div>
          </div>
        ))}
        <div className="stickpanel"/>
        <div className="panelmenu">Var olan bir hesap ekle</div>
        <div className="panelmenu">Hesapları yönet</div>
        <div className="panelmenu">@{account.nickName} hesabından çıkış yap</div>
        
       
      </PopoverPanel>
    </Popover></div>

    
    
  )
}

export default Account;