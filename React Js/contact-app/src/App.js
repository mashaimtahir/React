import React, { Component } from 'react'
import Contacts from './Components/Contacts';
import NavBar from './Components/NavBar';

class App extends Component {
  state = {
    Contacts_list: [
      { id: 1, name: 'Mashaim', address: 'FSD', number: '03332122132' }
    ],
  }

  handleInsertion = () => {
    const data = { id: 3, name: 'Mashaim', address: 'Fsd', number: '03002200200' };
    const contacts = this.state.Contacts_list.push({ id: 2, name: 'Mashaim', address:'FSD', number:'03002002023' });
    console.log('Contact Added.', data, contacts);
    return this.setState({ Contacts_list: contacts });
  }

  render() {
    console.log('App', this.state.Contacts_list);
    return (
      <div>
        <NavBar 
          onInsertion={this.handleInsertion}
        />
        <Contacts
          contact={this.state.Contacts_list}
        />
      </div>
    );
  }
}
 
export default App;