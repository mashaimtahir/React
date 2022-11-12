import './App.css';
import NavBar from './Components/Navbar';
import Counters from './Components/counters';
import React, { Component } from 'react';


class App extends Component {
  state = {
    Counters: [
      { id: 1, value: 0, name: 'name', editing: false }
    ],
    Time: new Date(),
  }

  handledelete = counterid => {
    const Counters = this.state.Counters.filter(c => c.id !== counterid);
    this.setState({ Counters });
  }

  handleincrement = counter => {
    const counters = [...this.state.Counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ Counters: counters });
  }
  
  handledecrement = counter => {
    const counters = [...this.state.Counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ Counters: counters });
  }

  handlereset = () => {
    const counters = this.state.Counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  }

  handleInsertion = name => {
    if (name !== '' && name !== null) {
      const counters = this.state.Counters.push({ id: this.state.Counters.length + 1, value: 0, name: name, editing: false });
      this.setState({ counters });
    }
  }
  
  handleEdit = counter => {
    const counters = [...this.state.Counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].editing === false) {
      counters[index].editing = true;
      this.setState({ Counters: counters });
    }
    else {
      counters[index].editing = false;
      this.setState({ Counters: counters });
    }
  }

  handleEditing = counters => {
    if ( counters.counter.editing === false) {
      return (
        <span className='col px-3'>{counters.counter.name}</span>
      );
    }
    else {
      return (
        <input type='text' defaultValue={counters.counter.name} onChange={ name => this.handleupdate(counters.counter, name.target.value) } />
      );
    }
  }

  handleupdate = (counter, Name) => {
    const counters = [...this.state.Counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].name = Name;
    this.setState({ Counters: counters });
  }

  render() { 
    return (
      <React.Fragment>
        <NavBar 
          totalCounters={this.state.Counters.filter(c => c.value !== 0).length}
          onReset={this.handlereset}
          OnInsert={this.handleInsertion}
          time={this.startTime}
        />
        <main className='container'>
          <Counters
            Counters={this.state.Counters}
            onDelete={this.handledelete}
            onEdit={this.handleEdit}
            onEditing={this.handleEditing}
            onIncrement={this.handleincrement} 
            onDecrement={this.handledecrement} 
            />
        </main>
      </React.Fragment>
    );
  }
}
 
export default App;


