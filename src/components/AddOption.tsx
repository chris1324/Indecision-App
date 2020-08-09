import React from 'react';

interface IProps {
	handleAddOption: (option: string) => string | null;
}

interface IState {
	error: string | null
}

export default class AddOption extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);

		this.state = {
			error: null
		};
	}

	handleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();

		const optionInputElement = e.target.elements.namedItem('option');

		if (optionInputElement instanceof HTMLInputElement) {
			const { handleAddOption } = this.props;

			const option = optionInputElement.value.trim();
			const error = handleAddOption(option);

			this.setState(() => ({ error }));

			if (!error) optionInputElement.value = '';
		}
	};

	render() {
		const { error } = this.state;

		return (
			<div>
				{error && <p className="add-option-error">{error}</p>}
				<form className="add-option" onSubmit={this.handleFormSubmit}>
					<input
						className="add-option__input"
						name="option"
						type="text"
					/>
					<button
						className="button"
						type="submit"
					>
						Add Option
					</button>
				</form>
			</div>
		);
	}
}