
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaThumbTack extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m8.3 18.5v-7.7q0-0.3-0.1-0.4t-0.4-0.2q-0.3 0-0.4 0.2t-0.2 0.4v7.7q0 0.3 0.2 0.4t0.4 0.2q0.2 0 0.4-0.2t0.1-0.4z m11.7 6.2q0 0.4-0.3 0.7t-0.8 0.4h-7.5l-0.8 8.3q-0.1 0.3-0.2 0.4t-0.4 0.2h0q-0.5 0-0.6-0.5l-1.3-8.4h-7q-0.4 0-0.8-0.4t-0.3-0.7q0-2.2 1.4-3.9t3-1.7v-8.9q-0.9 0-1.5-0.7t-0.7-1.5q0-0.9 0.7-1.6t1.5-0.6h11.2q0.9 0 1.5 0.6t0.7 1.6q0 0.9-0.7 1.5t-1.5 0.7v8.9q1.7 0 3 1.7t1.4 3.9z"/></g>
            </IconBase>
        );
    }
}
