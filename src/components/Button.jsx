import React from 'react';
import classNames from 'classnames';

function Button({ outline, children }) {
	return (
		<button
			className={classNames('button', {
				'button--cart': outline,
			})}>
			{children}
		</button>
	);
}
export default Button;
