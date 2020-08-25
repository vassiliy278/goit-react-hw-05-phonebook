import React from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import './contacts.css'
import PropTypes from 'prop-types'


function ContactList (props) {
    return(
        <TransitionGroup component="ul">
            {props.contacts.map(e => 
            <CSSTransition key={e.id} in={true} timeout={500}  classNames="cl">
            <li key={e.id}>
                <p className="name">{e.name}:</p>
                <p className="number">☎{e.number}</p>
                <button onClick={() => props.delete(e.id)} className="delete"></button>
            </li>
            </CSSTransition>)}
        </TransitionGroup>
        )
    }
export default ContactList

ContactList.propTypes = {
    contacts: PropTypes.array,
    delete: PropTypes.func
}
