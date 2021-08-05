import { useState, useEffect, useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
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

let pullsArr;

const Wish = props => {
	const history = useHistory();

	const [pulls, setPulls] = useState(null);
	const [videoUrl, setVideoUrl] = useState(null);
	const [loading, setLoading] = useState(true);

	const homeBgPic = useRef();
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

	useEffect(() => {
		pullsArr = document.getElementsByClassName('pull');
		for (let i = 0; i < pullsArr.length; i++) {
			pullsArr[i].addEventListener('click', () => {
				pullsArr[i].style.display = 'none';
				if (i !== pullsArr.length - 1) {
					pullsArr[i + 1].style.display = 'block';
				} else history.go(-1);
			});
		}
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pullsArr]);

	return (
		<div className='wish'>
			<img
				className='wish-bg-pic'
				ref={homeBgPic}
				src={bgPicUrl}
				alt='Img not supported'
				onLoad={e => imgLoad(e, {})}
			/>

			{loading && <div className='loading'>Loading...</div>}

			{videoUrl && (
				<video
					className='pull-video'
					src={videoUrl}
					onEnded={e => {
						e.target.style.display = 'none';
						pullsArr[0].style.display = 'block';
					}}
					onCanPlayThrough={e => {
						homeBgPic.current.style.display = 'none';
						wishBgPic.current.style.display = 'block';
						setLoading(false);
						e.target.play();
					}}
				/>
			)}

			<img
				src={pullBgPicUrl}
				ref={wishBgPic}
				alt='Img not supported'
				className='pull-bg'
			/>

			{pulls &&
				pulls.map((pull, pullIndex) => (
					<div className='pull' key={pullIndex}>
						{pull.name}
						<img src={pull.img} alt='Img not supported' />
					</div>
				))}
		</div>
	);
};

export default Wish;
