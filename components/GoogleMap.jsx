import {
  GoogleMap as MapComponent,
  LoadScript,
  Marker,
  GoogleMap,
} from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '300px',
};

const location = {
  lat: 26.872576,
  lng: 80.937831,
};

const MyGoogleMap = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={15}>
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MyGoogleMap;
