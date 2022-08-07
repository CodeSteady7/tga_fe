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
import PeriodeAudit from "views/Admin/PeriodeAudit"
import TimAudit from "views/Admin/TimAudit"
import UnitLembaga from "views/Admin/UnitLembaga"
import TopikInstrumen from "views/Admin/TopikInstrumen"
import PrivateRoute from "Route/PrivateRoute"
import FormAudit from "views/FormAudit"

// <!-- END: Custom CSS-->
function Pages() {
	return (
		<BrowserRouter>
			<Routes>
				{/* <Route path="/admin" element={<Admin />} /> */}
				<Route path="/admin" element={<PrivateRoute><Home /></PrivateRoute> } />
				<Route path="/admin/users" element={<PrivateRoute><Users /></PrivateRoute> } />
				<Route path="/admin/periods" element={<PrivateRoute><PeriodeAudit /></PrivateRoute> } />
				<Route path="/admin/units" element={<PrivateRoute><UnitLembaga /></PrivateRoute> }/>
				<Route path="/admin/instruments" element={<PrivateRoute><TopikInstrumen /></PrivateRoute> } />
				<Route path="/admin/audits" element={<PrivateRoute><TimAudit /></PrivateRoute> } />
				
				<Route path="/auditee" element={<PrivateRoute><FormAudit /></PrivateRoute>} />

				<Route path="/auditor" element={<PrivateRoute><Auditor /></PrivateRoute> } />

				<Route path="/manager" element={<PrivateRoute> <Manager /></PrivateRoute>} />

				<Route path="/login/*" element={<Login />} />
				<Route path="/berita/*" element={<HalamanUtama />} />

				<Route path="/" element={<Navigate from="/" to="/berita" />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Pages
