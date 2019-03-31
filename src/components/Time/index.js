import React , {useEffect} from 'react';
import classnames from 'classnames';
import './styles.scss';

export const SelectTime = ({ onChange, value, className }) => (
    <select className={classnames("time__selection", className)} onChange={(e) => onChange(e.target.value)} value={value}>
        <option value="Infinity">Unlimited</option>
        <option value="3">3 Seconds</option>
        <option value="5">5 Seconds</option>
        <option value="10">10 Seconds</option>
        <option value="20">20 Seconds</option> 
    </select>
)


const Time = ({ timeLimit, setTimeLimit, setPlayerTurn, playerTurn }) => {
    useEffect(() => {
        if (timeLimit !== "Infinity") {
            const interval = setInterval(() => {
                setTimeLimit(timeLimit - 1);   
            }, 1000)
            // if (timeLimit === 0) {
            //     setPlayerTurn(!playerTurn)
            //     setTimeLimit(timeLimit)
            // }
            return() => {
                clearInterval(interval);
            };
        }
    })
    return(
        <div className="time__clock">
            {timeLimit%60}
        </div>
    );
}

export default Time