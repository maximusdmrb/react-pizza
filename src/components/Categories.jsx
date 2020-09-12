import React, { useState } from 'react';

function Categories({ items }) {
	const [active, setActive] = useState(null);

	const onSelectItem = (index) => {
		setActive(index);
	};

	return (
		<div className="categories">
			<ul>
				<li className={active === null ? 'active' : ''} onClick={() => setActive(null)}>
					Все
				</li>
				{items &&
					items.map((item, index) => (
						<li
							className={active === index ? 'active' : ''}
							onClick={() => onSelectItem(index)}
							key={item}>
							{item}
						</li>
					))}
			</ul>
		</div>
	);
}

export default Categories;
