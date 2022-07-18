import React, { useState, useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { GlobalState } from "../GlobalState"

function PrivateRoute() {
	const state = useContext(GlobalState)
	const [isUser] = state.UserApi.isUser
	console.log("PrivateRoute UserApi", isUser)

	return localStorage.getItem("token") && localStorage.getItem("user") ? (
		<Outlet />
	) : (
		<Navigate to="/berita" />
	)
}

export default PrivateRoute

// return token[0] && localStorage.getItem("user") ? (
