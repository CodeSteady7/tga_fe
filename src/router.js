import AddImage from "./views/AddImage"
import HalamanUtama from "./views/HalamanUtama"
import Home from "./views/Home"
import Users from "./views/Users"

let routes = [
	{
		path: "/manager",
		name: "Dashboard",
		icon: "",
		component: <Home />,
		layout: "/manager",
		use: true,
		api: false,
	},
	{
		path: "/users",
		name: "User",
		icon: "",
		component: <Users />,
		layout: "/manager",
		use: false,
		api: true,
	},
	{
		path: "/addimage",
		name: "Add Image",
		icon: "",
		component: <AddImage />,
		layout: "/manager",
		use: false,
		api: true,
	},

	// {
	// 	path: "/",
	// 	name: "Dashboard",
	// 	icon: "",
	// 	component: <Home />,
	// 	layout: "/manager",
	// 	use: true,
	// 	api: false,
	// },

	// {
	// 	path: "/",
	// 	name: "LandingPage",
	// 	icon: "",
	// 	component: <HalamanUtama />,
	// 	layout: "/berita",
	// },
]

export default routes
