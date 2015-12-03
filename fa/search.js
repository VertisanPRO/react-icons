
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaSearch extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m17.7 23.5q2.3-2.3 2.3-5.5t-2.3-5.5q-2.3-2.3-5.5-2.3t-5.5 2.3q-2.3 2.3-2.3 5.5t2.3 5.5q2.3 2.3 5.5 2.3t5.5-2.3z m11.2 8.9q0 0.9-0.7 1.6t-1.5 0.7q-1 0-1.6-0.7l-6-5.9q-3.1 2.1-6.9 2.1-2.5 0-4.7-1t-3.9-2.6q-1.7-1.6-2.6-3.9t-1-4.7q0-2.5 1-4.8t2.6-3.9q1.6-1.6 3.9-2.6t4.7-0.9q2.5 0 4.8 0.9t3.9 2.6q1.6 1.7 2.6 3.9t0.9 4.8q0 3.8-2.1 6.9l5.9 6q0.7 0.6 0.7 1.5z"/></g>
            </IconBase>
        );
    }
}
