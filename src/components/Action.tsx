import React from 'react';

interface IProps {
	handlePick: () => void;
	hasOptions: boolean;
}

const Action: React.FC<IProps> = ({ handlePick, hasOptions }) => (
	<div>
		<button
			className="big-button"
			disabled={!hasOptions}
			type="button"
			onClick={handlePick}
		>
			What should i do?
		</button>
	</div>
);

export default Action;