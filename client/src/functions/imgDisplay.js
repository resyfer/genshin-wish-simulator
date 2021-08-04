const imgDisplay = (target, style) => {
	target.style.display = 'block';
	target.style.animationName = style.animationName || 'none';
};

const imgLoad = (e, style) => {
	e.target.complete && imgDisplay(e.target, style);
};

export default imgLoad;
