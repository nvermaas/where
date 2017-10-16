import React from 'react';
import LocationThumbnail from './LocationThumbnail';
import './Locations.css';
import PropTypes from 'prop-types';

class LocationResults extends React.Component {
    render() {
        console.log("LocationResults.render()")
        return (
            <div className="component-location-results">
                {
                    this.props.data.map((location) => {
                        return (
                            <LocationThumbnail
                                id={location.id}
                                username={location.username}
                                timestamp={location.timestamp}
                                latitude={location.latitude}
                                longitude={location.longitude}
                                title={location.title}
                                kind={location.kind}
                                description={location.description}
                                url={location.url}
                              />
                        );
                    })
                }
            </div>
        );
    }
}
LocationResults.propTypes = {
    locationsData: PropTypes.array,
};
export default LocationResults;