import React, { useState, useEffect } from "react"
import axios from "axios"

function UserApi(token) {
	const [isUser, setisUser] = useState([])
	const [isName, setIsName] = useState("")
	const [isPath, setIsPath] = useState()

	useEffect(() => {
		if (token) {
			const User = async (req, res) => {
				try {
					const res = await axios.get("http://localhost:4000/users/infor", {
						headers: { Authorization: token },
					})
					setisUser(res.data)
					setIsName(res.data)
					setIsPath(res.data)
				} catch (error) {
					alert(error.message)
				}
			}
			User()
		}
	}, [token])

	console.log("data user res", isUser)
	// console.log("data user log", token)
	return {
		path: [isPath, setIsPath],
		name: [isName, setIsName],
		isUser: [isUser, setisUser],
	}
}

export default UserApi
