import React from "react";
import { useSelector } from "react-redux";
import Counter from './counter';
import { connect } from "react-redux";

const Counters = () => {
    const counters = useSelector((state) => state.counter)
    return (
        <div>
            {
                counters.map(counter =>
                    <Counter key={counter.id}
                        counter={counter}
                    />
                )
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {};
}

export default connect(mapStateToProps)(Counters);