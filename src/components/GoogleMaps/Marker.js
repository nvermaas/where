import React, {Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import {markerStyle} from './MarkerStyle.js'
import PropTypes from 'prop-types';

export default class Marker extends Component {
    static propTypes = {
        text: PropTypes.string
    };

    static defaultProps = {};

    shouldComponentUpdate = shouldPureComponentUpdate;

    render() {
        return (
            <div style={markerStyle}>
                {this.props.text}
            </div>
        );
    }
}