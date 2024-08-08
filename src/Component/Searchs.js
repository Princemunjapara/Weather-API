import React from 'react'
import Card from './Card'

export default function Searchs(props) {
    return (
        <div>
            <section className='section'>
                <div className=" container">
                    <div className='main-div'>
                        <div className=' row'>
                            <div className=" col-lg-6">
                                <div className='search mt-3'>
                                    <form className=' w-100 mb-5'>
                                        <label className='form-label'>Enter City Name</label><br />
                                        <div className='input-group'>
                                            <input type='text' className='form-control' onChange={props.change} name='city' value={props.city} placeholder="City Name"></input>
                                            <i className="fa-solid fa-magnifying-glass input-group-text pt-2" onClick={props.search}></i>
                                        </div>
                                        <button type='button' className='search-btn mt-3' onClick={props.search}>Search</button>
                                    </form>
                                    <form className='w-100 pt-5'>
                                        <label className='form-label d-inline'>Get Co-ordinate</label><button className='btn'><i className="fa-solid fa-location-crosshairs loc-icon" onClick={props.location}></i></button>
                                        <input type='text' className='form-control mb-3' onChange={props.change} name='lat' value={props.lat} placeholder="Latitude"></input>
                                        <input type='text' className='form-control' onChange={props.change} name='lon' value={props.lon} placeholder="Longitude"></input>
                                        <button type='button' className='search-btn mt-3' onClick={props.citysearch}>Search</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-3 mt-lg-0">
                                <div className="card bg-dark overflow-hidden" style={{ borderRadius: '40px',height:'90%',border: '3px solid #28405c' }}>
                                    <div className="bg-image" style={{ borderRadius: '35px',height:'100%' }}>
                                        <img src="assets/img/search-img.jpg"
                                            className="card-img" alt="weather" style={{height:'100%'}} />
                                    </div>
                                    {props.isSubmit === true ? (<Card weatherData={props.weatherData} image={props.img}></Card>) : (
                                        <div className="card-img-overlay p-5">
                                            {/* <h4 className="mb-0">Surat, Gujarat, india</h4>
                                        <p className="display-2 my-3">1.28°C</p>
                                        <p className="mb-2">Feels Like: <strong>-1.08 °C</strong></p>
                                        <h5>Snowy</h5> */}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

