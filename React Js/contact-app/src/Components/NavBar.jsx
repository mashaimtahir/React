import React, { Component } from 'react'

class NavBar extends Component {
    render() {
        return (
            <div className='navbar nav bg-light px-5'>
                <span className='navbar-brand col m-2'>Contact App</span>
                <input className='col form-cotrol m-2' type='text' placeholder='Name' />
                <input className='col form-cotrol m-2' type='text' placeholder='Address' />
                <input className='col form-cotrol m-2' type='text' placeholder='Number' />
                <button className='btn col btn-primary m-2' onClick={()=>this.props.onInsertion()}>Add</button>
            </div>
        );
    }
}
 
export default NavBar;