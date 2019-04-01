import React , {useEffect, useState} from 'react';
import classnames from 'classnames';
import './styles.scss';
import {winnerState} from '../../shared/constants';

export const SelectTime = ({ onChange, value, className }) => (
    <select className={classnames("time__selection", className)} onChange={(e) => onChange(e.target.value)} value={value}>
        <option value="Infinity">Unlimited</option>
        <option value="3">3 Seconds</option>
        <option value="5">5 Seconds</option>
        <option value="10">10 Seconds</option>
        <option value="20">20 Seconds</option> 
    </select>
)


const Time = ({ timeLimit, setTimeLimit, setPlayerTurn, playerTurn, winner}) => {
    
    const [ roundTime, setRoundTime ] = useState(timeLimit);
    const [ previousPlayer, setPreviousPlayer ] = useState(playerTurn);

    useEffect(() => {
        if (winner !== winnerState.ONGOING) {
            setRoundTime(timeLimit)
            return ;
        }
        let timeout;
        if (timeLimit !== Infinity) {
            if (previousPlayer !== playerTurn) {
                setRoundTime(timeLimit);
            }
            setPreviousPlayer(playerTurn);
            timeout = setTimeout(() => {
                setRoundTime(roundTime - 1);   
            }, 1000)

            if (roundTime === 0) {
                setRoundTime(timeLimit)
                setPlayerTurn(!playerTurn)
            }
        }
        return () => {
            clearTimeout(timeout);
        };
    }, [roundTime, playerTurn])
    return(
        <div className="time__clock">
            {roundTime%60}
        </div>
    );
}

export default Time