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
import Modal from "./Topic/Modal"

function TopikInstrumen() {
	const [isMainPage, setIsMainPage ] = useState(true)
	const [periodOptions, setPeriodOptions] = useState([])
	const [subTopicInput, setSubTopicInput] = useState('')
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
			
		});
	}

	const getInstrumentTopics = async () => {
		await Instrument.getAllTopic()
		.then((response) => {
			setTopicList(response.data.result)
		}).catch((error) => {
			
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
			<div
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
			</div>
			<Modal 
				isOpen = {isOpen}
				setIsOpen = {setIsOpen}
				validation = {validation}
				name = {name}
				setName = {setName}
				periodOptions = {periodOptions}
				setPeriod = {setPeriod}
				subTopicInput = {subTopicInput}
				setSubTopicInput = {setSubTopicInput}
				addSubTopicList = {addSubTopicList}
				subTopicList = {subTopicList}
				removeSubTopicList = {removeSubTopicList}
				handleSubmit = {handleSubmit}
			/>
		</>	
	)
}

export default TopikInstrumen
