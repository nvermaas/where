/*
 * Base Google Map example
 */
import React, {Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMap from 'google-map-react';
import Marker from './Marker';
import PropTypes from 'prop-types';

export default class MapPage extends Component {
    static propTypes = {
        title: PropTypes.String,
        center: PropTypes.array,
        zoom: PropTypes.number,
        markerCoords: PropTypes.any
    };

    static defaultProps = {
        title: "",
        zoom: 13,
        markerCoords: {lat: 52.20044, lng: 5.95408}
    };


    shouldComponentUpdate = shouldPureComponentUpdate;

    constructor(props) {
        super(props);
        // fill markerCoords object
    }

    render() {
        console.log("this.props.center = "+this.props.center)
        var myMMarkerCoords = {
            lat: this.props.center[0],
            lng: this.props.center[1]
        };

        return (
            <GoogleMap
                apiKey="AIzaSyDJ04B3Cq2uzYEa5o7om5kZ0_JY1AWB9Bo"
                center={this.props.center}
                zoom={this.props.zoom}>
              <Marker {...myMMarkerCoords} text={this.props.title} /* road circle */ />

            </GoogleMap>
        );
    }
}