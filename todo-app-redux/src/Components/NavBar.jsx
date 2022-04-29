import React from "react";
import { useDispatch } from "react-redux";
import { Insertion } from "../StorageHandler";

const NavBar = () => {
    const dispatch = useDispatch();
    return (
        <div className="nav">
            <span className="h4">Task Name</span>
            <input type='text' className="col-sm-3 col-6 form-control" id='task_name' />
            <button onClick={()=>dispatch(Insertion(document.getElementById('task_name').value))} className="btn">Add Task</button>
        </div>
    );
}

export default NavBar;