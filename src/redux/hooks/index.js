import { useSelector } from "react-redux";

export const useAccount=()=>useSelector(state=>state.auth.currentAccount)
export const useAccounts=()=>useSelector(state=>state.auth.accounts)

export const usePosttext=()=>useSelector(state=>state.post.text)