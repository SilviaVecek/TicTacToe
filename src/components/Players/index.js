import React from 'react';
import './styles.scss';

export const PlayerNames = ({ onChange, value}) => (
    <div className="players">
        <input className="players--name" type="text" onChange={(e) => onChange(e.target.value)} value={value}/>
    </div>
);



const Players = ({ playerName1, playerName2, score1, score2}) => {


    return (
        <div className="player">
            <div className="name name__player1">
                <div className="name__player">
                    <img className="name__img" src="/images/Cross.svg" alt="Player 1"/>
                    {playerName1}
                </div>
                <div className="score">Score {score1}</div>
                
            </div>
            <div className="name name__player2">
                <div className="name__player">
                    <img className="name__img" src="/images/Naught.svg" alt="Player 2"/>
                    {playerName2}
                </div>
                <div className="score">Score {score2}</div>
            </div>
        </div>
    );
}

export default Players;