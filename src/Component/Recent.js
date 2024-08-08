import React, { Component } from 'react'

export default class Recent extends Component {
    constructor(props) {
        super(props)

        this.props = props;
    }

    render() {
        return (
            <div>
                <div className='main-section'>
                    <div className='container'>
                        <h2 className='text-center'>RECENT DATA</h2>
                        <div className='recent-div'>
                            <ul className='list-unstyled'>
                                {
                                    this.props.recent.map((item) =>{
                                        return(
                                            <li onClick={() => this.props.research(item)}>{item.city}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

