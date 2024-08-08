import React, { Component } from 'react'
import { MagnifyingGlass } from 'react-loader-spinner'

export default class Loader extends Component {
    render() {
        return (
            <div className="text-center my-3">
                <MagnifyingGlass 
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="magnifying-glass-loading"
                    wrapperStyle={{}}
                    wrapperClass="magnifying-glass-wrapper"
                    glassColor="white"
                    color="#28405c"
                />
            </div>
        )
    }
}
