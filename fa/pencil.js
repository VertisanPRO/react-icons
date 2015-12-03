
let React = require('react');
let IconBase = require('react-icon-base');

export default class FaPencil extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m6.3 30.2l1.6-1.6-4.1-4.1-1.6 1.6v1.9h2.2v2.2h1.9z m9.1-16.1q0-0.4-0.4-0.4-0.2 0-0.3 0.1l-9.4 9.4q-0.1 0.2-0.1 0.3 0 0.4 0.4 0.4 0.1 0 0.3-0.1l9.4-9.4q0.1-0.1 0.1-0.3z m-1-3.3l7.3 7.2-14.5 14.4h-7.2v-7.2l14.4-14.4z m11.9 1.6q0 0.9-0.6 1.6l-2.9 2.9-7.2-7.2 2.8-2.9q0.7-0.7 1.6-0.7 0.9 0 1.6 0.7l4.1 4q0.6 0.7 0.6 1.6z"/></g>
            </IconBase>
        );
    }
}
