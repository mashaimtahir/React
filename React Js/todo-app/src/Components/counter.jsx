import React, { Component } from "react";


class Counter extends Component{

    render() {
        return (
            <div>
                <span className={this.getbadgeclass()}>{this.formatcount()}</span>
                <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-sm btn-primary m-2">Increment</button>
                <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-sm btn-danger m-2">Delete</button>
            </div>
        );
    }

    getbadgeclass() {
        let classes = "badge m-2 bg-";
        let append_class = (this.props.counter.value === 0) ? "warning" : "primary" ;
        classes += append_class;
        return classes;
    }

    formatcount() {
        return this.props.counter.value;
    }
}

export default Counter;