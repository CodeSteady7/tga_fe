import React from 'react'

export default function Modal({isOpen, setIsOpen}) {
    return (
        <div className={`modal  fade ${isOpen ? 'show' : ''}`} style={{display: isOpen ? 'block' : 'none'}} tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-lg ">
                <div className="modal-content">
                    <div className='modal-header'>
                        <div className="modal-title text-center mb-2">
                            Tampilan Data Tim Audit
                        </div>
                    </div>
                    <div className="modal-body pb-5 px-sm-5 pt-50">
                    </div>
                </div>
            </div>
        </div>
    )
}
