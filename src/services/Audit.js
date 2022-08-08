import axios from "axios"

const create = ({department_id, period_id, auditor_id, document_no, auditor_member_list_json, audit_title, audit_type, audit_at, audit_standart}) => {
    return axios.post(
        `${process.env.REACT_APP_API_URL}audits`,{
           department_id: department_id,
           period_id: period_id,
           auditor_id, auditor_id,
           document_no: document_no,
           auditor_member_list_json: auditor_member_list_json,
           audit_title: audit_title,
           audit_type: audit_type,
           audit_at: audit_at,
           audit_standart: audit_standart

        },{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })   
}

const getAll = (params = {}) => {
    return axios.get(`${process.env.REACT_APP_API_URL}audits`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        params: params
    })
}

const getDetail = (auditID) => {
    return axios.get(`${process.env.REACT_APP_API_URL}audits/${auditID}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
    })
}

const Audit = {
    create,
    getAll,
    getDetail
}

export default Audit