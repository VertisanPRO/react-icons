
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaMapMarker extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m12 17.8q1.3-1.3 1.3-3.1t-1.3-3.2q-1.3-1.3-3.1-1.3t-3.2 1.3q-1.3 1.3-1.3 3.2t1.3 3.1q1.3 1.3 3.2 1.3t3.1-1.3z m5.8-3.1q0 1.8-0.6 3.1l-6.3 13.4q-0.3 0.6-0.8 0.9t-1.2 0.3q-0.6 0-1.2-0.3t-0.8-0.9l-6.3-13.4q-0.6-1.3-0.6-3.1 0-3.7 2.6-6.3t6.3-2.6q3.7 0 6.3 2.6t2.6 6.3z"/></g>
            </IconBase>
        );
    }
}
