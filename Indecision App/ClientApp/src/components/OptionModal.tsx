import React from 'react';
// eslint-disable-next-line sort-imports
import Modal from 'react-modal';
import { OptionModel } from './Option';

interface IProps {
	selectedOption?: OptionModel;
	handleClearSelectedOption: () => void;
}

const OptionModal: React.FC<IProps> = ({ selectedOption, handleClearSelectedOption }) => (
	<Modal
		ariaHideApp={false}
		className="option-modal"
		closeTimeoutMS={200}
		isOpen={!!selectedOption}
		onRequestClose={handleClearSelectedOption}
	>
		<h3 className="option-modal__title">Selected Option</h3>
		<p
			className="option-modal__body"
		>
			{selectedOption?.name}
		</p>
		<button
			className="button"
			type="button"
			onClick={handleClearSelectedOption}
		>
			Okay
		</button>
	</Modal>
);

export default OptionModal;