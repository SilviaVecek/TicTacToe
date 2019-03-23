import React from 'react';
import './styles.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="header__bar">
                <div className="header__circle">
                    <h1 className="header__text">TicTacToe</h1>
                </div>
            </div>           
        </div>
    );

}

export default Header;