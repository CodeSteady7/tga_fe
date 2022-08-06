import React, { useEffect, useState } from "react"
import Header from "components/Header/Header"
import Navbar from "components/Navbar/Navbar"
import { Plus, Trash } from "react-feather"
import Select from 'react-select'
import Period from "services/Period"
import Instrument from "services/Instrument"
import List from "./Topic/List"
import InstrumentList from "./Topic/InstrumentList"
import id from "date-fns/locale/id/index"

function TopikInstrumen() {
	const [isMainPage, setIsMainPage ] = useState(true)
	const [periodOptions, setPeriodOptions] = useState([])
	const [subTopicInput, setSubTopicInput] = useState()
	const [subTopicList, setSubTopicList] = useState([])
	const [name, setName] = useState('')
	const [period, setPeriod] = useState('') 
	const [topicList, setTopicList] = useState([])
	const [validation, setValidation] = useState([])
	const [isOpen, setIsOpen] = useState(false)
	const [subTopicID, setSubTopicID] = useState('')
	
	const showInstrument = (id) => {
		setIsMainPage(false)
		setSubTopicID(id)
	}

	const getPeriods = async () => {
		await Period.getAll()
		.then((response) => {
			const periods = response.data.result.map((prop, index) => {
				return {
					value: prop.id,
					label: `Periode ${prop.name}`
				}
			})

			setPeriodOptions(periods)

		}).catch((error) => {
			if(error.response.status === 401) {
				localStorage.removeItem('token');
				localStorage.removeItem('role');
				localStorage.removeItem('isLogIn', false);
				window.location.href = '/login'
			}
		});
	}

	const getInstrumentTopics = async () => {
		await Instrument.getAllTopic()
		.then((response) => {
			console.log(response)
			setTopicList(response.data.result)
		}).catch((error) => {
			if(error.response.status === 401) {
				localStorage.removeItem('token');
				localStorage.removeItem('role');
				localStorage.removeItem('isLogIn', false);
				window.location.href = '/login'
			}
		});
	}

	const addSubTopicList = (e) => {
		e.preventDefault()
		setSubTopicList([...subTopicList, subTopicInput])
		setSubTopicInput('')
	}

	const removeSubTopicList = (e, index) => {
		e.preventDefault()
		let newSubTopicList = [...subTopicList]
		newSubTopicList.splice(index, 1)
		setSubTopicList(newSubTopicList)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		let data = {
			name: name,
			period_id: period,
			sub_topics: subTopicList
		}

		await Instrument.createTopic(data).then((result) => {
			getInstrumentTopics()
			setIsOpen(false)
			setName('')
			setPeriod('')
			setSubTopicList([])
		}).catch(error => {
			setValidation(error.response.data)
		})
		
	}

	useEffect(() => {
	  getPeriods()
	  getInstrumentTopics()
	}, [])
	
	return (
		<>
			<body
				className="vertical-layout vertical-menu-modern  navbar-floating footer-static  "
				data-open="click"
				data-menu="vertical-menu-modern"
				data-col=""
			>
				<Header />
				<Navbar />

				<div className="app-content content ">
					<div className="content-overlay"></div>
					<div className="header-navbar-shadow"></div>
					<div className="content-wrapper container-xxl p-0">
						<div className="content-body">
							<section id="basic-datatable">
								{isMainPage ? (
									<div className="row">
										<div className="col-12">
											<div className="card">
												<div className="card-header border-bottom">
													<h4 className="card-title">Data Topik Instrumen</h4>
													<button
														className="btn btn-primary btn-round btn-sm "
														type="button"
														onClick={e => setIsOpen(true)}
													>
														<div className="d-flex align-items-center">
															<Plus color="#ffff" size={15} />
															Tambah Data
														</div>
													</button>
												</div>
												<List topicList={topicList} showInstrument={showInstrument} />
											</div>
										</div>
									</div>
								) : (
									<InstrumentList subTopicID={subTopicID} setIsMainPage={setIsMainPage} />
								)}
							</section>
						</div>
					</div>
				</div>
			</body>

			{/* <!-- Modal to add new record --> */}
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
									<input type="text" className="form-control" placeholder="Sub Topik" value={subTopicInput} onChange={e => setSubTopicInput(e.target.value)} />
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
		</>	
	)
}

export default TopikInstrumen
