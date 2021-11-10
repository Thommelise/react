import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker.js';
import model from './model.js'
import view from './view.js'
import store from './store.js'
import dispatcher from './dispatcher.js'

async function init() {
  try {
    const weather_res = await fetch('http://localhost:8080/data')
    const weather = await weather_res.json()
    const forecasts = await fetch('http://localhost:8080/forecast').then(res => res.json())
    const theModel = model(weather, forecasts)
    let renderer = dom => ReactDOM.render(dom, document.getElementById('root'))
    let theDispatcher
    const theView = view(() => theDispatcher)
    const theStore = store(theModel, theView, renderer)
    theDispatcher = dispatcher(theStore)
    renderer(theView(theModel))
  } catch (err) {
    console.log(err)
  }
}

init()

serviceWorker.unregister();