 import {createSlice} from '@reduxjs/toolkit'

 const initialState={
    currentAccount:{
        name:'Wember',
        nickName:'wember2001',
        pp: <img className='ppauth' src='https://upload.wikimedia.org/wikipedia/tr/8/83/DarthVader.JPG' width={40} height={40}/>
    },
    accounts:[
        {
            
            name:'Wember',
            nickName:'wember2001',
            pp: <img className='ppauth' src='https://upload.wikimedia.org/wikipedia/tr/8/83/DarthVader.JPG' width={40} height={40}/>
        },
        {
            
            name:'Xuser twitterson',
        nickName:'xuser123',
        pp:<img className='ppauth' src='https://www.kodcuherif.com/images/2020/04/az-calismayla-iyi-bir-yazilimci-olmak-1280x720.jpg' width={40} height={40}/>
  
        }
        
    ]
 }
 
 const auth = createSlice({
    name:'auth',
    initialState,
    reducers:{
        addAccount:(state,action)=>{
            state.accounts.push(action.payload)
        },
        deleteAccount:(state,action)=>{
            state.accounts=state.accounts.filter(account=>account.id!==action.payload)
        },
        setCurrentAccount:(state,action)=>{
            state.currentAccount=action.payload
        }
    }
 })

 export const {addAccount,deleteAccount,setCurrentAccount} = auth.actions
 export default auth.reducer