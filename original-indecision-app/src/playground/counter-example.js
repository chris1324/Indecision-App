console.log("App.js is running");

const appRoot = document.getElementById("app");

let count = 0;
const addOne = () => {
    count++;
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={addOne}>+1</button>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();