import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "400px",
};

const location = {
    lat: 19.055764,
    lng: 72.900436,
};

const GoogleMapComponent = () => {
    return (
        <LoadScript googleMapsApiKey={'AIzaSyBiadaqtZvi6P8B-U3oe53tTKoFmgqIbvc'}>
            <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={15}>
                {/* Marker for the specific location */}
                <Marker position={location} />
            </GoogleMap>
        </LoadScript>
    );
};

export default GoogleMapComponent;
