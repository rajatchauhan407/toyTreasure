import './index.scss';
import { GoogleMap, LoadScript,Marker} from '@react-google-maps/api';
import { useEffect,useState } from 'react';
const InteractiveMap = ()=>{
    const[mapsApiKey, setMapsApiKey] = useState({});
    const [loading, setLoading] = useState(true);
    const [location,setLocation] = useState(null);
    useEffect(() => {
      async function getApi(){
        try{
          const data = await fetch('https://us-central1-toystreasure-50c4d.cloudfunctions.net/getMapsAPIKey');
          const result = await data.json()
          setMapsApiKey(result);
          setLoading(false);
        }catch(error){
          console.log("Erro fetching api",error);
          setLoading(false);
        }
        
      }
      getApi();
    }, [setMapsApiKey]);
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
                    console.log(position);
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
      if (loading) {
        return <div>Loading...</div>;
      }
    return <>
    {mapsApiKey && (<LoadScript
      googleMapsApiKey={mapsApiKey.api}
    >       
    <GoogleMap
        options={{ styles: mapStyles }}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
    >
        { /* Child components, such as markers, info windows, etc. */ }
       <Marker 
        position={center} 
        title='Your Location'
        icon={{
              url:'https://firebasestorage.googleapis.com/v0/b/toystreasure-50c4d.appspot.com/o/icons%2Fmap-pin-user.svg?alt=media&token=4cc120c4-9f9b-4fbf-85e1-05b014986f0d' ,
              // scaledSize: new window.google.maps.Size(30, 30)
              
            }}
        // icon={markerIcon}
        />
        <Marker
          title='Charity'
          position={{
            lat:49.281992646679946, 
            lng:-123.08303057488982
          }}
          icon={{
              url: 'https://firebasestorage.googleapis.com/v0/b/toystreasure-50c4d.appspot.com/o/icons%2Fmap-pin-default.svg?alt=media&token=39dab852-da50-4090-819b-cb35c20df43e'
              // scaledSize: new window.google.maps.Size(30, 30)
            }}
        />
        <Marker
          title='Charity'
          position={{
            lat:49.23639116081492,
            lng: -123.04438619999999
          }}
          icon={{
              url: 'https://firebasestorage.googleapis.com/v0/b/toystreasure-50c4d.appspot.com/o/icons%2Fmap-pin-default.svg?alt=media&token=39dab852-da50-4090-819b-cb35c20df43e'
              // scaledSize: new window.google.maps.Size(30, 30)
            }}
        />
      </GoogleMap>
    </LoadScript>)}
    </>
};
export default InteractiveMap;