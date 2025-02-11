import {WeatherResults} from "../types"
import { formatTemperature } from "../helpers"

type itemProps = {
  weather: WeatherResults
}

export const Item = (weather: itemProps) => {
  return (
    <div className="bg-white rounded shadow-md p-6 text-center" >
        <h1 className="text-lg font-semibold">{weather.weather.name}</h1>
        <p className="font-bold text-4xl">{ formatTemperature(weather.weather.main.temp)}&deg;C</p>
        <div className="flex justify-between">
            <p>Max: <span className="font-bold mr-4">{ formatTemperature(weather.weather.main.temp_max)}&deg;C</span> </p>
            <p>Min: <span className="font-bold mr-4">{ formatTemperature(weather.weather.main.temp_min)}&deg;C</span> </p>
        </div>
    </div>
  )
}
