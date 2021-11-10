const model = (weather, forecast) => {

    weather.forEach((item, i) => { item.id = i + 1; })
    forecast.forEach((item, i) => { item.id = i + 1; })

    const addWeatherData = e => model(weather.concat(e))

    const all = () => model(weather, forecast)

    const Weather = () => weather
        .sort((a, b) => (a.time > b.time) ? -1 : 1)

    const CityWeatherData = (weather, forecast) => model(weather, forecast)

    const TimeWeatherData = (from, to) => model(filterDate(from, to), forecast)

    const filterDate = (from, to) => weather
        .filter(w => w.time >= from && w.time <= to)

    // Forecast
    const CityForecastData = city => forecast
        .sort((a, b) => (a.time > b.time) ? -1 : 1)
        .filter(f => f.place === city)

    const TimeForecastData = (from, to) => forecast
        .sort((a, b) => (a.time > b.time) ? -1 : 1)
        .filter(f => f.time >= from && f.time <= to)


  

    const latestMeasurement = () => weather
        .sort((a, b) => (a.time > b.time) ? -1 : 1)
        .filter(point => point.place === "Copenhagen")
        .slice(0, 4)
        .concat(weather.sort((a, b) => (a.time > b.time) ? -1 : 1)
            .filter(point => point.place === "Horsens")
            .slice(0, 4))
        .concat(weather.sort((a, b) => (a.time > b.time) ? -1 : 1)
            .filter(point => point.place === "Aarhus")
            .slice(0, 4))

    const minTemp = () => weather
        .filter(point => point.place === "Copenhagen")
        .filter(point => point.type === "temperature")
        .sort((a, b) => (a.value > b.value) ? 1 : -1)
        .slice(0, 1)
        .concat(weather
            .filter(point => point.place === "Horsens")
            .filter(point => point.type === "temperature")
            .sort((a, b) => (a.value > b.value) ? 1 : -1)
            .slice(0, 1))
        .concat(weather
            .filter(point => point.place === "Aarhus")
            .filter(point => point.type === "temperature")
            .sort((a, b) => (a.value > b.value) ? 1 : -1)
            .slice(0, 1))

    const maxTemp = () => weather
        .filter(point => point.place === "Copenhagen")
        .filter(point => point.type === "temperature")
        .sort((a, b) => (a.value > b.value) ? -1 : 1)
        .slice(0, 1)
        .concat(weather
            .filter(point => point.place === "Horsens")
            .filter(point => point.type === "temperature")
            .sort((a, b) => (a.value > b.value) ? -1 : 1)
            .slice(0, 1))
        .concat(weather
            .filter(point => point.place === "Aarhus")
            .filter(point => point.type === "temperature")
            .sort((a, b) => (a.value > b.value) ? -1 : 1)
            .slice(0, 1))

    const totalPrecipitation = () => [weather
        .filter(point => point.type === "precipitation")
        .slice(0, 120)
        .reduce((s, n) => ({ value: s.value + n.value, place: " ", id: 1 }))]
        

    const avgWindspeed = () => [weather
        
        .filter(point => point.type === "wind speed")
        .slice(0, 120)
        .reduce((s, n) => ({
            value: s.value + n.value /
                weather
                
                .filter(point => point.type === "wind speed").length

            , place: "", id: 1
        }))]
     


    const hourlyPrediction = () => forecast
        .sort((a, b) => (a.time > b.time) ? 1 : -1)
        .slice(0, 96)
        .reverse()
        .sort((a, b) => (a.type > b.type) ? 1 : -1)
       

    const updateModel = (weather, forecast) => model(weather, forecast)

    const updateLatest = (weather, forecast) => model(weather, forecast)


    return { latestMeasurement, minTemp, maxTemp, totalPrecipitation, avgWindspeed, hourlyPrediction, updateModel, updateLatest, addWeatherData,Weather, CityWeatherData, filterDate, CityForecastData, TimeWeatherData, TimeForecastData, all }
}







export default model