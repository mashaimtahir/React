import React, {
    Component
} from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {
        const { Counters, onDelete, onIncrement, onDecrement, onEdit, onEditing } = this.props;
        return (
            <div>
                {
                    Counters.map(counter =>
                        <Counter key={counter.id}
                            counter={counter}
                            onDelete={onDelete}
                            onEdit={onEdit}
                            onEditing={onEditing}
                            onIncrement={onIncrement}
                            onDecrement={onDecrement}
                            selected />
                    )
                }
            </div>
        );
    }
}

export default Counters;