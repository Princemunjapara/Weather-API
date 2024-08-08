import React from 'react'

export default function Card(props) {
    const { weatherData: datas } = props;
    return (
        <div>

            <div className="card-img-overlay p-5">
                <h4 className="mb-0 display-3 txt-css">{datas.name} <img src={props.image} alt="" width={'25%'} /></h4>
                <p className="display-1 mb-2" style={{color:'#e1e7ee',fontWeight:'400'}}>{datas.main.temp} °C</p>
                <p className="mb-2 display-6" style={{color:'#e1e7ee',fontWeight:'400'}}><b>Feels Like:</b> <strong>{datas.main.feels_like}</strong></p>
                <h1 style={{color:'#e1e7ee',fontWeight:'400'}}>{datas.weather[0].description}</h1>
            </div>
        </div>
    )
}
