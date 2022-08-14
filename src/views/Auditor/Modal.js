import React, { useEffect, useState } from 'react'

export default function Modal({isOpen, setIsOpen, instrumentIndex, input, setInput, inputDescription, setInputDescription}) {
    const handleChange = (event) => {
        let { value, name } = event.target 
        setInputDescription({...inputDescription, [name]: value})
    }

    const submitDescription = () => {
        let newInput    = [...input];
        newInput[instrumentIndex]['description'] = inputDescription
        setInput(newInput);
        setIsOpen(false)
        setInputDescription({
            category: 'KTS Minor',
            finding_description: '',
            root_caused_description: '',
            consequence_description: ''
        })

    }

    useEffect(() => {
        
    }, [])
    
    return (
    <div className={`modal fade ${isOpen ? 'show' : ''}`} style={{display: isOpen ? 'block' : 'none'}} id="modals-slide-in">
        <div className="modal-dialog modal-center modal-md sidebar-sm">
            <form className="add-new-record modal-content pt-0">
                <div className="modal-header mb-1">
                    <h5 className="modal-title" id="exampleModalLabel">
                        Keterangan Ditolak
                    </h5>
                </div>
                <div className="modal-body flex-grow-1">
                    <div className='mb-1'>
                        <div className="d-flex">
                            <div className="form-check me-3 me-lg-5">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name={`category`}
                                    value="kts_mayor"
                                    onChange={handleChange}
                                    checked={inputDescription.category === 'kts_mayor'}
                                />
                                <label
                                    className="form-check-label"
                                >
                                    {" "}
                                    KTS Mayor{" "}
                                </label>
                            </div>
                            <div className="form-check me-3 me-lg-5">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name={`category`}
                                    value="kts_minor"
                                    onChange={handleChange}
                                    checked={inputDescription.category === 'kts_minor'}
                                />
                                <label
                                    className="form-check-label"
                                >
                                    {" "}
                                    KTS Minor{" "}
                                </label>
                            </div>
                            <div className="form-check me-3 me-lg-5">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name={`category`}
                                    value="observasi"
                                    onChange={handleChange}
                                    checked={inputDescription.category === 'observasi'}
                                />
                                <label
                                    className="form-check-label"
                                >
                                    {" "}
                                    Observasi{" "}
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="mb-1">
                        <label className="form-label" htmlFor="basic-icon-default-post">
                            Uraian Temuan
                        </label>
                        <textarea 
                            className='form-control'
                            onChange={handleChange}
                            name='finding_description'
                            value={inputDescription.finding_description}
                        >
                        </textarea>
                    </div>
                    <div className="mb-1">
                        <label className="form-label" htmlFor="basic-icon-default-post">
                            Akar Penyebab
                        </label>
                        <textarea 
                            className='form-control'
                            onChange={handleChange}
                            name='root_caused_description'
                            value={inputDescription.root_caused_description}
                        >
                        </textarea>
                    </div>
                    <div className="mb-1">
                        <label className="form-label" htmlFor="basic-icon-default-post">
                            Akibat
                        </label>
                        <textarea 
                            className='form-control'
                            onChange={handleChange}
                            name='consequence_description'
                            value={inputDescription.consequence_description}
                        >
                        </textarea>
                    </div>

                    <button type="button" className="btn btn-primary data-submit me-1" onClick={submitDescription} >
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
