import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import Macbook from '../pages/Macbook';
import ImageContextProvider from '../../context/ImageContextProvider';

const Layout = () => {
	const location = useLocation();
	const imageDimensions = {
		width: 750,
		height: 420,
	};

	return (
		<>
			<Header />
			<ImageContextProvider>
				<AnimatePresence mode='wait' initial={true}>
					<Routes key={location.pathname} location={location}>
						<Route exact path='/' element={<Home imageDimensions={imageDimensions} />} />
						<Route exact path='/macbook/:id' element={<Macbook imageDimensions={imageDimensions} />} />
					</Routes>
				</AnimatePresence>
			</ImageContextProvider>
		</>
	);
};

export default Layout;
