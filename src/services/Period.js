import axios from "axios"
import { format } from "date-fns"

const getAll = async () => {
	return axios.get(`${process.env.REACT_APP_API_URL}periods`, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	})
}

const getDetails = async ({ id }) => {
	return axios.get(`${process.env.REACT_APP_API_URL}periods/${id}`, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	})
}

const create = async ({ name }) => {
	return axios.post(
		`${process.env.REACT_APP_API_URL}periods`,
		{
			name: name,
		},
		{
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		}
	)
}
const destroy = async ({ id }) => {
	return axios.delete(`${process.env.REACT_APP_API_URL}periods/${id}`, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	})
}

const update = async ({ id, name }) => {
	return axios.put(
		`${process.env.REACT_APP_API_URL}periods/${id}`,
		{
			name: name,
		},
		{
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		}
	)
}

const Period = {
	getAll,
	getDetails,
	create,
	destroy,
	update,
}

export default Period
