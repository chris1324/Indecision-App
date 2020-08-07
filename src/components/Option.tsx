import React, { FunctionComponent } from 'react';

interface IProps {
    count: number;
    optionText: string;
    handleDeleteOption: (optionText: string) => void;
}

const Option: FunctionComponent<IProps> = ({ count, optionText, handleDeleteOption }) => (
    <div className="option">
        <p className="option__text">{count}. {optionText}</p>
        <button
            className="button button--link"
            onClick={() => handleDeleteOption(optionText)}
        >
            Remove
        </button>
    </div>
);

export default Option;