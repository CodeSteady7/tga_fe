import React from 'react'
import { Plus, Trash } from 'react-feather'
import Select from 'react-select'

export default function Modal({isOpen, setIsOpen, validation, name, setName, periodOptions, setPeriod, subTopicInput, setSubTopicInput, addSubTopicList, subTopicList, removeSubTopicList, handleSubmit }) {
  return (
    <div className={`modal modal-slide-in fade ${isOpen ? 'show' : ''}`} style={{display: isOpen ? 'block' : 'none'}} id="modals-slide-in">
        <div className="modal-dialog sidebar-sm">
            <form className="add-new-record modal-content pt-0">
                <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={ () => setIsOpen(false)}
                    >
                    ×
                </button>
                <div className="modal-header mb-1">
                    <h5 className="modal-title" id="exampleModalLabel">
                        Tambah Data
                    </h5>
                </div>
                {validation.message && (
                    <div className="alert alert-danger">
                        {validation.message}
                    </div>
                )}
                <div className="modal-body flex-grow-1">
                    <div className="mb-1">
                        <label className="form-label" htmlFor="basic-icon-default-post">
                            Topik
                        </label>
                        <input
                            type="text"
                            id="basic-icon-default-post"
                            className="form-control dt-post"
                            placeholder="Topik "
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>

                    <div className="mb-1">
                        <label className="form-label" htmlFor="basic-icon-default-post">
                            Periode
                        </label>
                        <Select 
                            options={periodOptions} 
                            onChange={e => setPeriod(e.value)}
                        />
                    </div>

                    <div className="mb-1">
                        <label className="form-label" htmlFor="basic-icon-default-post">
                            Sub Topik
                        </label>
                        <div className="input-group mb-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Sub Topik" 
                                value={subTopicInput} 
                                onChange={e => setSubTopicInput(e.target.value)} />
                            <div className="input-group-append">
                                <button className="input-group-text" id="basic-addon1" onClick={e => addSubTopicList(e)}>
                                    <Plus color="#28c76f" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mb-5" >
                        <table className="dt-multilingual table">
                            <tbody>
                                {
                                    subTopicList.map(((prop, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{prop}</td>
                                                <td align="right">
                                                    <button className="btn btn-sm btn-outline-danger" onClick={e => removeSubTopicList(e, index)} >
                                                        <Trash color="red" size={15} />
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    }))
                                }
                            </tbody>
                        </table>
                    </div>

                    <button type="button" className="btn btn-primary data-submit me-1" onClick={e => handleSubmit(e)}>
                        Submit
                    </button>
                    <button type="reset" className="btn btn-outline-secondary" onClick={ () => setIsOpen(false)} data-bs-dismiss="modal">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}
