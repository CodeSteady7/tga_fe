import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoute({children}) {
	if(!localStorage.getItem('isLogIn')) {
		return <Navigate to="/berita" />
	}

	return children ? children : <Outlet />;
}
