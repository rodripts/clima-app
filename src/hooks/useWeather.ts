import axios from "axios"
import { Weather, WeatherResults } from "../types"
import { useState } from "react"


export default function useWeather () {
    const initialState = {
        name: '',
        main: {
            temp: 0,
            temp_max: 0,
            temp_min: 0,
    }
    }
    const [weather, setWeather] = useState<WeatherResults>(initialState)

    const [loading, setLoading] = useState(false)
    const [notFound, setNotFound] = useState(false)

    const fetchWeather = async (state: Weather) => {
        const apikey = import.meta.env.VITE_APIKEY
        setLoading(true)
        setWeather(initialState)
        try {
            const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${state.city},${state.country}&appid=${apikey}`
            const {data} = await axios(geoUrl)

            if(!data[0]) {
                setNotFound(true)
                return
            } else {
                setNotFound(false)
            }
            
            const lat = data[0].lat
            const lon = data[0].lon

            const geo2Url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`
            const {data: weather} = await axios<WeatherResults>(geo2Url)
            
            setWeather(weather)

        } catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }

    return {
        fetchWeather,
        weather,
        loading,
        notFound
    }
}