import React, { Component } from 'react';
import axios from 'axios';
import './index.css';

export default class Index extends Component {
    state = {}
    componentDidMount() {
        axios.get('https://api.ipinfodb.com/v3/ip-country/?key=75b4845a02ba11983db6bea0e92c3f2e410e4117d1bada5de87436f9b50bb215&ip=103.217.157.122')
            .then(function (response) {

                console.log(response);
            })
            .catch(function (error) {

                console.log(error);
            })
            .finally(function () {

            });
    }

    render() {
        return (
            <React.Fragment>
                

            </React.Fragment>

        );
    }
}