import React, { useEffect } from "react"
import bootstrap from "bootstrap"
import Pages from "./Pages"
import "./assets/css/bootstrap-extended.css"
import "./assets/assets/css/style.css"
import "./assets/css/bootstrap.css"
import "./assets/css/colors.css"
import "./assets/css/components.css"
import "./assets/vendors/css/tables/datatable/dataTables.bootstrap5.min.css"
import "./assets/vendors/css/tables/datatable/responsive.bootstrap5.min.css"
import "./assets/vendors/css/tables/datatable/buttons.bootstrap5.min.css"
import "./assets/vendors/css/vendors.min.css"
import "./assets/css/themes/bordered-layout.css"
// import "./assets/css/plugins/forms/form-validation.css"

// import "./assets/vendors/js/vendors.min"
// import "./assets/vendors/js/tables/datatable/dataTables.bootstrap5.min"
// import "./assets/vendors/js/tables/datatable/dataTables.responsive.min"

// import "./assets/vendors/css/tables/datatable/dataTables.bootstrap5.min.css"

function App() {
	useEffect(() => {
		const script = document.createElement("script")
		// script.src = "./app-assets/vendors/js/vendors.min.js"
		script.src = "./assets/vendors/js/vendors.min.js"
		// script.src = "../public/app-assets/vendors/js/vendors.min.js"

		document.body.appendChild(script)
		return () => {
			document.body.removeChild(script)
		}
	}, [])
	return (
		<div>
			<Pages />
		</div>
	)
}

export default App
