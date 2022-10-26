import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Album } from '../pages/Album';
import { Photo } from '../pages/Photo';


export const MainRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path= "/" element={<Home />} />
				<Route path= "/album/:id" element={<Album />} />
				<Route path= "/photo/:id" element={<Photo />} />
			</Routes>
		</BrowserRouter>
	);
}