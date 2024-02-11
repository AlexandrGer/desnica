import React from 'react';
import { Video } from './pages/Video/Video';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Routes>
			<Route path='/video/*' element={<Video />}>
			</Route>
		</Routes>

	);
}

export default App;
