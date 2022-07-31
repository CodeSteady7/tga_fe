import React, { useEffect } from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"

// <!-- END: Page CSS-->

// <!-- BEGIN: Custom CSS-->
import Home from "./views/Home"
import Auditor from "./views/Auditor"
import Audit from "./views/Audit"
import Manager from "./views/Manager"
import Login from "./views/Login"
import HalamanUtama from "./views/HalamanUtama"
import Users from "./views/Users"
import AddImage from "./views/AddImage"
import PeriodeAudit from "views/Admin/PeriodeAudit"
import TimAudit from "views/Admin/TimAudit"
import ProgramStudi from "views/Admin/ProgramStudi"
import TopikInstrumen from "views/Admin/TopikInstrumen"
import PrivateRoute from "Route/PrivateRoute"

// <!-- END: Custom CSS-->
function Pages() {
	return (
		<BrowserRouter>
			<Routes>
				{/* <Route path="/admin" element={<Admin />} /> */}
				<Route path="/admin" element={<PrivateRoute><Home /></PrivateRoute> } />
				<Route path="/auditi" element={<PrivateRoute><Audit /></PrivateRoute>} />
				<Route path="/manager" element={<PrivateRoute> <Manager /></PrivateRoute>} />
				<Route path="/auditor" element={<PrivateRoute><Auditor /></PrivateRoute> } />

				<Route path="/admin/periodeaudit" element={<PeriodeAudit />} />
				<Route path="/admin/timaudit" element={<TimAudit />} />
				<Route path="/admin/users" element={<Users />} />
				<Route path="/admin/addimage" element={<AddImage />} />
				<Route path="/admin/progamstudi" element={<ProgramStudi />} />
				<Route path="/admin/topikinstrumen" element={<TopikInstrumen />} />

				<Route path="/login/*" element={<Login />} />
				<Route path="/berita/*" element={<HalamanUtama />} />

				<Route path="/" element={<Navigate from="/" to="/berita" />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Pages
