
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaMinusCircle extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m21.1 20.2v-2.2q0-0.5-0.3-0.8t-0.8-0.3h-13.3q-0.5 0-0.8 0.3t-0.3 0.8v2.2q0 0.5 0.3 0.8t0.8 0.3h13.3q0.5 0 0.8-0.3t0.3-0.8z m3.8-7.8q1.8 3.1 1.8 6.7t-1.8 6.7q-1.8 3.1-4.9 4.8t-6.7 1.8q-3.6 0-6.7-1.8t-4.8-4.8q-1.8-3.1-1.8-6.7t1.8-6.7q1.8-3.1 4.8-4.8t6.7-1.8q3.7 0 6.7 1.8t4.9 4.8z"/></g>
            </IconBase>
        );
    }
}
