
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaCube extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m15.6 31.8l11.1-6v-11.1l-11.1 4.1v13z m-1.2-15l12.2-4.4-12.2-4.4-12.1 4.4 12.1 4.4z m14.5-4.4v13.4q0 0.6-0.3 1.1t-0.9 0.8l-12.2 6.7q-0.5 0.3-1.1 0.3t-1-0.3l-12.2-6.7q-0.6-0.3-0.9-0.8t-0.3-1.1v-13.4q0-0.7 0.4-1.2t1.1-0.9l12.2-4.4q0.4-0.1 0.7-0.1t0.8 0.1l12.2 4.4q0.7 0.3 1.1 0.9t0.4 1.2z"/></g>
            </IconBase>
        );
    }
}
