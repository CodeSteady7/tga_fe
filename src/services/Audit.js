import axios from "axios"
import Instrument from "./Instrument"

const create = ({ department_id, period_id, auditor_id, document_no, auditor_member_list_json, audit_title, audit_type, audit_at, audit_standart }) => {
    return axios.post(
        `${process.env.REACT_APP_API_URL}audits`, {
        department_id: department_id,
        period_id: period_id,
        auditor_id, auditor_id,
        document_no: document_no,
        auditor_member_list_json: auditor_member_list_json,
        audit_title: audit_title,
        audit_type: audit_type,
        audit_at: audit_at,
        audit_standart: audit_standart

    }, {
        headers:  {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
}

const getAll = async (params = {}) => {
    return axios.get(`${process.env.REACT_APP_API_URL}audits`, {
        headers:  {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        params: params
    })
}

const getDetail = async (auditID) => {
    return axios.get(`${process.env.REACT_APP_API_URL}audits/${auditID}`, {
        headers:  {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
    })
}

const getResult = async (auditID) => {
    return axios.get(`${process.env.REACT_APP_API_URL}audits/${auditID}/result`, {
        headers:  {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
    })
}

const submitfulfillment = async (auditID, InstrumentID, {description, file}) => {
    return axios.postForm(`${process.env.REACT_APP_API_URL}audits/${auditID}/instrument/${InstrumentID}/fulfillment`, {description:description, file: file
    }, {
        headers:  {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    } )
}

const finishFulFillment = async (auditID) => {
    return axios.put(`${process.env.REACT_APP_API_URL}audits/${auditID}/finish/fulfillment`, {}, {
        headers:  {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
}

const approve = async (auditID, data) => {
    return axios.put(`${process.env.REACT_APP_API_URL}audits/${auditID}/approve`, data, {
        headers:  {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
}

const getRejectedAudit = async (params: {}) => {
    return axios.get(`${process.env.REACT_APP_API_URL}audits/rejected`, {
        headers:  {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        params: params
    })
}

const getRejectedAuditDetail = async (ID) => {
    return axios.get(`${process.env.REACT_APP_API_URL}audits/rejected/${ID}`, {
        headers:  {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
    })
}

const inputActionPlan = async (ID, {action_plan_description}) => {
    return axios.put(`${process.env.REACT_APP_API_URL}audits/rejected/${ID}`, 
    {action_plan_description: action_plan_description}, 
    {
        headers:  {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        },
    })
}

const Audit = {
    create,
    getAll,
    getDetail,
    submitfulfillment,
    finishFulFillment,
    getResult,
    approve,
    getRejectedAudit,
    getRejectedAuditDetail, 
    inputActionPlan
}

export default Audit