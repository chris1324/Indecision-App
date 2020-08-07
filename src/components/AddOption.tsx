import React from 'react';

interface IProps {
    handleAddOption: (option: string) => string | undefined;
}

interface IState {
    error?: string
}

export default class AddOption extends React.Component<IProps, IState> {
    state = {
        error: undefined
    }

    handleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        const optionInputElement = e.target.elements.namedItem('option');

        if (optionInputElement instanceof HTMLInputElement) {
            const option = optionInputElement.value.trim();
            const error = this.props.handleAddOption(option);

            this.setState(() => ({ error }));

            if (!error) optionInputElement.value = '';
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleFormSubmit}>
                    <input className="add-option__input" type="text" name="option" />
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}