import React from 'react';
import { Route, Routes } from 'react-router';
import { Home } from '../pages/Home';

export function MainRoutes () {
	return (
		<Routes>
			<Route path='/' element={<Home/>}></Route>
		</Routes>
	)
}
