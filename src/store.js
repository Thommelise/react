// eslint-disable-next-line
export default (init_model, view, renderer) => {
  let model = init_model

  function reducer(action, model) {
    const { weather, forecasts } = action
    switch (action.type) {

      case 'copenhagenWeather':
        const { weatherC } = action
        console.log(weatherC)
        return model.CityWeatherData(weatherC, forecasts)

      case 'aarhusWeather':
        
        const { weatherAa } = action
        return model.CityWeatherData(weatherAa, forecasts)

      case 'horsensWeather':
        const { weatherH } = action
        return model.CityWeatherData(weatherH, forecasts)

      case 'fromDateToDate':
        return model.TimeWeatherData(action.param, action.params)

    

      case 'add':

        return model.addWeatherData(weather)

      case 'updateLatest':
        return model.updateLatest(weather, forecasts)

      case 'updateAll':
        return model.updateModel(weather, forecasts)

      default:
        return model
    }
  }

  return action => {
    model = reducer(action, model)
    renderer(view(model))
  }
}