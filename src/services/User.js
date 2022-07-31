import axios from "axios"
import { format } from 'date-fns';

const getAll = async () => {

    return axios.get(
        `${process.env.REACT_APP_API_URL}users`,
    {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
}

const create = async ({name, email, nip, role, password}) => {
    return axios.post(
        `${process.env.REACT_APP_API_URL}users`,{
            name: name, 
            email: email,
            nip: nip,
            role: role,
            password: password
        },{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
}

const User = {
    getAll, 
    create
}

export default User