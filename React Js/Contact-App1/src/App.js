import NavBar from './Components/Navbar';
import Counters from './Components/counters';
import React, { Component } from 'react';


class App extends Component {
  state = {
    Counters: [
      { id: 1, value: 0, name: 'Mashaim', address: 'FSD', number: '03441213123', name_editing: false, no_editing: false, addr_editing: false }
    ],
  }

  handledelete = counterid => {
    if (counterid.name_editing === true || counterid.addr_editing === true || counterid.no_editing === true) {
      const Counters = [...this.state.Counters];
      const index = Counters.indexOf(counterid);
      Counters[index] = { ...counterid };
      Counters[index].name_editing = false;
      Counters[index].addr_editing = false;
      Counters[index].no_editing = false;
      this.setState({ Counters });
    }
    else {
      const Counters = this.state.Counters.filter(c => c.id !== counterid.id);
      this.setState({ Counters });
    }
  }

  handleInsertion = (name, number, address) => {
    if (name !== '' && name !== null && number!=='' && address !== '') {
      const counters = this.state.Counters.push({ id: this.state.Counters.length + 1, value: 0, name: name, number: number, address:address, name_editing: false, addr_editing:false, no_editing:false });
      console.log(this.state.Counters, counters);
      this.setState({ counters });
    }
  }
  
  handleEdit = (counter, value) => {
    const counters = [...this.state.Counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (value === 'name') {
      if (counters[index].name_editing === false) {
        counters[index].name_editing = true;
        this.setState({ Counters: counters });
      }
      else {
        counters[index].name_editing = false;
        this.setState({ Counters: counters });
      }
    }
    if (value === 'address') {
      if (counters[index].addr_editing === false) {
        counters[index].addr_editing = true;
        this.setState({ Counters: counters });
      }
      else {
        counters[index].addr_editing = false;
        this.setState({ Counters: counters });
      }
    }
    if (value === 'number') {
      if (counters[index].no_editing === false) {
        counters[index].no_editing = true;
        this.setState({ Counters: counters });
      }
      else {
        counters[index].no_editing = false;
        this.setState({ Counters: counters });
      }
    }
  }

  handleEditing = counters => {
    if (counters.value === 'name') {
      if (counters.counter.name_editing === false) {
        return (
          <span className='col px-3' onClick={ ()=>counters.onEdit(counters.counter, 'name') } >{counters.counter.name}</span>
        );
      }
      else {
          return (
          <input type='text' className='col form-control m-2' defaultValue={counters.counter.name} onChange={ name => this.handleupdate(counters.counter, name.target.value, 'name') } />
        );
      }
    }
    if(counters.value === 'address'){
      if (counters.counter.addr_editing === false) {
        return (
          <span className='col px-3' onClick={ ()=>counters.onEdit(counters.counter, 'address') } >{counters.counter.address}</span>
        );
      }
      else {
        return (
          <input type='text' className='col form-control m-2' defaultValue={counters.counter.address} onChange={ name => this.handleupdate(counters.counter, name.target.value, 'address') } />
        );
      }
    }
    if (counters.value === 'number') {
      if (counters.counter.no_editing === false) {
        return (
          <span className='col px-3' onClick={ ()=>counters.onEdit(counters.counter, 'number') } >{counters.counter.number}</span>
        );
      }
      else{
          return (
            <input type='text' className='col form-control m-2' defaultValue={counters.counter.number} onChange={ name => this.handleupdate(counters.counter, name.target.value, 'number') } />
        );
      }
    }
  }

  handleupdate = (counter, Name, attr) => {
    const counters = [...this.state.Counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (attr === 'name') {
      counters[index].name = Name;
    }
    else if (attr === 'number') {
      counters[index].number = Name;
    }
    else if (attr === 'address') {
      counters[index].address = Name;
    }
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
            />
        </main>
      </React.Fragment>
    );
  }
}
 
export default App;


