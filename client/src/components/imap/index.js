import './index.scss';
import { GoogleMap, LoadScript,MarkerF} from '@react-google-maps/api';
import { useEffect,useState } from 'react';
const InteractiveMap = ()=>{
  
  
    const [location,setLocation] = useState(null);
    const mapStyles = [
      {
        featureType: 'all',
        elementType: 'geometry',
        stylers: [
          {
            color: '#f5f5f5'
          }
        ]
      },
      {
        featureType: 'poi.business',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [
          {
            color: '#d9e8c1'
          }
        ]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [
          {
            color: '#ffffff'
          }
        ]
      },
      {
        featureType: 'road',
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [
          {
            color: '#ffffff'
          }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [
          {
            color: '#ffffff'
          }
        ]
      },
      {
        featureType: 'road.local',
        elementType: 'geometry',
        stylers: [
          {
            color: '#ffffff'
          }
        ]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [
          {
            color: '#f2f2f2'
          }
        ]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          {
            color: '#cde2e5'
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#515c6d'
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [
          {
            color: '#cde2e5'
          }
        ]
      }
    ];
    
    
    
    
    
    // const markerIcon = {
    //   url: 'https://picsum.photos/100/100/random=239',
    //   scaledSize: {width:40,height:40}
    // };
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
        options={{ styles: mapStyles }}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
    >
        { /* Child components, such as markers, info windows, etc. */ }
       <MarkerF 
        position={center} 
        title='Your Location'
        // icon={markerIcon}
        />
        <MarkerF
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