import { useState, useEffect, useContext, useRef } from 'react';
import pityContext from '../context/pityContext';

import imgLoad from '../functions/imgDisplay';

import './css/Wish.scss';

let baseUrl =
	process.env.NODE_ENV === 'development'
		? 'http://localhost:5000'
		: 'https://resyfer-genshin-wish-sim.herokuapp.com';

const bgPicUrl =
	'https://lh3.googleusercontent.com/pw/AM-JKLWF5-BoKknZMrKSOju1XQt5GIzYI5iDy1Fw7ldRkT2XKd-b0CD6df9zSH7nw383GLROAr7W2a6fAFdbJSdaUX7O6FJAihpNYcOLXJ2xgtbZy0ROclFG0UOMrMRHw_XfCst0JCHwn6tN0_s-UtuWbC16=w1366-h768-no';

const pullBgPicUrl =
	'https://lh3.googleusercontent.com/pw/AM-JKLVEYa0ustrf_HYFgaDiAudIXQrWczEungBqhfvgZmQ0aWCmIqLe_qUsEuM8fEoyQjMKVy1L4zDQkxQt5fnC2MIORrIbbseQPwjZmsjhbdbXP3vjt92yEo9VKJD7M4Gb-UPd3aj6puRBqdQDs34k0nA-=w1243-h699-no';

const Wish = props => {
	const [pulls, setPulls] = useState(null);
	const [videoUrl, setVideoUrl] = useState(null);

	const wishBgPic = useRef();

	const { pity, setPity } = useContext(pityContext);

	useEffect(() => {
		(async () => {
			let fetchDate = await fetch(
				`${baseUrl}/api/v1/${props.pulls}/${pity.pity5.value}/${pity.pity5.guarantee}/${pity.pity4.value}/${pity.pity4.guarantee}`
			);
			let fetchJson = await fetchDate.json();

			setPulls(fetchJson.data);
			setVideoUrl(fetchJson.video);

			setPity({
				pity5: {
					value: fetchJson.pity.pity5.value,
					guarantee: fetchJson.pity.pity5.guarantee,
				},

				pity4: {
					value: fetchJson.pity.pity4.value,
					guarantee: fetchJson.pity.pity4.guarantee,
				},
			});
		})();
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='wish'>
			<img
				className='wish-bg-pic'
				ref={wishBgPic}
				src={bgPicUrl}
				alt='Img not supported'
				onLoad={e => imgLoad(e, {})}
			/>
			{videoUrl && (
				<video
					className='pull-video'
					src={videoUrl}
					onEnded={e => {
						e.target.style.display = 'none';
					}}
					onCanPlayThrough={e => {
						wishBgPic.current.style.display = 'none';
						e.target.play();
					}}
				/>
			)}

			<img
				src={pullBgPicUrl}
				alt='Img not supported'
				className='pull-bg'
				onLoad={e => imgLoad(e, {})}
			/>

			{pulls &&
				pulls.map((pull, pullIndex) => (
					<div className='pull' key={pullIndex}>
						{pull.name}
					</div>
				))}
		</div>
	);
};

export default Wish;
