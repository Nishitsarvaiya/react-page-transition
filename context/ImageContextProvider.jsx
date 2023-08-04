import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ImageContext = createContext({
	yPos: 0,
	setYPos: () => {},
});

const ImageContextProvider = ({ children }) => {
	const [yPos, setYPos] = useState(0);
	return <ImageContext.Provider value={{ yPos, setYPos }}>{children}</ImageContext.Provider>;
};

ImageContextProvider.propTypes = {
	children: PropTypes.node,
};

export default ImageContextProvider;
