import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar';
import Counters from './Components/counters';
import React, { Component } from 'react';



class App extends Component {
    state = {
        Counters: [{id: 1, value: 2},
            { id: 2, value: 0 },
            { id: 3, value: 0 }
        ]
    }

    handledelete = counterid => {
        console.log("Deleted.");
        const Counters = this.state.Counters.filter(c => c.id !== counterid);
        this.setState({ Counters });
    }

    handleincrement = counter => {
        const counters = [ ...this.state.Counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ Counters: counters });
    }

    handlereset = () => {
        const counters = this.state.Counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    }


  render() { 
    return (
      <React.Fragment>
        <NavBar 
          totalCounters={this.state.Counters.filter(c=>c.value>0).length}
        />
        <main className='container'>
          <Counters
            Counters={this.state.Counters}
            onReset={this.handlereset}
            onDelete={this.handledelete}
            onIncrement={this.handleincrement} />
        </main>
      </React.Fragment>

    );
  }
}
 
export default App;


