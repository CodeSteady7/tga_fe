import React from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Home from "./src/views/Home"

function Pages() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Pages
