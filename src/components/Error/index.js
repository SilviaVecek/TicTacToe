import React from 'react';
import './styles.scss';
import { NavLink} from "react-router-dom";

const Error = () => {
    return (
        <div className="error">
            You've got an error!<br />
            <NavLink className="" to="/">Go back Home</NavLink>
        </div>
    );
}

export default Error;