import React from 'react';
import Card from './Card.js';


const CardList = ({ robots }) => {
	return (
		<div class="mt5 mb5">
			{
				robots.map((user, i) => {
					return (
						<Card 
							key={i} 
							id={robots[i].id} 
							name={robots[i].name} 
							email={robots[i].email}/>
							);
				})
			}
		</div>
	);
}

export default CardList;