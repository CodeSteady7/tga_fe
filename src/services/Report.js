import axios from 'axios';

const totalData = async () => {
	return axios.get(`${process.env.REACT_APP_API_URL}report/total-data`, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		},
	});
};

const dashboardGraph = async () => {
	return axios.get(`${process.env.REACT_APP_API_URL}report/audit-chart`, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		},
	});
};

const Report = {
	totalData,
	dashboardGraph,
};

export default Report;
