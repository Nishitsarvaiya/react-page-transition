import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className='w-full absolute top-10 md:top-16 z-10'>
			<div className='container'>
				<div className='flex items-center justify-between'>
					<Link to='/' className='font-clash font-medium'>
						Macbook Air
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
