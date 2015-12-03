
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaDiamond extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m3.7 16.9l10.8 11.5-5.2-11.5h-5.6z m14.1 13.4l6-13.4h-12.1l6.1 13.4z m-8.5-15.6l3.6-6.7h-4.6l-5 6.7h6z m11.8 13.7l10.8-11.5h-5.6l-5.2 11.5z m-9.2-13.7h11.8l-3.5-6.7h-4.8l-3.5 6.7z m14.3 0h6l-5-6.7h-4.5l3.5 6.7z m2.5-8.5l6.6 8.9q0.3 0.3 0.3 0.7t-0.3 0.7l-16.7 17.8q-0.3 0.4-0.8 0.4t-0.8-0.4l-16.7-17.8q-0.3-0.3-0.3-0.7t0.2-0.7l6.7-8.9q0.3-0.4 0.9-0.4h20q0.6 0 0.9 0.4z"/></g>
            </IconBase>
        );
    }
}
