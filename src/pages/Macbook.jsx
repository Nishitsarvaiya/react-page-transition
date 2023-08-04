import { motion, useScroll, useTransform } from 'framer-motion';
import PropTypes from 'prop-types';
import { useContext, useEffect, useRef, useState } from 'react';
import { ImageContext } from '../../context/ImageContextProvider';

const transition = { duration: 1.6, ease: [0.6, 0.08, 0.12, 1] };
const transition2 = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const title = {
	initial: {
		y: 0,
	},
	animate: {
		y: 0,
		transition: {
			delayChildren: 0.6,
			staggerChildren: 0.028,
			staggerDirection: 1,
		},
	},
};

const subtitle = {
	initial: {
		y: 0,
	},
	animate: {
		y: 0,
		transition: {
			delayChildren: 0.8,
			staggerChildren: 0.2,
			staggerDirection: 1,
		},
	},
};

const letter = {
	initial: {
		y: '100%',
	},
	animate: {
		y: 0,
		transition: transition,
	},
};

const Macbook = ({ imageDimensions }) => {
	const [dynamicImageHeight, setDynamicImageHeight] = useState('100%');
	const [canScroll, setCanScroll] = useState(false);
	const { scrollYProgress } = useScroll();
	const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
	const { yPos } = useContext(ImageContext);

	console.log(yPos);

	useEffect(() => {
		const handleWindowResize = () => {
			if (window.innerWidth < 1024) {
				setDynamicImageHeight(560);
			} else if (window.innerWidth < 768) {
				setDynamicImageHeight(400);
			}
		};
		window.addEventListener('resize', handleWindowResize, { passive: true });

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	useEffect(() => {
		if (canScroll === false) {
			document.querySelector('body').classList.add('overflow-hidden');
		} else {
			document.querySelector('body').classList.remove('overflow-hidden');
		}
	}, [canScroll]);
	return (
		<>
			<motion.main
				className='h-full w-full'
				initial='initial'
				animate='animate'
				exit='exit'
				onAnimationComplete={() => setCanScroll(true)}>
				<section className='hidden lg:block pt-60'>
					<motion.div className='container'>
						<motion.div className='max-w-none lg:max-w-[50%] mt-10 md:mt-20'>
							<motion.h1 className='font-medium mb-5 overflow-hidden' variants={title}>
								<motion.span variants={letter} className='inline-block'>
									M
								</motion.span>
								<motion.span variants={letter} className='inline-block'>
									a
								</motion.span>
								<motion.span variants={letter} className='inline-block'>
									c
								</motion.span>
								<motion.span variants={letter} className='inline-block'>
									b
								</motion.span>
								<motion.span variants={letter} className='inline-block'>
									o
								</motion.span>
								<motion.span variants={letter} className='inline-block'>
									o
								</motion.span>
								<motion.span variants={letter} className='inline-block'>
									k
								</motion.span>
								<motion.span> </motion.span>
								<motion.span variants={letter} className='inline-block'>
									A
								</motion.span>
								<motion.span variants={letter} className='inline-block'>
									i
								</motion.span>
								<motion.span variants={letter} className='inline-block'>
									r
								</motion.span>
								<motion.span> </motion.span>
								<motion.span variants={letter} className='inline-block'>
									1
								</motion.span>
								<motion.span variants={letter} className='inline-block'>
									5
								</motion.span>
								<motion.span variants={letter} className='inline-block'>
									”
								</motion.span>
							</motion.h1>
							<motion.h3 className='text-lg md:text-2xl font-medium mb-4' variants={subtitle}>
								<div className='overflow-hidden'>
									<motion.div variants={letter}>Impossibly big.</motion.div>
								</div>
								<div className='overflow-hidden'>
									<motion.div variants={letter}>Impossibly thin.</motion.div>
								</div>
							</motion.h3>
							<motion.p
								className='text-sm md:text-base'
								style={{ textWrap: 'balance' }}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1, transition: { delay: 1.6, duration: 0.6, ...transition } }}>
								The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display. And
								with the 13-inch MacBook Air, you have more reasons than ever to choose Air. Supercharged by the M2 chip —
								and with up to 18 hours of battery life — both laptops deliver blazing-fast performance in an ultra-portable
								design.
							</motion.p>
						</motion.div>
					</motion.div>
					<motion.div
						className='hidden lg:block mx-auto overflow-hidden absolute'
						layoutId='image-wrapper'
						initial={{
							top: '50%',
							left: '50%',
							right: 'auto',
							x: '-50%',
							y: '-50%',
							width: imageDimensions.width,
							height: imageDimensions.height,
						}}
						animate={{
							top: 0,
							left: 'auto',
							right: 0,
							x: 0,
							y: 0,
							width: '40%',
							height: dynamicImageHeight,
						}}
						transition={{ delay: 0.2, ...transition }}>
						<motion.div className='w-full h-full' whileHover='hover' transition={transition}>
							<motion.img
								src='/images/macbook.webp'
								alt=''
								className='w-full h-full object-cover object-center'
								initial={{ scale: 1.1 }}
								animate={{ scale: 1 }}
								// style={{ scale: scale }}
							/>
						</motion.div>
					</motion.div>
				</section>
				<section className='lg:hidden pt-[50%] pb-[200px]'>
					<motion.div className='container'>
						<motion.h1 className='text-center font-medium mb-8 overflow-hidden' variants={title}>
							<motion.span variants={letter} className='inline-block'>
								M
							</motion.span>
							<motion.span variants={letter} className='inline-block'>
								a
							</motion.span>
							<motion.span variants={letter} className='inline-block'>
								c
							</motion.span>
							<motion.span variants={letter} className='inline-block'>
								b
							</motion.span>
							<motion.span variants={letter} className='inline-block'>
								o
							</motion.span>
							<motion.span variants={letter} className='inline-block'>
								o
							</motion.span>
							<motion.span variants={letter} className='inline-block'>
								k
							</motion.span>
							<motion.span> </motion.span>
							<motion.span variants={letter} className='inline-block'>
								A
							</motion.span>
							<motion.span variants={letter} className='inline-block'>
								i
							</motion.span>
							<motion.span variants={letter} className='inline-block'>
								r
							</motion.span>
							<motion.span> </motion.span>
							<motion.span variants={letter} className='inline-block'>
								1
							</motion.span>
							<motion.span variants={letter} className='inline-block'>
								5
							</motion.span>
							<motion.span variants={letter} className='inline-block'>
								”
							</motion.span>
						</motion.h1>
						<motion.div
							className='mx-auto overflow-hidden w-full'
							initial={{
								y: 0,
								height: imageDimensions.height,
							}}
							animate={{
								y: 0,
								height: dynamicImageHeight,
							}}
							transition={{ delay: 0.2, ...transition }}>
							<motion.div className='w-full h-full' whileHover='hover' transition={transition}>
								<motion.img
									src='/images/macbook.webp'
									alt=''
									className='w-full h-full object-cover object-center'
									initial={{ scale: 1.1 }}
									style={{ scale: scale }}
								/>
							</motion.div>
						</motion.div>
					</motion.div>

					<motion.div className='container'>
						<motion.h3 className='text-lg md:text-2xl font-medium my-4' variants={subtitle}>
							<div className='overflow-hidden'>
								<motion.div variants={letter}>Impossibly big.</motion.div>
							</div>
							<div className='overflow-hidden'>
								<motion.div variants={letter}>Impossibly thin.</motion.div>
							</div>
						</motion.h3>
						<motion.p
							className='text-sm md:text-base'
							style={{ textWrap: 'balance' }}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1, transition: { delay: 1.6, duration: 0.6, ...transition } }}>
							The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display. And with
							the 13-inch MacBook Air, you have more reasons than ever to choose Air. Supercharged by the M2 chip — and with
							up to 18 hours of battery life — both laptops deliver blazing-fast performance in an ultra-portable design.
						</motion.p>
					</motion.div>
				</section>
			</motion.main>
		</>
	);
};

Macbook.propTypes = {
	imageDimensions: PropTypes.objectOf(PropTypes.number),
};

export default Macbook;
