import { useState, useEffect, useContext } from 'react';
import pityContext from '../context/pityContext';

let baseUrl =
	process.env.NODE_ENV === 'development'
		? 'http://localhost:5000'
		: 'https://resyfer-genshin-wish-sim.herokuapp.com';

const Wish = props => {
	const [pulls, setPulls] = useState(null);

	const { pity, setPity } = useContext(pityContext);

	useEffect(() => {
		(async () => {
			let fetchDate = await fetch(
				`${baseUrl}/api/v1/${props.pulls}/${pity.pity5.value}/${pity.pity5.guarantee}/${pity.pity4.value}/${pity.pity4.guarantee}`
			);
			let fetchJson = await fetchDate.json();

			setPulls(fetchJson.data);

			setPity(oldPity => ({
				pity5: {
					value: fetchJson.pity.pity5.value,
					guarantee: fetchJson.pity.pity5.guarantee,
				},

				pity4: {
					value: fetchJson.pity.pity4.value,
					guarantee: fetchJson.pity.pity4.guarantee,
				},
			}));
		})();
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {}, []);
	return (
		<div className='hello'>
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
