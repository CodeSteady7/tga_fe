import React, { useContext } from "react"
import Url from "../utils/Url"
import { Navigate, Outlet, Route } from "react-router-dom"
import { GlobalState } from "../GlobalState"

function AuthRoute() {
	const state = useContext(GlobalState)
	const [isUser] = state.UserApi.isUser
	let alamat = isUser.path
	// let navigate = Navigate()
	console.log("AuthRoute UserApi", alamat)
	// const data = new Url()
	// let tempPath = data.path
	const url = new Url()

	console.log("URL", url.path)
	return !(localStorage.getItem("token") && localStorage.getItem("user")) ? (
		<Outlet />
	) : (
		// (window.location.href = `${url.path}`)
		// navigate("/nonakademik")
		// <Navigate to={url.path} />
		""
		// <Route element={<Navigate to="/nonakademik" />} />
	)
}

export default AuthRoute
