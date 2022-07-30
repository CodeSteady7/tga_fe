import axios from "axios"

const getAll = async () => {

    return axios.get(
        `${process.env.REACT_APP_API_URL}periods`,
    {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
}

const Period = {
    getAll
}

export default Period