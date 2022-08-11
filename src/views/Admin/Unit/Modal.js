import React from 'react'
import Select from 'react-select'

export default function Modal({isOpen, setIsOpen, validation, input, setInput, userOptions, levelOptions, submitCreate }) {
    const handleChangeType = e => {
        setInput({...input, type: e.target.value})
    }

    return (
    <div className={`modal modal-slide-in fade ${isOpen ? 'show' : ''}`} style={{display: isOpen ? 'block' : 'none'}} id="modals-slide-in">
        <div className="modal-dialog sidebar-lg">
            <form className="add-new-record modal-content pt-0">
                <button
                    type="button"
                    className="btn-close"
                    onClick={() => setIsOpen(false)}
                >
                    ×
                </button>
                <div className="modal-header mb-1">
                    <h5 className="modal-title" id="exampleModalLabel">
                        Tambah Unit Kelembagaan
                    </h5>
                </div>
                {
                    validation.message && (
                        <div className="alert alert-danger">
                            {validation.message}
                        </div>
                    )
                }
                <div className="modal-body flex-grow-1">
                    <div className="mb-1">
                        <label className="form-label" htmlFor="basic-icon-default-post">
                            Nama Unit
                        </label>
                        <input
                            type="text"
                            id="basic-icon-default-post"
                            className="form-control dt-post"
                            placeholder="Nama Unit "
                            aria-label="Web Developer"
                            onChange={e => setInput({...input, name: e.target.value})}
                            value={input.name}
                        />
                    </div>

                    <div className="mb-1">
                        <label className="form-label" htmlFor="basic-icon-default-post">
                            Jenjang
                        </label>
                        <Select 
                            options={levelOptions} 
                            defaultValue={levelOptions[levelOptions.findIndex(level => level.value == "")]} 
                            onChange={e => setInput({...input, level: e.value})}
                        />
                    </div>

                    <div className="mb-1">
                        <label className="form-label" htmlFor="basic-icon-default-post">
                            Nama kepala Unit
                        </label>
                        <Select
                            options={userOptions}
                            autoFocus={true}
                            onChange={e => setInput({...input, user_id: e.value})}
                        />
                        
                    </div>

                    <div className="mb-1">
                        <label className="form-label" htmlFor="basic-icon-default-post">
                            Tipe Unit
                        </label>
                        <div className="table-responsive">
                        <table className="table table-flush-spacing">
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="d-flex">
                                            <div className="form-check me-3 me-lg-5">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="type"
                                                    onChange={handleChangeType}
                                                    value="academic"
                                                />
                                                <label className="form-check-label" htmlFor="userManagementRead">
                                                    {" "}
                                                    Akademik{" "}
                                                </label>
                                            </div>
                                            <div className="form-check me-3 me-lg-5">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="type"
                                                    onChange={handleChangeType}
                                                    value="non_academic"
                                                />
                                                <label className="form-check-label" htmlFor="userManagementWrite">
                                                    {" "}
                                                    Non Akademik{" "}
                                                </label>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </div>

                    <button type="button" className="btn btn-primary data-submit me-1" onClick={e => submitCreate(e)}>
                        Submit
                    </button>
                    <button type="reset" className="btn btn-outline-secondary"  onClick={() => setIsOpen(false)}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}
