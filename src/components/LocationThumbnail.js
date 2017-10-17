/**
 * Created by Vermaas on 10/8/2017.
 */
import React from 'react';
import './LocationThumbnail.css';
import PropTypes from 'prop-types';
import {Col, Thumbnail, Button} from 'react-bootstrap'
import MapPage from './GoogleMaps/MapPage';

class LocationThumbnail extends React.Component {
    getCenter() {
        var center = []
        center.push(parseFloat(this.props.latitude))
        center.push(parseFloat(this.props.longitude))
        console.log("center = "+center)
        return center;
    }

    render() {

        return (
            <Col xs={6} md={3}>

                <Thumbnail src={this.props.url}>
                    <h3>{this.props.username} </h3>
                    <h5> {this.props.timestamp}</h5>
                    <h5>{this.props.latitude}, {this.props.longitude}</h5>
                    <h5>{this.props.description} </h5>
                    <p>
                      <a href={this.props.url}><Button bsStyle="primary" bsSize="small">Map</Button></a>&nbsp;
                    </p>
                    <div style={{width: '100%', height: '200px'}}>
                        <MapPage center={this.getCenter()} />
                    </div>
                </Thumbnail>

            </Col>
        );
    }
}
LocationThumbnail.propTypes = {
    title: PropTypes.string,
    timestamp: PropTypes.date,
    url: PropTypes.string,
};
export default LocationThumbnail;