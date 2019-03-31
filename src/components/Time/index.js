import React , {useEffect} from 'react';
import classnames from 'classnames';
import './styles.scss';

export const SelectTime = ({ onChange, value, className }) => (
    <select className={classnames("time__selection", className)} onChange={(e) => onChange(e.target.value)} value={value}>
        <option value="Infinity">Unlimited</option>
        <option value="60">1 Minute</option>
        <option value="120">2 Minutes</option>
        <option value="300">5 Minutes</option>
        <option value="600">10 Minutes</option> 
    </select>
)


const Time = ({ timeLimit, setTimeLimit }) => {
    useEffect(() => {
        if (timeLimit !== "Infinity") {
            const interval = setInterval(() => {
                setTimeLimit(timeLimit - 1);   
            }, 1000)
            return() => {
                clearInterval(interval);
            };
        }
    })
    return(
        <div className="time__clock">
            {Math.floor(timeLimit/60)}:{timeLimit%60}
        </div>
    );
}

export default Time