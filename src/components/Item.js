import React from 'react';

function Item({ name, category }) {
	const [isInCart, setIsInCart] = React.useState(false);
	const addToCart = () => {
		setIsInCart(!isInCart);
	};
	return (
		<li className={isInCart ? 'in-cart' : ' '}>
			<span>{name}</span>
			<span className="category">{category}</span>
			<button
				className={!isInCart ? 'add' : 'remove'}
				onClick={addToCart}>
				{!isInCart ? 'Add to Cart' : 'Remove From Cart'}
			</button>
		</li>
	);
}

export default Item;
