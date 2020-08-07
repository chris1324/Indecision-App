import React from 'react';
import Action from './components/Action';
import AddOption from './components/AddOption';
import Header from './components/Header';
import Options from './components/Options';
import OptionModal from './components/OptionModal';

interface IState {
    options: Array<string>;
    selectedOption?: string;
}

export default class IndecisionApp extends React.Component<{}, IState> {
    state = {
        options: Array<string>(),
        selectedOption: undefined
    };

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
        if (prevState.options.length !== this.state.options.length) {
            const optionsJson = JSON.stringify(this.state.options);
            localStorage.setItem('options', optionsJson);
        }
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    };

    handleDeleteOption = (optionToRemove: string) => {
        this.setState(prevState => ({ options: prevState.options.filter(option => option !== optionToRemove) }));
    };

    handlePick = () => {
        const options = this.state.options;
        const randomNumber = Math.floor(Math.random() * options.length);
        const option = options[randomNumber];

        this.setState(() => ({ selectedOption: option }))
    };

    handleAddOption = (option: string): string | undefined => {
        if (!option) {
            return 'Enter valid value to add item.'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists.'
        }

        this.setState((prevState => ({ options: prevState.options.concat(option) })));
    }

    render() {
        const { selectedOption } = this.state;
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action
                        hasOptions={!!this.state.options.length}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>

                </div>

                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />

            </div>
        );
    }
}