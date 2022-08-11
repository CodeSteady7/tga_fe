import React from 'react'

export default function Modal({isOpen, setIsOpen, nampungData, update, setPeriod, handleOnEdit, handleCreate, handleClose}) {
  return (
    <div
        className={`modal modal-slide-in fade ${isOpen ? "show" : ""}`}
        style={{
            display: isOpen ? "block" : "none",
        }}
    >
        <div className="modal-dialog sidebar-sm">
            <form className="add-new-record modal-content pt-0">
                <div className="modal-header mb-1">
                    <h5 className="modal-title" id="exampleModalLabel">
                        Tambah Data Periode
                    </h5>
                </div>
                <div className="modal-body flex-grow-1">
                    <div className="mb-1">
                        <label className="form-label" htmlFor="basic-icon-default-post">
                            Periode
                        </label>
                        <input
                            type="text"
                            id="basic-icon-default-post"
                            className="form-control dt-post"
                            placeholder={update ? nampungData.name : ""}
                            aria-label="Web Developer"
                            onChange={e => setPeriod(e.target.value)}
                        />
                    </div>

                    <button
                        type="button"
                        className="btn btn-primary data-submit me-1"
                        onClick={update ? e => handleOnEdit(e) : e => handleCreate(e)}
                    >
                        {update ? "Update" : "Submit"}
                    </button>
                    <button
                        type="reset"
                        className="btn btn-outline-secondary"
                        onClick={e => handleClose()}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}
