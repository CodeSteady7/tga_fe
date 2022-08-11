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

const getInstrumentBySubTopic = async (sub_topic_id) => {
	return axios.get(
		`${process.env.REACT_APP_API_URL}sub-topics/${sub_topic_id}`,
		{
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		}
	)
}

const addInstrumentListBySubTopic = async ({instrument_sub_topic_id, scope_type, instruments}) => {
	return axios.post(
		`${process.env.REACT_APP_API_URL}instruments`,
		{
			instrument_sub_topic_id: instrument_sub_topic_id,
			scope_type: scope_type,
            instruments: instruments
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
    createTopic,
	getInstrumentBySubTopic,
	addInstrumentListBySubTopic
}

export default Instrument