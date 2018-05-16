import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflowY: 'auto', height:'auto'}}>
			{props.children}
		</div>
	);
};

export default Scroll;