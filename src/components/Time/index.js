import React , {useState, useEffect} from 'react';
import './styles.scss';

export const SelectTime = ({ onChange, value }) => (
    <select className="time-selection" onChange={(e) => onChange(e.target.value)} value={value}>
        <option value="Infinity">Unlimited</option>
        <option value="1 Minutes">1 Minutes</option>
        <option value="2 Minutes">2 Minutes</option>
        <option value="5 Minutes">5 Minutes</option>
        <option value="10 Minutes">10 Minutes</option> 
    </select>
)
//onchange handler
//provide with value 

const Time = () => {
    const [countdown, setCountdown] = useState()
    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(countdown - 1);
        }, 1000)
            
        return() => {
            clearInterval(interval);
        };
    })
    return(
        <div>
            <div className="countdown"> {Math.floor(countdown / 60)} {countdown % 60}</div>
        </div>
    );
}

export default Time