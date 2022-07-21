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
import PeriodeAudit from "views/Admin/PeriodeAudit"

// <!-- END: Custom CSS-->
function Pages() {
	return (
		<BrowserRouter>
			<data />
			<Routes>
				{/* <Route path="/admin" element={<Admin />} /> */}
				<Route path="/admin" element={<Home />} />
				<Route path="/auditi" element={<Audit />} />
				<Route path="/manager" element={<Manager />} />
				<Route path="/auditor" element={<Auditor />} />

				<Route path="/admin/periodeaudit" element={<PeriodeAudit />} />
				<Route path="/admin/users" element={<Users />} />
				<Route path="/admin/addimage" element={<AddImage />} />
				<Route path="/login/*" element={<Login />} />
				<Route path="/berita/*" element={<HalamanUtama />} />

				<Route path="/" element={<Navigate from="/" to="/berita" />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Pages
