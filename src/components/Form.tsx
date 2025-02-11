import { useForm } from 'react-hook-form'
import  {Error} from './Error'
import { useState } from 'react';
import { countries } from '../data';
import { Weather } from '../types';

type FormProps = {
  fetchWeather: (state: Weather) => Promise<void>
}


export const Form = ({fetchWeather}: FormProps) => {

  const [state, setState] = useState<Weather>({
    city: '',
    country: ''
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    setState({
      ...state,
      [e.target.name] : e.target.value
    })
  }

  const onSubmit = () => {
    fetchWeather(state)
  }
  return (
    <>
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col bg-white rounded-md shadow-md p-6 text-gray-400 font-semibold">
          <h1 className=" text-center text-2xl mb-6 text-black font-bold ">Consulta el clima</h1>

          <label htmlFor="city" className="">Ciudad</label>
          <input 
            type="text" 
            id="city" 
            value={state.city}  
            className="p-2 border-gray-200 border-1 rounded-md" 
            {...register('city', {required: true})} 
            name='city'
            onChange={handleChange}
            />
            
            {errors.city &&  <Error /> }

          <label htmlFor="country" className='mt-4'>Pais</label>
          <select 
            id="country" 
            {...register('country', {required: true})} 
            name="country"
            onChange={handleChange}
          >
            <option value={state.country} className='p-2 border-gray-200 border-1 rounded-md'>---Selecciona un pais---</option>
            {countries.map(country => (
              <option
              key={country.code}
              >{country.name}</option>
            ))}
          </select>
          {errors.country &&  <Error /> }

          <button className="bg-blue-800 text-white p-2 rounded-md mt-4 cursor-pointer">Consultar</button>
          
      </form>
    </>
  )
}
