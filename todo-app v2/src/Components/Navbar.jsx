import React, { Component } from 'react';

class NavBar extends Component {
    state = {
        time: Date(),
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({ time: Date() });
        }, 500);
    }
    
    render() { 
        return (
            <nav className='navbar navbar-light bg-light'>
                <div className='navbar-brand mx-3' href="#">
                    Navbar{"  "}
                    <span className='badge badge-pill bg-secondary'>{this.props.totalCounters}</span>
                    <input className='form-text border border-secondary p-1' id='task_name' placeholder='Task Name' />
                    <button onClick={() =>  this.props.OnInsert(document.getElementById('task_name').value) } className='btn btn-primary'>Add Task</button>
                    <button onClick={this.props.onReset} className="btn btn-danger btn-sm m-2">Reset Number of Persons</button>
                    <span className="badge bg-danger m-2">{ this.state.time }</span>

                </div>
            </nav>
        );
    }
}
 
export default NavBar;

