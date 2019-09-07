import React, { Component } from 'react';
import axios from 'axios';
import './index.css';

export default class GetIP extends Component{
    componentDidMount(){
        axios.get('https://api.ipify.org?format=json')
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