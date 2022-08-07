import axios from "axios";

const totalData = async () => {
    return axios.get(
        `${process.env.REACT_APP_API_URL}report/total-data`,
    {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
    })
}

const Report = {
    totalData
}

export default Report;