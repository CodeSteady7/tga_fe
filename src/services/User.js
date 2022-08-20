import axios from "axios"
import { format } from 'date-fns';

const getAll = async (params = {}) => {

    return axios.get(
        `${process.env.REACT_APP_API_URL}users`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            params: params
        })
}

const create = async ({ name, email, nip, role, password, phone }) => {
    return axios.post(
        `${process.env.REACT_APP_API_URL}users`, {
        name: name,
        email: email,
        nip: nip,
        role: role,
        password: password,
        phone: phone
    }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
}

const update = async ({ id, user }) => {
    console.log('info', id, user)
    return axios.put(`${process.env.REACT_APP_API_URL}users/${id}`, {
        name: user.name,
        email: user.email,
        nip: user.nip,
        role: user.role,
        password: user.password,
        phone: user.phone
    }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
}

const destroy = async ({ id }) => {
    console.log(id)
    return axios.delete(`${process.env.REACT_APP_API_URL}users/${id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
}

const getProfile = async () => {
    return axios.get(
        `${process.env.REACT_APP_API_URL}profile`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
}

const User = {
    getAll,
    create,
    getProfile,
    update,
    destroy
}

export default User