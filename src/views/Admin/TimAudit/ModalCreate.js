import React from 'react'

export default function ModalCreate() {
  return (
    <div className="modal fade" id="viewTimAudit" tabindex="-1" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered modal-edit-user">
            <div className="modal-content">
                <div className="modal-header bg-transparent">
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="modal-body pb-5 px-sm-5 pt-50">
                    <div className="text-center mb-2">
                        <h1 className="mb-1">Tampilan Data Tim Audit</h1>
                    </div>
                    <form id="viewTimAuditForm" className="row gy-1 pt-75" onsubmit="return false">
                        <div className="col-12 col-md-6">
                            <label className="form-label" htmlFor="modalviewTimAuditFirstName">
                                No. Dok
                            </label>
                            <input
                                type="text"
                                id="modalviewTimAuditFirstName"
                                name="modalviewTimAuditFirstName"
                                className="form-control"
                                placeholder="John"
                                value="Gertrude"
                                data-msg="Please enter your first name"
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <label className="form-label" htmlFor="modalviewTimAuditLastName">
                                Tipe Audit
                            </label>
                            <input
                                type="text"
                                id="modalviewTimAuditLastName"
                                name="modalviewTimAuditLastName"
                                className="form-control"
                                placeholder="Doe"
                                value="Barton"
                                data-msg="Please enter your last name"
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <label className="form-label" htmlFor="modalviewTimAuditName">
                                Standar yang digunakan
                            </label>
                            <input
                                type="text"
                                id="modalviewTimAuditName"
                                name="modalviewTimAuditName"
                                className="form-control"
                                value="gertrude.dev"
                                placeholder="john.doe.007"
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <label className="form-label" htmlFor="modalviewTimAuditName">
                                Nama Program Studi
                            </label>
                            <input
                                type="text"
                                id="modalviewTimAuditName"
                                name="modalviewTimAuditName"
                                className="form-control"
                                value="gertrude.dev"
                                placeholder="john.doe.007"
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <label className="form-label" htmlFor="modalviewTimAuditEmail">
                                Ruang Lingkup
                            </label>
                            <input
                                type="text"
                                id="modalviewTimAuditEmail"
                                name="modalviewTimAuditEmail"
                                className="form-control"
                                value="gertrude@gmail.com"
                                placeholder="example@domain.com"
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <label className="form-label" htmlFor="modalviewTimAuditStatus">
                                Tanggal Audit
                            </label>
                            <select
                                id="modalviewTimAuditStatus"
                                name="modalviewTimAuditStatus"
                                className="form-select"
                                aria-label="Default select example"
                            >
                                <option selected>Status</option>
                                <option value="1">Active</option>
                                <option value="2">Inactive</option>
                                <option value="3">Suspended</option>
                            </select>
                        </div>
                        <div className="col-12 col-md-6">
                            <label className="form-label" htmlFor="modalEditTaxID">
                                Ketua Auditor
                            </label>
                            <input
                                type="text"
                                id="modalEditTaxID"
                                name="modalEditTaxID"
                                className="form-control modal-edit-tax-id"
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <label className="form-label" htmlFor="modalviewTimAuditCountry">
                                Anggota Auditor
                            </label>
                            <select
                                id="modalviewTimAuditCountry"
                                name="modalviewTimAuditCountry"
                                className="select2 form-select"
                            >
                                <option value="">Admin</option>
                                <option value="Australia">Australia</option>
                                <option value="Bangladesh">Bangladesh</option>
                            </select>
                        </div>
                        <div className="col-12 col-md-6">
                            <label className="form-label" htmlFor="modalEditTaxID">
                                Auditee
                            </label>
                            <input
                                type="text"
                                id="modalEditTaxID"
                                name="modalEditTaxID"
                                className="form-control modal-edit-tax-id"
                            />
                        </div>
                        <div className="col-12 text-center mt-2 pt-50">
                            <button type="submit" className="btn btn-primary me-1">
                                Submit
                            </button>
                            <button
                                type="reset"
                                className="btn btn-outline-secondary"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                Discard
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
