import { useEffect } from "react"
import { authStore } from "./page/gamecontent/login/authStore"

export const Logout = () => {
    const store=authStore()
    useEffect(()=>{},[])
  return (
    <>
    you are logged out
    </>
  )
}
