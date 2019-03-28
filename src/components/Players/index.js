import React from 'react';
import './styles.scss';

export const PlayerNames = ({ onChange, value}) => (
    <div className="players">
        <input className="players--name" type="text" onChange={(e) => onChange(e.target.value)} value={value}/>
    </div>
);




const Players = ({ playerName1, playerName2 }) => {

    return (
        <div>
            <div className="name name__player1">
                <img className="name__img" src="/images/Cross.svg"/>
                {playerName1}
            </div>
            <div className="name name__player2">
                <img className="name__img" src="/images/Naught.svg"/>
                {playerName2}
            </div>
        </div>
    );
}

export default Players;