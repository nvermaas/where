/**
 * Created by Vermaas on 10/8/2017.
 */
import React from 'react';
import './LocationThumbnail.css';
import PropTypes from 'prop-types';
import {Col, Thumbnail, Button} from 'react-bootstrap'

class LocationThumbnail extends React.Component {
    render() {

        return (
            <Col xs={6} md={3}>

                <Thumbnail src={this.props.url}>
                    <h4>{this.props.username} </h4> at {this.props.timestamp}
                    <h5> Location : {this.props.latitude}, {this.props.longitude}</h5>
                    <h5>{this.props.description} </h5>
                    <p>
                      <a href={this.props.url}><Button bsStyle="primary" bsSize="small">Map</Button></a>&nbsp;
                    </p>
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