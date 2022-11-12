'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>asdd</div>
            </React.Fragment>
        );
    }
}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));
