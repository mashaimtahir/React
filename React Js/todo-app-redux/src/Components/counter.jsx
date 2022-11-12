import React from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement, Deletion } from './../StorageHandler';

const Counter = ({counter}) => {
//   const count = useSelector((state) => state.counter[0].value)
    const dispatch = useDispatch();
  return (
    <div>
        <div>
            <span>Task: </span>
            <span className="ml-2 mr-4">{counter.name}</span>
            <button aria-label="Increment value" onClick={() => dispatch(increment(counter.id))} className='btn' >
                Increment
            </button>
            <span className="mx-2">{counter.value}</span>
            <button aria-label="Decrement value" onClick={() => dispatch(decrement(counter.id))} className='btn' >
                Decrement
            </button>
            <button aria-label="Decrement value" onClick={() => dispatch(Deletion(counter.id))} className='btn btn-danger mx-3' >
                Delete
            </button>
        </div>
    </div>
  )
}

export default connect(null, { increment, decrement, Deletion })(Counter);