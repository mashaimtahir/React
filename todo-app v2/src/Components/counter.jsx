import React, { Component } from "react";

class Counter extends Component{

    render() {
        return (
            <div>
                <span className='col'>
                    <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-sm btn-secondary">+</button>
                    <button onClick={()=>this.props.onDecrement(this.props.counter)} className="btn btn-sm btn-secondary">-</button>
                </span>
                <span className={this.getbadgeclass()}>{this.formatcount()}</span>
                <this.props.onEditing counter={this.props.counter} />
                <button onClick={()=>this.props.onEdit(this.props.counter)} className="btn btn-sm btn-secondary m-2">Edit</button>
                <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-sm btn-danger m-2">Delete</button>
            </div>
        );
    }

    getbadgeclass() {
        let classes = "col badge px-4 m-2 bg-";
        let append_class = (this.props.counter.value === 0) ? "warning" : "primary" ;
        classes += append_class;
        return classes;
    }

    formatcount() {
        return this.props.counter.value + ' persons';
    }
}

export default Counter;