import './index.scss';
import { GoogleMap, LoadScript} from '@react-google-maps/api';

const InteractiveMap = ()=>{
    
    const containerStyle = {
        width: '100%',
        height: '80vh'
      };
      
      const center = {
        lat: 49.224532182945325,
        lng: -123.10885904604532
      };

   
    return <>
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_MAP_API_KEY}
    >       
    <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
    >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
    </>
};
export default InteractiveMap;