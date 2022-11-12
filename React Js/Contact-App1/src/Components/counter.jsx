import React, { Component } from "react";

class Counter extends Component{

    render() {
        return (
            <div className="row">
                <this.props.onEditing counter={this.props.counter} value='name' onEdit={this.props.onEdit} />
                <this.props.onEditing counter={this.props.counter} value='number' onEdit={this.props.onEdit} />
                <this.props.onEditing counter={this.props.counter} value='address' onEdit={this.props.onEdit} />
                <button onClick={() => this.props.onDelete(this.props.counter)} className={ this.btnclass() }>{ this.btnformat() }</button>
            </div>
        );
    }
    btnformat = () => {
        if (this.props.counter.name_editing === true || this.props.counter.addr_editing === true || this.props.counter.no_editing === true) { 
            return 'Save';
        }
        else {
            return 'Delete';
        }
    }
    btnclass = () => {
        if (this.props.counter.name_editing === true || this.props.counter.addr_editing === true || this.props.counter.no_editing === true) { 
            return 'btn btn-sm btn-secondary col-2 col-md-1 m-2';
        }
        else {
            return 'btn btn-sm btn-danger col-2 col-md-1 m-2';
        }
    }
}

export default Counter;