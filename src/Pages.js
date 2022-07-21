import React, { useEffect } from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"

// <!-- END: Page CSS-->

// <!-- BEGIN: Custom CSS-->
import Home from "./views/Home"
import Auditor from "./views/Auditor"
import Audit from "./views/Audit"
import Manager from "./views/Manager"
import ImportScript from "./ImportScript"
import Login from "./views/Login"
import HalamanUtama from "./views/HalamanUtama"
import Users from "./views/Users"
import PrivateRoute from "./Route/PrivateRoute"
import AuthRoute from "./Route/AuthRoute"
import Url from "./utils/Url"
import AddImage from "./views/AddImage"
import Admin from "./layout/Admin"
// <!-- END: Custom CSS-->
function Pages() {
	const data = new Url()

	return (
		<BrowserRouter>
			<data />
			<Routes>
				{/* <Route path="/admin" element={<Admin />} /> */}
				<Route path="/admin" element={<Home />} />
				<Route path="/auditor" element={<Auditor />} />
				<Route path="/audit" element={<Audit />} />
				<Route path="/manager" element={<Manager />} />

				<Route path="/users" element={<Users />} />
				<Route path="/addimage" element={<AddImage />} />
				<Route path="/login/*" element={<Login />} />
				<Route path="/berita/*" element={<HalamanUtama />} />

				<Route path="/" element={<Navigate from="/" to="/berita" />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Pages
