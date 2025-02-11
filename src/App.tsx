import { Form } from "./components/Form"
import { Item } from "./components/Item"
import { Spinners } from "./components/Spinners"
import useWeather from "./hooks/useWeather"

function App() {
  const {fetchWeather, weather, loading, notFound} = useWeather()
  return (
    <div className="">
      <h1 className="text-5xl font-bold font-lobster text-center my-5">Clima app</h1>
      <div className="flex flex-col justify-between w-3/4 m-auto font-poppins my-8 md:flex-row">
        <div>
          <Form 
            fetchWeather = {fetchWeather}
          />
        </div>

        <div className="m-auto my-5">
          {loading && <Spinners/> }
          {weather.name !== '' && <Item weather={weather}/>}
          {notFound && <p className="font-bold text-xl">Ciudad no encontrada:/</p> }
        </div>
      </div>
    </div>
  )
}

export default App
