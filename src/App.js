import React, {useState} from 'react'
import axios from 'axios'
import './index.css'



const App = () => {

    const [data,setData] = useState({})
    const [location,setLocation] = useState('')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=22d8143aed9203f43841f199ca700a22`

    const searchLocation = (event) => 
    {
        if(event.key === 'Enter')
        {
            axios.get(url).then((response) =>
            {
                setData(response.data)
                console.log(response.data)
            })
        }   
    }



  return (
    <div className='app'>
        <div className="search">
            <input className='test' type="text" value={location} onChange={event => setLocation(event.target.value)} placeholder='Enter Location' onKeyPress={searchLocation}/>
        </div>
        <div className="container">
            <div className="top">
                <div className="location">
                    <p>{data.name}</p>
                </div>
                <div className="temp">
                {data.main ? <h1>{data.main.temp}°F</h1> : null}
                </div>
                <div className="description">
                    {data.weather ? <p>{data.weather[0].main}</p> : null}
                </div>
            </div>
            <div className="bottom">
                <div className="feels">
                    {data.main ? <p>{data.main.feels_like}°F</p> : null} <p>Feels like</p>
                </div>
                <div className="humidity">
                    {data.main ? <p>{data.main.humidity}%</p> : null} <p> Humidity</p>
                </div>
                <div className="wind">
                    {data.wind ? <p>{data.wind.speed}MPH</p> : null} <p> Wind speed</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App
