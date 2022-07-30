import axios from "axios"
import { format } from 'date-fns';

const getAll = async () => {

    return axios.get(
        `${process.env.REACT_APP_API_URL}periods`,
    {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
}

const create = async ({name, period_start, period_end}) => {
    return axios.post(
        `${process.env.REACT_APP_API_URL}periods`,{
            name: name,
            period_start: format(new Date(period_start), 'yyyy-MM-dd'),
            period_end: format(new Date(period_end), 'yyyy-MM-dd'),
        },{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
}

const Period = {
    getAll, 
    create
}

export default Period