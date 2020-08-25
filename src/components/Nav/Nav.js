import React from 'react';
import {CSSTransition} from 'react-transition-group'
import './nav.css'

const nav = () => {
    return(
        <CSSTransition in={true} timeout={500} classNames='slide' appear={true}>
        <div className="bigs">
            Phonebook
        </div>
        </CSSTransition>
    )
}

export default nav