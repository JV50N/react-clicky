// sets up the reusable GameCard Component
import React from 'react';
import './GameCard.css';

// pass the images into each card so all are rendered
const GameCard = props => (
	<div className='card' onClick={props.imageClick}>
		<div className='img-container'>
			<img alt={props.image.replace('.png', '')} src={require('../../images/' + props.image)} className='imageCard' />
		</div>
	</div>
);

export default GameCard;