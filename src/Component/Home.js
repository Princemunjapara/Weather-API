import React from 'react'

export default function Home() {
    return (
        <div>
            <section className='section'>
                <div className=" container">
                    <div className='main-div'>
                        <div className=' row'>
                            <div className=" col-lg-6">
                                <div className='home-div w-100 h-100'>
                                    <h4><img src="assets/img/weather-logo.png" alt="" /> Weatherapp.</h4>
                                    <div className='div-info'>
                                        <h1>Weather & Forecast <br /> Application</h1>
                                        <p>Use weather application and get weather information daily and daily. Download weather
                                            forecast for free and experience.</p>
                                        <div className='d-flex'>
                                            <button type='button' className="btn1"><i className="fa-brands fa-apple ico1"></i>APP STORE</button>
                                                <button type='button' className="btn1 ms-2"> <i className="fa-brands fa-google-play pe-3"></i> PLAY STORE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-lg-6 mt-5 mt-lg-0">
                                <div className="img-div">
                                    <video src="assets/img/weathervedio1.mp4" type="video/mp4" className='image' muted autoPlay loop></video>
                                    {/* <img src="assets/img/home-img.jpg" alt="" className='image' /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
