import { useContext } from 'react';
import { Link } from 'react-router-dom';

import Banner from '../components/Banner';
import pityContext from '../context/pityContext';

import imgLoad from '../functions/imgDisplay';

import './css/Home.scss';

const bigPicUrl =
	'https://lh3.googleusercontent.com/pw/AM-JKLWF5-BoKknZMrKSOju1XQt5GIzYI5iDy1Fw7ldRkT2XKd-b0CD6df9zSH7nw383GLROAr7W2a6fAFdbJSdaUX7O6FJAihpNYcOLXJ2xgtbZy0ROclFG0UOMrMRHw_XfCst0JCHwn6tN0_s-UtuWbC16=w1366-h768-no';
const bannerUrl =
	'https://lh3.googleusercontent.com/pw/AM-JKLXP-eKG-58kUzEcaBADaedBb862kDb8Rgm70ofuYvN2Z1rncBwKLwlEPZ9ES5nhYcw-WEE6N0L2PEQ29yKjB7JHishvaaE_Uz8kRcTFCR3wYUW1LBS6Jn2kEuNRDa-uq6yBQ3xFsvJnpKXROOHkkRAa=w1303-h676-no';
const primosUrl =
	'https://lh3.googleusercontent.com/pw/AM-JKLUgQNlrlYePOnS7Ri6Bv1XbnLFjmw0FUHxbB7OyZ6PeWH95XWtXx4__13qKY7JMzKj5K31JQQD8bwbFV8sK8QL59eCPxjuWz7XlaUv2EoZ2PbzpfdQCXzKdMwhBzcfaZYzfy7t9fxiIujPZ0O2xDWMx=w176-h191-no';
const intFatesUrl =
	'https://lh3.googleusercontent.com/pw/AM-JKLW5RuXyMVbhFQaBBX65YnDZXscfH2xP7EXcOcBLYFoiAaMFndxsl7AQABRi_g6z-IShNM_VkbeF2B7quNAsDDXsXJCSDnu38hS5nzzB0CeNB4DwYphqJvceZITpJWMeYc16Rl3Yq9Bio4Lr1dgCM6tc=w268-h253-no';
const btnUrl =
	'https://lh3.googleusercontent.com/pw/AM-JKLXw4a52xhemctFtxUmqNvEuFOqJU3LAf0VL1RYnxLprfCjhy79vcGfgMGHK3CwGaIh1hfQ88qHsNij_zb5oJTA8BKvAIKAz3sWujEx4YFBmuqj9q0kIqM7mWnmdWUmGjnppBEo-F1moucsjPp9KtGND=w355-h88-no';

const Home = () => {
	const { pity } = useContext(pityContext);
	return (
		<div className='home'>
			<img
				className='bgpic'
				src={bigPicUrl}
				alt='Img not supported'
				onLoad={e => imgLoad(e, {})}
			/>

			<div className='wishes'>
				<div className='primos limit'>
					<img
						className='limit-icon'
						src={primosUrl}
						alt='Img not supported'
						onLoad={e => imgLoad(e, {})}
					/>
					<span className='limit-amount'>∞</span>
				</div>
				<div className='fates limit'>
					<img
						className='limit-icon'
						src={intFatesUrl}
						alt='Img not supported'
						onLoad={e => imgLoad(e, {})}
					/>
					<span className='limit-amount'>∞</span>
				</div>
			</div>

			<div className='pity-counter'>
				5⭐
				<br />
				&emsp;Pity: {pity.pity5.value}
				<br />
				&emsp;Guranteed: {pity.pity5.guarantee ? 'Yes' : 'No'}
				<br />
				<br />
				4⭐
				<br />
				&emsp;Pity: {pity.pity4.value}
				<br />
				&emsp;Guranteed: {pity.pity5.guarantee ? 'Yes' : 'No'}
				<br />
			</div>

			<div className='pulls'>
				<Link className='pull-btn one-pull' to='/one'>
					<img
						src={btnUrl}
						className='pull-btn-img'
						alt='Img not supported'
						onLoad={e => imgLoad(e, {})}
					/>
					<span className='pull-btn-txt'>Wish x 1</span>
					<span className='pull-btn-txt'>
						<img
							className='wish-icon'
							src={intFatesUrl}
							alt='Img not supported'
							onLoad={e => imgLoad(e, {})}
						/>{' '}
						x 1
					</span>
				</Link>

				<Link className='pull-btn ten-pull' to='/ten'>
					<img
						src={btnUrl}
						className='pull-btn-img'
						alt='Img not supported'
						onLoad={e => imgLoad(e, {})}
					/>
					<span className='pull-btn-txt'>Wish x 10</span>
					<span className='pull-btn-txt'>
						<img
							className='wish-icon'
							src={intFatesUrl}
							alt='Img not supported'
							onLoad={e => imgLoad(e, {})}
						/>{' '}
						x 10
					</span>
				</Link>
			</div>

			<Banner url={bannerUrl} />
		</div>
	);
};

export default Home;
