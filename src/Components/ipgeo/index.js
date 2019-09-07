import React, { Component } from 'react';
import axios from 'axios';
import './index.css';

export default class IpGeo extends Component{
    componentDidMount(){
        axios.get('https://api.ipgeolocation.io/ipgeo?apiKey=2153996dcb814b339ce73b691e6ffad5&ip=110.174.240.156')
            .then(function (response) {

                console.log(response);
            })
            .catch(function (error) {

                console.log(error);
            })
            .finally(function () {

            });
    }

    render(){
        return(
            <React.Fragment>

            </React.Fragment>

        );
    }
}