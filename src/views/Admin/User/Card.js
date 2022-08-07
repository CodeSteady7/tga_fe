import React, { useEffect, useState } from 'react'
import Report from 'services/Report'

export default function Card({setIsOpen}) {
    const [total, setTotal] = useState({
        manager: 0,
        auditor: 0,
        academic: 0,
        non_academic: 0
    })
    const totalData = async () => {
        await Report.totalData().then(res => {
            let total = res.data.result

            setTotal({
                manager: total.manager,
                auditor: total.auditor,
                academic: total.academic,
                non_academic: total.non_academic
            })
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        totalData()
    }, [])
    
    return (
    <>
    <div className="row">
        <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="card pb-2">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <span>
                            Total <strong> {total.manager} </strong> users
                            Manager
                        </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-end mt-1 pt-25">
                        <div className="role-heading">
                            <h4 className="fw-bolder">Manager</h4>
                            <a
                                className="role-edit-modal"
                                data-bs-toggle="modal"
                                data-bs-target="#addRoleModal"
                            ></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="card pb-2">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <span>
                            Total <strong>  {total.auditor} </strong> users
                            Auditor
                        </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-end mt-1 pt-25">
                        <div className="role-heading">
                            <h4 className="fw-bolder">Auditor</h4>
                            <a
                                className="role-edit-modal"
                                data-bs-toggle="modal"
                                data-bs-target="#addRoleModal"
                            ></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <span>
                            Total <strong> {total.academic} </strong> users
                            Prodi
                        </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-end mt-1 pt-25">
                        <div className="role-heading">
                            <h4 className="fw-bolder">
                                Unit Penunjang
                            </h4>
                            <h6 className="fw-bolder">Prodi</h6>
                            <a
                                className="role-edit-modal"
                                data-bs-toggle="modal"
                                data-bs-target="#addRoleModal"
                            ></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <span>
                            Total <strong> {total.non_academic}</strong>{" "}
                            users Non Akademik
                        </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-end mt-1 pt-25">
                        <div className="role-heading">
                            <h4 className="fw-bolder">
                                Unit Penunjang
                            </h4>
                            <h6 className="fw-bolder">
                                Non Akademik
                            </h6>
                            <a
                                className="role-edit-modal"
                                data-bs-toggle="modal"
                                data-bs-target="#addRoleModal"
                            ></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-xl-4 col-lg-6 col-md-6 ">
            <div className="card ">
                <div className="row">
                    <div className="col-sm-5">
                        <div className="d-flex align-items-end justify-content-center h-100">
                            <img
                                src={"../../../app-assets/images/illustration/faq-illustrations.svg"}
                                className="img-fluid mt-0"
                                alt="Image"
                                width="80"
                            />
                        </div>
                    </div>
                    <div className="col-sm-7">
                        <div className="card-body text-sm-end text-center ps-sm-0">
                            <a
                                onClick={() => setIsOpen(true)}
                                className="stretched-link text-nowrap add-new-role"
                            >
                                <span className="btn btn-primary mb-1">
                                    Klik
                                </span>
                            </a>
                            <p className="mb-1">
                                Tambahkan Users Baru
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
