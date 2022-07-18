import React from "react"
import { DataProvider } from "./GlobalState"
import Pages from "./Pages"

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
