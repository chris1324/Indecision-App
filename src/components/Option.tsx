import React from 'react';

interface IProps {
	count: number;
	optionText: string;
	handleDeleteOption: (optionText: string) => void;
}

const Option: React.FC<IProps> = ({ count, optionText, handleDeleteOption }) => (
	<div className="option">
		<p className="option__text">{`${count}. ${optionText}`}</p>
		<button
			className="button button--link"
			type="button"
			onClick={() => handleDeleteOption(optionText)}
		>
			Remove
		</button>
	</div>
);

export default Option;