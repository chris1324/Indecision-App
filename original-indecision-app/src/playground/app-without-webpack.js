class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: []
        };

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
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

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({ options: prevState.options.filter(option => option !== optionToRemove) }));
    }

    handlePick() {
        const options = this.state.options;
        const randomNumber = Math.floor(Math.random() * options.length);
        const option = options[randomNumber];

        alert(option);
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item.'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists.'
        }

        this.setState((prevState => ({ options: prevState.options.concat(option) })));
    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action
                    hasOptions={!!this.state.options.length}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should i do?</button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            <ol>
                {props.options.map((x, index) =>
                    <Option
                        key={index}
                        optionText={x}
                        handleDeleteOption={props.handleDeleteOption}
                    />)}
            </ol>
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            <li>{props.optionText}</li>
            <button onClick={() => props.handleDeleteOption(props.optionText)}>Remove</button>
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: undefined
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }));

        if (!error) e.target.elements.option.value = '';
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
