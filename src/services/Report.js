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

const PdfAuditGenerate = async (ID) => {
	return axios.get(`${process.env.REACT_APP_API_URL}report/pdf/${ID}`, {
		responseType: "blob",
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`,
			'Content-Type': 'application/pdf',
		},
	});
};



const Report = {
	totalData,
	dashboardGraph,
	PdfAuditGenerate
};

export default Report;
