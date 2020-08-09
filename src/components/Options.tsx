import React from 'react';
// eslint-disable-next-line sort-imports
import Option from './Option';

interface IProps {
	options: Array<string>;
	handleDeleteOption: (option: string) => void;
	handleDeleteOptions: () => void;
}

const Options: React.FC<IProps> = ({ options, handleDeleteOption, handleDeleteOptions }) => (
	<div>
		<div className="widget-header">
			<h3 className="widget-header__title">Your Options</h3>
			<button
				className="button button--link"
				type="button"
				onClick={handleDeleteOptions}
			>
				Remove all
			</button>
		</div>

		{options.length === 0 && <p className="widget__message">Please add an option to get started!</p>}
		<div>
			{options.map((x, index) => (
				<Option
					key={index}
					count={index + 1}
					handleDeleteOption={handleDeleteOption}
					optionText={x}
				/>
			))}
		</div>
	</div>
);

export default Options;