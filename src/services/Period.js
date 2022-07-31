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

const create = async ({ name, period_start, period_end }) => {
	return axios.post(
		`${process.env.REACT_APP_API_URL}periods`,
		{
			name: name,
			period_start: format(new Date(period_start), "yyyy-MM-dd"),
			period_end: format(new Date(period_end), "yyyy-MM-dd"),
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

const update = async ({ id, name, period_start, period_end }) => {
	return axios.put(
		`${process.env.REACT_APP_API_URL}periods/${id}`,
		{
			name: name,
			period_start: format(new Date(period_start), "yyyy-MM-dd"),
			period_end: format(new Date(period_end), "yyyy-MM-dd"),
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
