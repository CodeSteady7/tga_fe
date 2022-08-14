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
import Auditee from "views/Auditee"
import Form from "views/Auditee/Form"
import LaporanAudit from "views/Manager/LaporanAudit"
import FormLaporan from "views/Manager/laporan/FormLaporan"
import Approval from "views/Auditor/Approval"
import Rejected from "views/Auditee/Rejected"
import RejectedDetail from "views/Auditee/RejectedDetail"

// <!-- END: Custom CSS-->
function Pages() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/admin" element={<PrivateRoute><Home /></PrivateRoute>} />
				<Route path="/admin/users" element={<PrivateRoute><Users /></PrivateRoute>} />
				<Route path="/admin/periods" element={<PrivateRoute><PeriodeAudit /></PrivateRoute>} />
				<Route path="/admin/units" element={<PrivateRoute><UnitLembaga /></PrivateRoute>} />
				<Route path="/admin/instruments" element={<PrivateRoute><TopikInstrumen /></PrivateRoute>} />
				<Route path="/admin/audits" element={<PrivateRoute><TimAudit /></PrivateRoute>} />

				<Route path="/auditee" element={<PrivateRoute><Auditee /></PrivateRoute>} />
				<Route path="/auditee/form-audit/:id" element={<PrivateRoute><Form /></PrivateRoute>} />
				<Route path="/auditee/form-rejected" element={<PrivateRoute><Rejected /></PrivateRoute>} />
				<Route path="/auditee/form-rejected/:id" element={<PrivateRoute><RejectedDetail /></PrivateRoute>} />

				<Route path="/auditor" element={<PrivateRoute><Auditor /></PrivateRoute>} />
				<Route path="/auditor/form-approval/:id" element={<PrivateRoute><Approval /></PrivateRoute>} />

				<Route path="/manager" element={<PrivateRoute> <Manager /></PrivateRoute>} />


				<Route path="/manager/laporanaudit" element={<PrivateRoute> <LaporanAudit /></PrivateRoute>} />
				<Route path="/manager/laporanaudit/view" element={<PrivateRoute> <FormLaporan /></PrivateRoute>} />

				<Route path="/login/*" element={<Login />} />
				<Route path="/berita/*" element={<HalamanUtama />} />

				<Route path="/" element={<Navigate from="/" to="/berita" />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Pages
