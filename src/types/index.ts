export type Weather = {
    city: string
    country: string
}

export type WeatherResults = {
    name: string
    main: {
        temp: number
        temp_max: number
        temp_min: number
    }
}