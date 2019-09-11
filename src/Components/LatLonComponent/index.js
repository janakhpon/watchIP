import React, { Component, Fragment, createRef } from 'react';
import { Input, Button } from 'semantic-ui-react';
import './index.css';


export default class LatLonComponent extends Component {

    inputRef = createRef()
    handleClick = () => this.inputRef.current.focus()

    render() {
        return (
            <Fragment>
                <div>
                    <Button content='Allow Geolocation' onClick={this.handleClick} />
                    <Input ref={this.inputRef} style={{ width: '40vw' }} placeholder='Search...' />
                    <Button
                        positive
                        icon='checkmark'
                        labelPosition='right'
                        content="Display Details"
                        style={{marginLeft:5}}

                    />
                </div>
            </Fragment>
        );
    }
};
