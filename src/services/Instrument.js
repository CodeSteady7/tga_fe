import axios from "axios"

const getAllTopic = async () => {
	return axios.get(`${process.env.REACT_APP_API_URL}topics`, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	})
}


const createTopic = async ({ name, period_id, sub_topics }) => {
	return axios.post(
		`${process.env.REACT_APP_API_URL}topics`,
		{
			name: name,
			period_id: period_id,
            sub_topics: sub_topics
		},
		{
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		}
	)
}

const Instrument = {
    getAllTopic,
    createTopic
}

export default Instrument