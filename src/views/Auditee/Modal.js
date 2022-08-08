import React from 'react'

export default function Modal() {
    return (
        <div className={`modal  fade ${isOpen ? 'show' : ''}`} style={{display: isOpen ? 'block' : 'none'}} tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-edit-user">
                <div className="modal-content">
                    <div className="modal-body pb-5 px-sm-5 pt-50">
                        <div className="text-center mb-2">
                            <h1 className="mb-1">Tampilan Data Tim Audit</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
