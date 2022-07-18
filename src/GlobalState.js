import React, { useState, createContext, useEffect } from "react"
import axios from "axios"
import UserApi from "./networks/UserApi"
// import axios from 'axios';

export const GlobalState = createContext()

export const DataProvider = ({ children }) => {
	const [getUser, setgetUser] = useState("")
	const [token, setToken] = useState("")

	useEffect(() => {
		const getToken = localStorage.getItem("token")
		if (getToken) {
			const refreshToken = async () => {
				const res = await axios.get("http://localhost:4000/users/refresh_token", {
					withCredentials: true,
				})
				setToken(res.data.accesstoken)
			}
			refreshToken()
		}
	}, [])

	console.log("refresh token", token)
	// useEffect(() => {
	// 	const UserAll = async () => {
	// 		const user = await axios.get("http://localhost:4000/users/getall")
	// 		setgetUser(user.data)
	// 		console.log("=>", user.data)
	// 	}
	// 	UserAll()
	// }, [])

	const state = {
		UserApi: UserApi(token),
	}
	return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>
}
