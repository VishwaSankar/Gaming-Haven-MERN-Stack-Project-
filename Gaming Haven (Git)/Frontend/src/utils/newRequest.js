import axios from "axios";

const newRequest = axios.create({
    baseURL:"https://gaming-haven-api.vercel.app", withCredentials:true
})

export default newRequest
