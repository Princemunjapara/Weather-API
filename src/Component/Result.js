import React from 'react'
import Loader from './Loader';

export default function Result(props) {

  // console.log("WeatherData",props.weatherData); 

  const { weatherData: data } = props;
  let ShowData;
  // useEffect(() => {
  //   console.log("img:- ", data);
  // }, [])

  if (data === null) {
    if (props.loading === true) {
      ShowData = <Loader></Loader>
    } else {
      ShowData = (
        <div className='container text-center my-4 selectcity-div'>
          <h3>Please Select City</h3>
        </div>
      )
    }
  } else {
    ShowData = (
      <div>
        <section className='result-section'>
          <div className=' container'>
            <h2 className=' text-center mb-4'>Weather description</h2>
            <div className="card">
              <div className="card-body">
                <h4 className="card-title"><img src={props.img} alt="" width={'10%'} /></h4>
                <h5>City:- {data.name}</h5>
                <h5>Temp:- {data.main.temp} °C</h5>
                <h5>Description:- {data.weather[0].description}</h5>
                <div className="card-text">
                  <table className=' table'>
                    <tbody>
                      <tr>
                        <th>Feels Like</th>
                        <td>{data.main.feels_like} °C</td>
                      </tr>
                      <tr>
                        <th>Min. Temp</th>
                        <td>{data.main.temp_min} °C</td>
                      </tr>
                      <tr>
                        <th>Max. Temp</th>
                        <td>{data.main.temp_max} °C</td>
                      </tr>
                      <tr>
                        <th>Sun Rise</th>
                        <td>{new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</td>
                      </tr>
                      <tr>
                        <th>Sun Set</th>
                        <td>{new Date(data.sys.sunset * 1000).toLocaleTimeString()}</td>
                      </tr>
                      <tr>
                        <th>Wind :- Speed</th>
                        <td>{data.wind.speed} Km/h</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>)
  }

  return (
    <>
      {ShowData}
    </>
  )

}
