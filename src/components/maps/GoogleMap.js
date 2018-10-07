import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import PropTypes from 'prop-types';

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={3}
      defaultCenter={{lat: 40.8036968, lng: -77.8655457}}
    >
        {props.markersList.map((marker) =>{
            return (
                <Marker
                key={Math.random()}
                icon = {{url : 'http://maps.google.com/mapfiles/ms/icons/red.png',
                scaledSize : {
                    width: 20,
                    height: 20
                  }}}
                position={{lat:marker.latitude, lng: marker.longitude}}
                />    
            );        
        })}
        {props.pickupMarkersList.map((marker) =>{
            return (
                <Marker
                key={Math.random()}
                icon = {{url : 'http://maps.google.com/mapfiles/ms/icons/blue.png',
                scaledSize : {
                    width: 50,
                    height: 50
                  }}}
                position={{lat:marker.lat, lng: marker.lng}}
                />    
            );        
        })}
    </GoogleMap>
  ));

  MapWithAMarker.propTypes = {
};

export default MapWithAMarker;

