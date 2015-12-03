
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaMinusSquare extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m22.2 20.2v-2.2q0-0.5-0.3-0.8t-0.8-0.3h-15.5q-0.5 0-0.8 0.3t-0.4 0.8v2.2q0 0.5 0.4 0.8t0.8 0.3h15.5q0.5 0 0.8-0.3t0.3-0.8z m4.5-9.4v16.6q0 2.1-1.5 3.6t-3.5 1.4h-16.7q-2.1 0-3.5-1.4t-1.5-3.6v-16.6q0-2.1 1.5-3.6t3.5-1.4h16.7q2 0 3.5 1.4t1.5 3.6z"/></g>
            </IconBase>
        );
    }
}
