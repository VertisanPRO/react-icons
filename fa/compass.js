
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaCompass extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m11.1 22.4l4.5-2.2-4.5-2.2v4.4z m6.7-10.2v9.4l-8.9 4.4v-9.4l8.9-4.4z m3.7 11.6q1.3-2.1 1.3-4.7t-1.3-4.7q-1.3-2.2-3.4-3.5t-4.8-1.2q-2.5 0-4.7 1.2t-3.4 3.5q-1.3 2.1-1.3 4.7t1.3 4.7q1.2 2.2 3.4 3.5t4.7 1.2q2.6 0 4.8-1.2t3.4-3.5z m3.4-11.4q1.8 3.1 1.8 6.7t-1.8 6.7q-1.8 3.1-4.9 4.8t-6.7 1.8q-3.6 0-6.7-1.8t-4.8-4.8q-1.8-3.1-1.8-6.7t1.8-6.7q1.8-3.1 4.8-4.8t6.7-1.8q3.7 0 6.7 1.8t4.9 4.8z"/></g>
            </IconBase>
        );
    }
}
