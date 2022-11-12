import React, {
    Component
} from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {
        const { onReset, Counters, onDelete, onIncrement } = this.props;
        return (
            <div>
                <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {
                    Counters.map(counter =>
                        <Counter key={counter.id}
                            counter={counter}
                            onDelete={onDelete}
                            onIncrement={onIncrement}
                            selected />
                    )
                }
            </div>
        );
    }
}

export default Counters;