import React, { useContext } from "react"
import { Route, Routes, Navigate, useLocation } from "react-router-dom"
import Footer from "../components/Footer/Footer.js"
import Header from "../components/Header/Header.js"
import Navbar from "../components/Navbar/Navbar.js"
import routes from "../router"

function Admin() {
	const getRoutes = routes => {
		return routes.map((prop, key) => {
			return <Route path={prop.path} element={prop.component} key={key} />
		})
	}

	const getBrandText = path => {
		for (let i = 0; i < routes.length; i++) {
			if (
				window.location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1
			) {
				return routes[i].list
			}
		}
		return "Brand"
	}

	return (
		<>
			<Navbar routes={routes} />
			{/* <Header brandText={getBrandText} /> */}
			<Routes>{getRoutes(routes)}</Routes>
			{/* <div style={{ margin: "auto" }}> */}
			{/* <Footer /> */}
			{/* </div> */}
			<Header />
		</>
	)
}

export default Admin
