import React from 'react';

export interface OptionModel {
	optionId: number,
	name: string
}

interface IProps {
	count: number;
	option: OptionModel;
	handleDeleteOption: (optionId: number) => void;
}

const Option: React.FC<IProps> = ({ count, option, handleDeleteOption }) => (
	<div className="option">
		<p className="option__text">{`${count}. ${option.name}`}</p>
		<button
			className="button button--link"
			type="button"
			onClick={() => handleDeleteOption(option.optionId)}
		>
			Remove
		</button>
	</div>
);

export default Option;
