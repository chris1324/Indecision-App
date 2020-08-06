console.log("App.js is running");

const appRoot = document.getElementById("app");

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';

        render();
    }
}

const onRemoveAllOptions = () => {
    app.options = [];
    render();
}

const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];

    alert(option);
}

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle}</p>
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>

            <button onClick={onMakeDecision} disabled={app.options.length === 0}>What should i do</button>
            <button onClick={onRemoveAllOptions}>Remove all options</button>


            <ol>
                {app.options.map((x, index) => <li key={index}>{x}</li>)}
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    )

    ReactDOM.render(template, appRoot);
}

render();