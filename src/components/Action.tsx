import React, { FunctionComponent } from 'react';

interface IProps {
    handlePick: () => void;
    hasOptions: boolean;
}

const Action: FunctionComponent<IProps> = ({ handlePick, hasOptions }) => (
    <div>
        <button
            className="big-button"
            onClick={handlePick}
            disabled={!hasOptions}
        >
            What should i do?</button>
    </div>
);

export default Action;