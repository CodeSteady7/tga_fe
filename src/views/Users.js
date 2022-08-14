import React, {
	useContext,
	useEffect,
	useState,
} from "react"
import User from "services/User"
import Header from "../components/Header/Header"
import Navbar from "../components/Navbar/Navbar"
import Modal from "./Admin/User/Modal"
import Card from "./Admin/User/Card"
import List from "./Admin/User/List"
import Report from "services/Report"

function Users() {

	const [users, setUsers] = useState([])
	const [dataUpdate, setDataUpdate] = useState()
	const [openEdit, setOpenEdit] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const [total, setTotal] = useState({
        manager: 0,
        auditor: 0,
        academic: 0,
        non_academic: 0
    })

	const setShowUpdate = (prop) => {
		setDataUpdate(prop)
		setOpenEdit(true)
		setIsOpen(true)
	}

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


	const getUsers = async (params = {}) => {
		await User.getAll(params)
			.then(response => {
				setUsers(response.data.result)
			})
			.catch(error => {

			})
	}

	const openClose = () => {
		setIsOpen(false)
		setOpenEdit(false)
		setUser({
			name: "",
			email: "",
			password: "",
			role: "manager",
			nip: "",
		})
	}

	const onDelete = async (prop) => {
		await User.destroy({ id: prop.id }).then(response => {
			console.log(response)
			setIsOpen(false)
			getUsers()
		})
			.catch(error => { console.log(error) });
	}

	useEffect(() => {
		getUsers()
	}, [])

	return (
		<>
			<Header />
			<Navbar />
			<div
				className="vertical-layout vertical-menu-modern navbar-floating footer-static"
				data-open="click"
				data-menu="vertical-menu-modern"
				data-col=""
			>
				<div
					className="app-content content "
					style={{
						MarginBottom: "30px !important",
					}}
				>
					<div className="content-overlay"></div>
					<div className="header-navbar-shadow"></div>
					<div className="content-wrapper container-xxl p-0">
						<div className="content-header row"></div>
						<div className="content-body">
							<Card setIsOpen={setIsOpen} total={total} totalData={totalData} />
							<h3 className="mt-50">
								List Data Users
							</h3>

							<List users={users} setShowUpdate={setShowUpdate} onDelete={onDelete} />
						</div>
					</div>
				</div>
			</div>
			<Modal isOpen={isOpen} setIsOpen={setIsOpen} getUsers={getUsers} setOpenEdit={openEdit} setDataUpdate={dataUpdate} totalData={totalData} openClose={openClose} />
		</>
	)
}

export default Users
