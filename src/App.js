import React from "react"
import { DataProvider } from "./GlobalState"
import Pages from "./Pages"
import "./assets/css/bootstrap-extended.css"
import "./assets/css/bootstrap.css"
import "./assets/css/colors.css"
import "./assets/css/components.css"

function App() {
	return (
		<div>
			<DataProvider>
				<Pages />
			</DataProvider>
		</div>
	)
}

export default App
