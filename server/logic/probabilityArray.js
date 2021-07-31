/*
 * probObjArr = {
 *   value:
 *   probability:
 * }
 */

const probArr = probObjArr => {
	const cumProbArr = []; //! Cumulative Probability Array

	let cumProb = 0;
	for (let i = 0; i < probObjArr.length; i++) {
		for (let j = 0; j < probObjArr[i].chances.length; j++) {
			cumProb += probObjArr[i].chances[j].probability;

			cumProbArr.push({
				value: probObjArr[i].value,
				rateup: probObjArr[i].chances[j].rateup,
				standard: probObjArr[i].chances[j].standard,
				probability: cumProb,
			});
		}
	}

	return cumProbArr;
};

module.exports = {
	probArr,
};
