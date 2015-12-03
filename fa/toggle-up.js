
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaToggleUp extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m19.9 22.9q-0.3 0.6-1 0.6h-11.1q-0.7 0-1-0.6-0.3-0.6 0.1-1.1l5.5-7.8q0.4-0.5 0.9-0.5t0.9 0.5l5.6 7.8q0.4 0.5 0.1 1.1z m2.3 4.5v-16.6q0-0.3-0.1-0.4t-0.4-0.2h-16.7q-0.2 0-0.4 0.2t-0.2 0.4v16.6q0 0.3 0.2 0.4t0.4 0.2h16.7q0.2 0 0.4-0.2t0.1-0.4z m4.5-16.6v16.6q0 2.1-1.5 3.6t-3.5 1.4h-16.7q-2.1 0-3.5-1.4t-1.5-3.6v-16.6q0-2.1 1.5-3.6t3.5-1.4h16.7q2 0 3.5 1.4t1.5 3.6z"/></g>
            </IconBase>
        );
    }
}
