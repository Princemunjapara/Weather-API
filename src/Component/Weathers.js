import React, { Component } from 'react'
import Searchs from './Searchs'
import Result from './Result'
import axios from 'axios'
import Recent from './Recent'


export default class Weather extends Component {
    constructor(props) {
        super(props)

        this.state = {
            city: '',
            lat: '',
            lon: '',
            weatherData: null,
            loading: false,
            issubmit: false,
            image: 'assets/img/clouds.png',
            recent:[]
        }
    }

    // Input Value Change
    // Method 1
    InputHandler = (event) => {
        event.preventDefault();
        // console.log(event.target.value);

        const name = event.target.name;
        // console.log(name);
        this.setState({
            [name]: event.target.value
        })
    }

    // Method 2
    // InputHandler = (event) => {
    //     // console.log(event);
    //     event.preventDefault();
    //     const name = event.target.name;
    //     if (name === 'city') {
    //         this.setState({ city: event.target.value })
    //     } else if (name === 'lat') {
    //         this.setState({ lat: event.target.value })
    //     } else if (name === 'lon') {
    //         this.setState({ lon: event.target.value })
    //     }
    //      console.log(event.target.value);
    //      console.log(event.target.name);
    // }

    // Location Get
    LocationHandler = (event) => {
        this.setState({
            loading: true,
            issubmit: false
        })
        event.preventDefault();
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (result) => {
                    // console.log(result.coords.latitude);
                    // console.log(result.coords.longitude);

                    setTimeout(() => {
                        this.setState({
                            lat: result.coords.latitude,
                            lon: result.coords.longitude
                        });
                        const { latitude: lat, longitude: lon } = result.coords;

                        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=f33cd7d19fc7ac955ec682f9ec16f4a4`)
                            .then((result) => {
                                // console.log(result);
                                // console.log(result.data.name);
                                // console.log(this.state.weatherData);
                                let images = '';
                                if (result.data.weather[0].main === "Clouds") {
                                    images = "assets/img/clouds.png"
                                } else if (result.data.weather[0].main === "Clear") {
                                    images = "assets/img/clear.png"
                                } else if (result.data.weather[0].main === "Rain") {
                                    images = "assets/img/rain.png"
                                } else if (result.data.weather[0].main === "Drizzle") {
                                    images = "assets/img/drizzle.png"
                                } else if (result.data.weather[0].main === "Mist") {
                                    images = "assets/img/mist.png"
                                } else if (result.data.weather[0].main === "Wind") {
                                    images = "assets/img/wind.png"
                                } else if (result.data.weather[0].main === "snow") {
                                    images = "assets/img/snow.png"
                                } else {
                                    images = "assets/img/clouds.png"
                                }
                                this.setState({
                                    city: result.data.name,
                                    weatherData: result.data,
                                    image:images,
                                    issubmit:true,
                                    loading: false
                                },() =>{
                                    this.recentDataHandler()
                                })
                            })
                            .catch((err) => {
                                console.log(err)
                            });
                    }, 1000)
                },
                (err) => {
                    console.log(err);
                }
            )
        }
        else {
            console.log("Location not Found");
        }
    }

    //Search Location
    SearchHandler = (event) => {
        event.preventDefault();
        // if (!this.state.lat || !this.state.lon) {
        //     return;
        // }
        this.setState({
            loading: true
        })
        setTimeout(() => {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&units=metric&appid=f33cd7d19fc7ac955ec682f9ec16f4a4`)
                .then((result) => {
                    console.log("City:", result.data.name);
                    let images = '';
                    if (result.data.weather[0].main === "Clouds") {
                        images = "assets/img/clouds.png"
                    } else if (result.data.weather[0].main === "Clear") {
                        images = "assets/img/clear.png"
                    } else if (result.data.weather[0].main === "Rain") {
                        images = "assets/img/rain.png"
                    } else if (result.data.weather[0].main === "Drizzle") {
                        images = "assets/img/drizzle.png"
                    } else if (result.data.weather[0].main === "Mist") {
                        images = "assets/img/mist.png"
                    } else if (result.data.weather[0].main === "Wind") {
                        images = "assets/img/wind.png"
                    } else if (result.data.weather[0].main === "snow") {
                        images = "assets/img/snow.png"
                    } else {
                        images = "assets/img/clouds.png"
                    }
                    this.setState({
                        city: result.data.name,
                        weatherData: result.data,
                        image: images,
                        issubmit: true
                    },() =>{
                        this.recentDataHandler()
                    })
                })
                .catch((err) => {
                    console.log(err)
                });
        }, 1000)

    }

    //City Search Location  
    cityHandler = (event) => {
        event.preventDefault();
        // if (!this.state.lat || !this.state.lon) {
        //     return;
        // }
        this.setState({
            loading: true
        })

        setTimeout(() => {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&type=hour&appid=f33cd7d19fc7ac955ec682f9ec16f4a4`)
                // axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=f33cd7d19fc7ac955ec682f9ec16f4a4`)
                .then((result) => {
                    let images = '';
                    if (result.data.weather[0].main === "Clouds") {
                        images = "assets/img/clouds.png"
                    } else if (result.data.weather[0].main === "Clear") {
                        images = "assets/img/clear.png"
                    } else if (result.data.weather[0].main === "Rain") {
                        images = "assets/img/rain.png"
                    } else if (result.data.weather[0].main === "Drizzle") {
                        images = "assets/img/drizzle.png"
                    } else if (result.data.weather[0].main === "Mist") {
                        images = "assets/img/mist.png"
                    } else if (result.data.weather[0].main === "Wind") {
                        images = "assets/img/wind.png"
                    } else if (result.data.weather[0].main === "snow") {
                        images = "assets/img/snow.png"
                    } else {
                        images = "assets/img/clouds.png"
                    }
                    // console.log(result);
                    console.log("City:", result.data.name);
                    console.log("Lat:", result.data.coord.lat);
                    console.log("Lon:", result.data.coord.lon);
                    // console.log(result.data.main);
                    // console.log(result.data.sys);
                    this.setState({
                        lat: result.data.coord.lat,
                        lon: result.data.coord.lon,
                        weatherData: result.data,
                        issubmit: true,
                        image: images
                    },() =>{
                        this.recentDataHandler()
                    })
                })
                .catch((err) => {
                    console.log(err)
                });
        }, 1000)

    }

    //Recent Data
    
    recentDataHandler = () =>{
        console.log(this.state.recent);
        const recent = this.state.recent;

        recent.push({
            city:this.state.city,
            lat: this.state.lat,
            lon: this.state.lon
        })
        this.setState({recent},() =>{
            console.log(this.state);
        })
    }

    researchHandler = (location) => {
        const { lat, lon } = location;
        this.setState({ lat, lon }, () => {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=f33cd7d19fc7ac955ec682f9ec16f4a4`)
            .then((res) => {
                this.setState({
                    weatherData : res.data,
                    city: res.data.name     
                })
            }).catch((err) => {
                console.log(err);
            })
        });
    }
    
    


    render() {
        return (
            <div>
                <Searchs
                    change={this.InputHandler}
                    city={this.state.city}
                    lat={this.state.lat}
                    lon={this.state.lon}
                    search={this.cityHandler}
                    citysearch={this.SearchHandler}
                    location={this.LocationHandler}
                    isSubmit={this.state.issubmit}
                    weatherData={this.state.weatherData}
                    img={this.state.image}
                ></Searchs>
                <Result loading={this.state.loading} weatherData={this.state.weatherData} img={this.state.image}></Result>
                <Recent recent={this.state.recent} research={this.researchHandler}></Recent>

            </div>
        )
    }
}