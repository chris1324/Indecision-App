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
		className="modal"
		closeTimeoutMS={200}
		isOpen={!!selectedOption}
		onRequestClose={handleClearSelectedOption}
	>
		<h3 className="modal__title">Selected Option</h3>
		<p
			className="modal__body"
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