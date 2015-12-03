
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaChevronCircleLeft extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m15.8 27.8l1.8-1.8q0.3-0.3 0.3-0.8t-0.3-0.8l-5.4-5.3 5.4-5.3q0.3-0.4 0.3-0.8t-0.3-0.8l-1.8-1.8q-0.3-0.3-0.8-0.3t-0.8 0.3l-7.9 7.9q-0.3 0.3-0.3 0.8t0.3 0.8l7.9 7.9q0.3 0.3 0.8 0.3t0.8-0.3z m9.1-15.4q1.8 3.1 1.8 6.7t-1.8 6.7q-1.8 3.1-4.9 4.8t-6.7 1.8q-3.6 0-6.7-1.8t-4.8-4.8q-1.8-3.1-1.8-6.7t1.8-6.7q1.8-3.1 4.8-4.8t6.7-1.8q3.7 0 6.7 1.8t4.9 4.8z"/></g>
            </IconBase>
        );
    }
}
