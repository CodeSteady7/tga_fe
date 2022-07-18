// export const AppendScript = scriptToAppend => {
// 	const script = document.createElement("script")
// 	script.src = scriptToAppend
// 	script.async = true
// 	document.body.appendChild(script)
// }

import { useEffect } from "react"
const ImportScript = resourceUrl => {
	useEffect(() => {
		const script = document.createElement("script")
		script.type = "text/javascript"
		script.src = resourceUrl
		script.async = true
		document.body.appendChild(script)
		return () => {
			document.body.removeChild(script)
		}
	}, [resourceUrl])
}
export default ImportScript
