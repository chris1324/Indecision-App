import React from 'react';
// eslint-disable-next-line sort-imports
import Action from './components/Action';
import AddOption from './components/AddOption';
import Header from './components/Header';
import OptionModal from './components/OptionModal';
import Options from './components/Options';

interface IState {
	options: Array<string>;
	selectedOption?: string;
}

export default class IndecisionApp extends React.Component<{}, IState> {
	constructor(props: any) {
		super(props);

		this.state = {
			options: [],
			selectedOption: undefined
		};
	}

	componentDidMount() {
		try {
			const optionsJson: string | null = localStorage.getItem('options');

			if (optionsJson) {
				const options = JSON.parse(optionsJson);

				if (options) {
					this.setState(() => ({ options }));
				}
			}
		} catch (e) {
			// no-op
		}
	}

	componentDidUpdate(prevProps: {}, prevState: IState) {
		const { options } = this.state;

		if (prevState.options.length !== options.length) {
			const optionsJson = JSON.stringify(options);
			localStorage.setItem('options', optionsJson);
		}
	}

	handleDeleteOptions = () => {
		this.setState(() => ({ options: [] }));
	}

	handleClearSelectedOption = () => {
		this.setState(() => ({ selectedOption: undefined }));
	}

	handleDeleteOption = (optionToRemove: string) => {
		this.setState(prevState => (
			{
				options: prevState.options.filter(option => option !== optionToRemove)
			}));
	}

	handlePick = () => {
		const { options } = this.state;
		const randomNumber = Math.floor(Math.random() * options.length);
		const option = options[randomNumber];

		this.setState(() => ({ selectedOption: option }));
	}

	handleAddOption = (option: string): string | null => {
		const { options } = this.state;

		if (!option) {
			return 'Enter valid value to add item.';
		}

		if (options.indexOf(option) > -1) {
			return 'This option already exists.';
		}

		this.setState((prevState => ({ options: prevState.options.concat(option) })));

		return null;
	}

	render() {
		const { options, selectedOption } = this.state;
		const subtitle = 'Put your life in the hands of a computer';

		return (
			<div>
				<Header subtitle={subtitle} />
				<div className="container">
					<Action
						handlePick={this.handlePick}
						hasOptions={!!options.length}
					/>
					<div className="widget">
						<Options
							handleDeleteOption={this.handleDeleteOption}
							handleDeleteOptions={this.handleDeleteOptions}
							options={options}
						/>
						<AddOption
							handleAddOption={this.handleAddOption}
						/>
					</div>
				</div>
				<OptionModal
					handleClearSelectedOption={this.handleClearSelectedOption}
					selectedOption={selectedOption}
				/>
			</div>
		);
	}
}