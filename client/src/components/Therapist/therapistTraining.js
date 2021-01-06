import React, { Component } from 'react';

import SingleTerapist from './SingleTerapist'




class TherapistTraining extends Component {
    
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    
    render() {
        return (
            <div>
                <SingleTerapist/>

            </div>

        );
    }
}

export default TherapistTraining;