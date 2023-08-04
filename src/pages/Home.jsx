import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useContext, useEffect, useRef } from 'react';
import { ImageContext } from '../../context/ImageContextProvider';

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };
const transition2 = { duration: 1.6, ease: [0.6, 0.08, 0.12, 1] };

const Home = ({ imageDimensions }) => {
	const imageRef = useRef();
	const { setYPos } = useContext(ImageContext);

	useEffect(() => {
		setYPos(imageRef.current.getBoundingClientRect().top);
	}, []);

	return (
		<main className='h-screen absolute w-full'>
			<section className='w-full h-full'>
				<div className='container h-full flex flex-col items-center justify-center'>
					<motion.div
						ref={imageRef}
						transition={transition2}
						className='w-full overflow-hidden relative'
						style={{ maxWidth: `${imageDimensions.width}px`, height: `${imageDimensions.height}px` }}>
						<motion.div whileHover={{ scale: 1.1 }} transition={transition} className='w-full h-full absolute'>
							<Link to='/macbook/macbook-air-15'>
								<motion.img
									transition={transition2}
									src='/images/macbook.webp'
									alt=''
									className='w-full h-full absolute object-cover object-center'
								/>
							</Link>
						</motion.div>
					</motion.div>
					{/* <motion.div
						className='w-full flex items-center justify-between mt-5'
						style={{ maxWidth: `${imageDimensions.width}px` }}>
						<motion.p exit={{ opacity: 0 }} transition={transition} className='text-sm md:text-base'>
							Impossibly big.
						</motion.p>
						<motion.p exit={{ opacity: 0 }} transition={transition} className='text-sm md:text-base'>
							Impossibly thin.
						</motion.p>
					</motion.div> */}
				</div>
			</section>
		</main>
	);
};

Home.propTypes = {
	imageDimensions: PropTypes.objectOf(PropTypes.number),
};

export default Home;
