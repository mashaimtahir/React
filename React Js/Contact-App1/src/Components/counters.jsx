import React, {
    Component
} from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {
        const { Counters, onDelete, onEdit, onEditing } = this.props;
        return (
            <div>
                {
                    Counters.map(counter =>
                        <Counter key={counter.id}
                            counter={counter}
                            onDelete={onDelete}
                            onEdit={onEdit}
                            onEditing={onEditing}
                            selected />
                    )
                }
            </div>
        );
    }
}

export default Counters;