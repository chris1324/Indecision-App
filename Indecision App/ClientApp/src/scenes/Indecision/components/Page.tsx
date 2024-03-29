import React, { ReactNode } from 'react';
// eslint-disable-next-line sort-imports
import Action from './Action';
import AddOption from './AddOption';
import { Button } from 'devextreme-react';
import Header from './Header';
import OptionModal from './OptionModal';
import { OptionModel } from './Option';
import Options from './Options';

interface IState {
	options: Array<OptionModel>;
	selectedOption?: OptionModel;
}

export default class IndecisionApp extends React.Component<unknown, IState> {
	constructor(props: unknown) {
		super(props);

		this.state = {
			options: [],
			selectedOption: undefined
		};
	}

	componentDidMount(): void {
		fetch('option')
			.then(response => response.json())
			.then(data => data && this.setState(() => ({ options: data })));
	}

	componentDidUpdate(prevProps: unknown, prevState: IState): void {
		const { options } = this.state;

		if (prevState.options.length !== options.length) {
			const optionsJson = JSON.stringify(options);
			localStorage.setItem('options', optionsJson);
		}
	}

	handleDeleteOptions = (): void => {
		fetch('option/deleteall', { method: 'DELETE' })
			.then(() => this.setState(() => ({ options: [] })));
	}

	handleClearSelectedOption = (): void => {
		this.setState(() => ({ selectedOption: undefined }));
	}

	handleDeleteOption = (optionId: number): void => {
		fetch(`option/?id=${optionId}`, { method: 'DELETE' })
			.then(() => this.setState(prevState => (
				{
					options: prevState.options.filter(option => option.optionId !== optionId)
				})));
	}

	handlePick = (): void => {
		const { options } = this.state;
		const randomNumber = Math.floor(Math.random() * options.length);
		const option = options[randomNumber];

		this.setState(() => ({ selectedOption: option }));
	}

	handleAddOption = (optionName: string): string | null => {
		const { options } = this.state;

		if (!optionName) {
			return 'Enter valid value to add item.';
		}

		if (options.some(x => x.name === optionName)) {
			return 'This option already exists.';
		}

		fetch(`option/?optionName=${optionName}`, { method: 'POST' })
			.then(response => response.json())
			.then(data => this.setState((prevState => ({ options: prevState.options.concat(data) }))));

		return null;
	}

	render(): ReactNode {
		const { options, selectedOption } = this.state;
		const subtitle = 'Put your life in the hands of a computer';

		return (
			<div>
				<Header subtitle={subtitle} />
				<div className="container">
					<div className="form-group flex-grow-1">
						<Button
							className="col-md-12"
							disabled={!options.length}
							text="This is DexExtreme Button with Boostrap styling!!"
							onClick={this.handlePick}
						/>
					</div>
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