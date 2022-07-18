import React, { useContext } from "react"
import { GlobalState } from "../GlobalState"
function Url() {
	const state = useContext(GlobalState)
	const [isName] = state.UserApi.name
	let element = null
	let path = null
	console.log("data isname", isName.path)

	if (isName.role === "Manager") {
		path = "manager/*"
		element = ""
	} else if (isName.role === "Auditor") {
		path = "auditor/*"
		element = ""
	} else if (isName.role === "Prodi") {
		path = "prodi/*"
		element = ""
	} else if (isName.role === "Non Akademi") {
		path = "/nonakademik"
		element = ""
	} else if (isName.role === "Admin") {
		path = "admin/*"
		element = ""
	}

	// console.log(path)
	let dataUser = {
		path: path,
		element: element,
		role: isName.role,
	}
	return dataUser
}

export default Url
