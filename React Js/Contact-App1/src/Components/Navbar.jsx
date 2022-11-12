import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        return (
            <nav className='navbar navbar-light bg-light px-5'>
                <span>Contat App</span>
                <input className='form-text form-control m-2 form-control-plaintext bg-white col p-1' id='name' placeholder='Name' />
                <input className='form-text form-control m-2 form-control-plaintext bg-white col p-1' id='number' placeholder='Number' />
                <input className='form-text form-control m-2 form-control-plaintext bg-white col p-1' id='address' placeholder='Address' />
                <button onClick={() =>  this.props.OnInsert(document.getElementById('name').value, document.getElementById('number').value, document.getElementById('address').value) } className='btn btn-primary m-2'>Add Contact</button>
            </nav>
        );
    }
}
 
export default NavBar;

