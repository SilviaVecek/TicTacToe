import React, {useState} from 'react';
import './styles.scss';
import { winnerState } from '../../shared/constants';
import {whoWins} from '../../shared/state';
import Board from '../../components/Board';

export const PlayerNames = ({ onChange, value}) => (
    <div className="players">
        <input className="players--name" type="text" onChange={(e) => onChange(e.target.value)} value={value}/>
    </div>
);


export const Score = (winner, setScore1, score1, setScore2, score2) => {
    if (winner === winnerState.PLAYER1) {
        setScore1(score1 + 1);
    } else if (winner === winnerState.PLAYER2) {
        setScore2(score2 + 1);
    }
}

const Players = ({ playerName1, playerName2, winner }) => {
    const [score1, setScore1] = useState(0)
    const [score2, setScore2] = useState(0)
    console.log(winner)
    return (
        <div>
            <div className="name name__player1">
                <img className="name__img" src="/images/Cross.svg"/>
                {playerName1}
                <div>Score</div>
            </div>
            <div className="name name__player2">
                <img className="name__img" src="/images/Naught.svg"/>
                {playerName2}
                <div>Score</div>
                {score2}
            </div>
        </div>
    );
}

export default Players;