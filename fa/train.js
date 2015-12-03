
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaTrain extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m18.9 3.5q3.2 0 5.5 1.7t2.3 3.9v15.6q0 2.2-2.2 3.8t-5.3 1.7l3.7 3.5q0.3 0.3 0.1 0.6t-0.5 0.4h-18.3q-0.4 0-0.6-0.4t0.2-0.6l3.7-3.5q-3.1-0.1-5.3-1.7t-2.2-3.8v-15.6q0-2.3 2.3-3.9t5.5-1.7h11.1z m-7.9 22.4q0.9 1 2.3 1t2.4-1q1-1 1-2.4t-1-2.3q-1-1-2.4-1t-2.3 1q-1 1-1 2.3t1 2.4z m12.3-9v-8.9h-20v8.9h20z"/></g>
            </IconBase>
        );
    }
}
