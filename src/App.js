import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group'
import {v4 as uuidv4} from 'uuid'
import Nav from './components/Nav/Nav'
import Alert from './components/Warn/Warn'
import AddForm from './components/AddForm/AddForm'
import SearchForm from './components/SearchForm/SearchForm'
import ContactList from './components/ContactList/ContactList'
import './app.css'

export default class App extends Component {
  state = {
    name: '',
    number: '',
    contacts: [],
    filter: '',
    alert: false,
  }
  componentDidMount () {
    if(localStorage.getItem('contacts')){
      this.setState((prev)=>{return{contacts: JSON.parse(localStorage.getItem('contacts'))}})
    }
  }
  componentDidUpdate () {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  }
  alert = () => {
    this.setState({alert: true})
      setTimeout(() => {
        this.setState({alert: false})
      }, 1000)
  }
  handleInput = (name, number) => {
    if(name) {
      this.setState({
        [name]: number
      })
    };
  }
  handleSubmit = () => {
    const {name, number, contacts} = this.state
    if(name && number && contacts.filter(e => name === e.name).length === 0) {
      this.setState((prevSt) => {
        return {
          contacts: [...prevSt.contacts, {name: name, number: number, id: uuidv4()}]
        }
      })
      this.setState({
        name: '',
        number: ''
      })
      console.log(contacts.filter(e => name === e.name).length)
    } else {this.alert()}
  }    
  setFilter = (fWord) => {
    this.setState({filter: fWord})
  }
  deleteContact = (id) => {
    const {contacts} = this.state
    this.setState({contacts: contacts.filter(e => e.id !== id)})
  }
  filterContacts = () => {
    const {contacts, filter} = this.state;
    return contacts.filter(e => e.name.toLowerCase().includes(filter.toLowerCase()))
  }
  render() {
   
    const {name, number, alert, contacts} = this.state
    
    const filteredContacts = this.filterContacts()
    return(
      <>
        <Nav/>
        <CSSTransition in={alert} unmountOnExit timeout={500} classNames="al"><Alert/></CSSTransition>
          <AddForm handleSubmit={this.handleSubmit} handleInput={this.handleInput} name={name} number={number}/>
        <CSSTransition in={contacts.length >= 1} timeout={500} unmountOnExit classNames="al">
          <SearchForm onSearch={this.setFilter}/>
        </CSSTransition>
        <ContactList contacts={filteredContacts} delete={this.deleteContact}/>
      </>
    )
  }
};
