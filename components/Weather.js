import { useState } from 'react';

const [lat, setLat] = useState(null);
const [lng, setLng] = useState(null);
const [status, setStatus] = useState(null);


const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }


  const getServerSideProps = async () =>{

      Weather_API = process.env.WEATHER_API_KEY;
      
      const openweather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${Weather_API}`);
      const weatherdata = await openweather.json();

      return{
          props: {
              data: weatherdata
          }
      }
}

const Weather = ({data}) => {
  console.log(data);
    return (
        <div>
            {/* Return something here */}
        </div>
    )
}

export default Weather

