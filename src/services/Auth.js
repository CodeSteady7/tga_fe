import axios from "axios"

const authLogin = async (email, password) => {
    return axios.post(`${process.env.REACT_APP_API_URL}auth/login`, {email:email, password:password})
}

const Auth = {
    authLogin
}

export default Auth;