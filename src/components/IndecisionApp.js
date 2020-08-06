import React from 'react';
import Action from './Action';
import AddOption from './AddOption';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({ options: prevState.options.filter(option => option !== optionToRemove) }));
    };

    handlePick = () => {
        const options = this.state.options;
        const randomNumber = Math.floor(Math.random() * options.length);
        const option = options[randomNumber];

        this.setState(() => ({ selectedOption: option }))
    };

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item.'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists.'
        }

        this.setState((prevState => ({ options: prevState.options.concat(option) })));
    }

    componentDidMount() {
        try {
            const optionsJson = localStorage.getItem('options');
            const options = JSON.parse(optionsJson);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // no-op
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const optionsJson = JSON.stringify(this.state.options);
            localStorage.setItem('options', optionsJson);
        }
    }

    render() {
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