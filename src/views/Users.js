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

function Users() {
	
	const [users, setUsers] = useState([])

	const [isOpen, setIsOpen] = useState(false)

	const getUsers = async (params = {}) => {
		await User.getAll(params)
			.then(response => {
				setUsers(response.data.result)
			})
			.catch(error => {
				
			})
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
							<Card setIsOpen={setIsOpen} />
							<h3 className="mt-50">
								List Data Users
							</h3>

							<List users={users} />
						</div>
					</div>
				</div>
			</div>
			<Modal isOpen={isOpen} setIsOpen={setIsOpen} getUsers={getUsers} />
		</>
	)
}

export default Users
