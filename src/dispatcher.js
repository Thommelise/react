// eslint-disable-next-line
export default store => async ({type, ...params}) =>  {
  const weather_res = await fetch('http://localhost:8080/data/')
  const weather = await weather_res.json()
  const forecasts = await fetch('http://localhost:8080/forecast').then(res => res.json())

  

    switch(type) {

      case 'copenhagenWeather':
        const weatherC = await fetch('http://localhost:8080/data/Copenhagen').then(res => res.json())
        store({ type, ...params, weatherC, forecasts })
        break;

    case 'aarhusWeather':
        const weatherAa = await fetch('http://localhost:8080/data/Aarhus').then(res => res.json())
        store({ type, ...params, weatherAa, forecasts })
        break;

    case 'horsensWeather':
        const weatherH = await fetch('http://localhost:8080/data/Horsens').then(res => res.json())
        store({ type, ...params, weatherH, forecasts })
        break;

    case 'fromDateToDate':
        const weatherF = await fetch('http://localhost:8080/data').then(res => res.json())
        const weatherT = await fetch('http://localhost:8080/forecast').then(res => res.json())
        store({ type, ...params, weatherF, weatherT })
        break;

      case 'updateLatest':
          store({type, ...params, weather, forecasts})
        break;

        case 'updateAll':

          store({type, ...params, weather, forecasts})
        break;


      case 'add': 
          const weatherPrompt = window.prompt('Weather Data')
          const headers = { 'Content-Type': 'application/json', Accept: 'application/json' }
          const weatherPost = await fetch('http://localhost:8080/data',
            { method: 'POST', 
              body: JSON.stringify({ weatherPrompt}), 
              headers}).then(res => res.json())
          
          store({type,...params, weatherPost})
        
        break;

      default:
    }
}