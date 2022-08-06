import axios from "axios"

const getAll = async (params = {}) => {
    return axios.get(`${process.env.REACT_APP_API_URL}departments`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        params: params,
    })
}

const create = async ({name, user_id, level, type}) => {
    return axios.post(
        `${process.env.REACT_APP_API_URL}departments`,{
            name: name, 
            user_id: user_id,
            level: level === '' ? null : level,
            type: type
        },{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
}

const show = async (ID) => {
    return axios.get(`${process.env.REACT_APP_API_URL}departments/${ID}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
} 

const Unit = {
    getAll,
    create,
    show
}

export default Unit