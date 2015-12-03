
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaEraser extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m15.6 28l5.8-6.7h-13.3l-5.9 6.7h13.4z m17.5-18.7q0.3 0.6 0.2 1.2t-0.5 1.2l-15.6 17.7q-0.6 0.8-1.6 0.8h-13.4q-0.6 0-1.2-0.3t-0.8-1q-0.3-0.6-0.2-1.2t0.6-1.2l15.5-17.8q0.7-0.7 1.7-0.7h13.3q0.7 0 1.2 0.3t0.8 1z"/></g>
            </IconBase>
        );
    }
}
