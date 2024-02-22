import React from 'react'
import { authStore } from './authStore'
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

const Requireauth = () => {
    const store= authStore()

    useEffect(()=>{
        if(store.loggedIn === null){
            store.checkAuth()
        }
    },[])

    if(store.loggedIn===null){
        return <div>loading</div>
    }

    if(store.loggedIn === false){
        return <Navigate to="/login"/>;
    }
  return (
    <div>props.child</div>
  )
}

export default Requireauth