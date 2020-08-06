const appRoot = document.getElementById("app");


let showDetails = false;
const toggleVisibility = () => {
    showDetails = !showDetails;
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility togglee</h1>
            <button onClick={toggleVisibility}>{showDetails ? 'Show' : 'hide'} details</button>
            {showDetails &&
                <p>
                    Details !!
                </p>
            }
        </div>
    )

    ReactDOM.render(template, appRoot);
}

render();