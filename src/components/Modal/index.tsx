import * as React from 'react';
import './style.scss';

export const Modal = ({visible, isWon, toggleModalVisibility}) => (
    <div className="modal" style={{display: visible ? 'flex' : 'none'}}>
        <div className="modal-content">
            <h1>{isWon ? 'WINNER!!!' : 'YOU LOSE :('}</h1>
            <button onClick={toggleModalVisibility}>{isWon ? 'PLAY AGAIN' : 'TRY AGAIN'}</button>
        </div>
    </div>
);
