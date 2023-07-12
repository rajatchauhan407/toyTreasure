import './index.scss';
import { GoogleMap, LoadScript,Marker} from '@react-google-maps/api';
import { useEffect,useState } from 'react';
const InteractiveMap = ()=>{
    const [location,setLocation] = useState(null);
    const markerIcon = {
      url: './icon.png'
      
    };
  useEffect(()=>{
      if(navigator.geolocation){
        console.log(navigator.geolocation)
        navigator.geolocation.getCurrentPosition(
                  (position)=>{
                    setLocation({
                      latitude:position.coords.latitude,
                      longitude:position.coords.longitude
                    })
                  }
        )
      };
      console.log(location);
      

  },[])
    
    const containerStyle = {
        width: '100%',
        height: '100vh'
      };

      const center = {
        lat: location?.latitude ,
        lng: location?.longitude
      };

    return <>
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_MAP_API_KEY}
    >       
    <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
    >
        { /* Child components, such as markers, info windows, etc. */ }
       <Marker 
        position={center} 
        title='Your Location'
        // icon={markerIcon}
        />
        <Marker
          position={{
            lat:49.281992646679946, 
            lng:-123.08303057488982
          }}
        />
      </GoogleMap>
    </LoadScript>
    </>
};
export default InteractiveMap;