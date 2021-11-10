import React from "react";



// eslint-disable-next-line



const WeatherData = ({ data }) => [
    <td key='value'>{data.value}</td>,
    <td key='type'>{data.type}</td>,
    <td key='unit'>{data.unit}</td>,
    <td key='time'>{data.time}</td>,
    <td key='place'>{data.place}</td>
]

const ComputedData = ({ data }) => [
    <td key='value'>{data.value}</td>,
    <td key='place'>{data.place}</td>
]

const DataRow = (props) => (
    <tr>
        <WeatherData {...props} />
    </tr>
)

const ComputedDataRow = (props) => (
    <tr>
        <ComputedData {...props} />
    </tr>
)

const WeatherDataBodys = ({ model }) => (
    <tbody>
        {
            model.Weather().map(data => <DataRow key={data.id.toString()} {...{ data }} />)
        }
    </tbody>
)


const WeatherDataBody = ({ model, dispatcher }) => (
    <tbody>
        {
            model.latestMeasurement().map(data => <DataRow key={data.id.toString()} {...{ data, dispatcher }} />)
        }
    </tbody>
)

const MinimumWeatherDataBody = ({ model, dispatcher }) => (
    <tbody>
        {
            model.minTemp().map(data => <DataRow key={data.id.toString()} {...{ data, dispatcher }} />)
        }
    </tbody>
)

const MaximumWeatherDataBody = ({ model, dispatcher }) => (
    <tbody>
        {
            model.maxTemp().map(data => <DataRow key={data.id.toString()} {...{ data, dispatcher }} />)
        }
    </tbody>
)

const TotalPrecipitationWeatherDataBody = ({ model, dispatcher }) => (
    <tbody>
        {
            model.totalPrecipitation().map(data => <ComputedDataRow key={data.id.toString()} {...{ data, dispatcher }} />)
        }
    </tbody>
)

const AverageSpeedWeatherDataBody = ({ model, dispatcher }) => (
    <tbody>
        {
            model.avgWindspeed().map(data => <ComputedDataRow key={data.id.toString()} {...{ data, dispatcher }} />)
        }
    </tbody>
)

const HourlyPredictionWeatherDataBody = ({ model, dispatcher }) => (
    <tbody>
        {
            model.hourlyPrediction().map(data => <DataRow key={data.id.toString()} {...{ data, dispatcher }} />)
        }
    </tbody>
)


// eslint-disable-next-line
export default dispatcher => model => (



    <div id='base'>

<h1>Weather</h1>
        <table id='weather'>
            <thead>
                <tr>
                    <td>Value</td>
                    <td>Type</td>
                    <td>Unit</td>
                    <td>Time</td>
                    <td>Place</td>
                    <td colSpan="3" key='copenhagen'>
                        <button onClick={() => dispatcher()({ type: 'copenhagenWeather' })}>Copenhagen weather</button>
                    </td>
                    <td colSpan="3" key='aarhus'>
                        <button onClick={() => dispatcher()({ type: 'aarhusWeather' })}>Aarhus weather</button>
                    </td>
                    <td colSpan="3" key='horsens'>
                        <button onClick={() => dispatcher()({ type: 'horsensWeather' })}>Horsens weather</button>
                    </td>
                    <td colSpan="3">
                        <input type='date' id='fromDate'></input>
                    </td>
                    <td colSpan="3">
                        <input type='date' id='toDate'></input>
                    </td>
                    <td colSpan="3" key='dataBtn'>
                        <button onClick={() => dispatcher()({ type: 'fromDateToDate', param: document.getElementById('fromDate').value, params: document.getElementById('toDate').value})}>Dates</button>
                    </td>
                </tr>
            </thead>
            <WeatherDataBodys model={model} />
        </table>

        <h1>Weather</h1>
        <table>


            <thead>
                <tr>
                    <td colSpan="3" key='add'>
                        <button onClick={() => dispatcher()({ type: 'add' })}>Add</button>
                    </td>
                </tr>
            </thead>
            { }
        </table>
        <div>
            <h1>Weather Data</h1><button onClick={() => dispatcher()({ type: 'updateAll' })}>Update All</button>
            <h1>Latest Measurements</h1><button onClick={() => dispatcher()({ type: 'updateLatest' })}>Update</button>
            <table id='latest'>
                <thead><tr><td>Value</td><td>Type</td><td>Unit</td><td>Time</td><td>Place</td></tr></thead>
                <WeatherDataBody model={model} dispatcher={dispatcher} />
            </table>
        </div>

        <div id='base1'>
            <h1>Minimum temperature for the last 5 days</h1><button onClick={() => dispatcher()({ type: 'updateAll' })}>Update</button>
            <table >
                <thead><tr><th>Type</th><th>value</th><th>Unit</th><th>Time</th><th>place</th></tr></thead>
                <MinimumWeatherDataBody model={model} dispatcher={dispatcher} />
            </table>
        </div>

        <div id='base2'>
            <h1>Maximum temperature for the last 5 day</h1><button onClick={() => dispatcher()({ type: 'updateAll' })}>Update</button>
            <table >
                <thead><tr><th>Type</th><th>value</th><th>Unit</th><th>Time</th><th>place</th></tr></thead>
                <MaximumWeatherDataBody model={model} dispatcher={dispatcher} />
            </table>

        </div>

        <div id='base3'>
            <h1>Total precipitation for the last 5 days</h1><button onClick={() => dispatcher()({ type: 'updateAll' })}>Update</button>
            <table>
                <thead><tr><th>value</th><th>place</th></tr></thead>
                <TotalPrecipitationWeatherDataBody model={model} dispatcher={dispatcher} />
            </table>
        </div>

        <div id='base4'>
            <h1>Average wind speed for the last 5 days</h1><button onClick={() => dispatcher()({ type: 'updateAll' })}>Update</button>
            <table >
                <thead><tr><th>value</th><th>place</th></tr></thead>
                <AverageSpeedWeatherDataBody model={model} dispatcher={dispatcher} />
            </table>
        </div>

        <div id='base5'>
            <h1>Hourly predictions for the next 24 hours.</h1><button onClick={() => dispatcher()({ type: 'updateAll' })}>Update</button>
            <table >
                <thead><tr><th>Type</th><th>value</th><th>Unit</th><th>Time</th><th>place</th></tr></thead>
                <HourlyPredictionWeatherDataBody model={model} dispatcher={dispatcher} />
            </table>
        </div>

    </div>
)