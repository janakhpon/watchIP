import React, { Fragment, Component } from 'react';
import { Form, Input, Button, Header, Image, Modal } from 'semantic-ui-react';
import axios from 'axios';
import Media from 'react-media';


export default class InputComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            ip: '',
            calling_code: '',
            city: '',
            continent_name: '',
            country_capital: '',
            country_code: '',
            country_flag: '',
            country_name: '',
            currency: {
                code: '',
                name: '',
                symbol: ''
            },
            district: '',
            geoname_id: '',
            isp: '',
            language: '',
            lattitude: '',
            longitude: '',
            organization: '',
            state_prov: '',
            time_zone: {
                current_time: '',
                current_time_unix: '',
                name: ''
            },
            zipcode: ''
        }
    }

    componentDidMount() {

    }


    show = () => () => this.setState({ open: true })
    handleClick = () => {
        axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=2153996dcb814b339ce73b691e6ffad5&ip=${this.state.ip}`)
            .then(response => {

                console.log(response);
                console.log(response.data.city)
                this.setState({
                    calling_code: response.data.calling_code,
                    city: response.data.city,
                    continent_name: response.data.continent_name,
                    country_capital: response.data.country_capital,
                    country_code: response.data.country_code,
                    country_flag: response.data.country_flag,
                    country_name: response.data.country_name,
                    currency: {
                        code: response.data.currency.code,
                        name: response.data.currency.name,
                        symbol: response.data.currency.symbol
                    },
                    district: response.data.district,
                    geoname_id: response.data.geoname_id,
                    isp: response.data.isp,
                    language: response.data.language,
                    lattitude: response.data.lattitude,
                    longitude: response.data.longitude,
                    organization: response.data.organization,
                    state_prov: response.data.state_prov,
                    time_zone: {
                        current_time: response.data.time_zone.current_time,
                        current_time_unix: response.data.time_zone.current_time_unix,
                        name: response.data.time_zone.name
                    },
                    zipcode: response.data.zipcode
                })

                console.log(this.state)
            })
            .catch(error => {

                console.log(error);
            })

        this.setState({ open: true })
    };
    close = () => this.setState({ open: false })

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => this.setState({ email: '', ip: '' })

    render() {
        const { ip, open, dimmer } = this.state

        return (
            <Fragment>
                <Media query={{ maxWidth: 480 }}>
                    {matches =>
                        matches ? (
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group>
                                    <Form>
                                        <Input action={{ icon: 'search' }} name='ip'
                                            value={ip}
                                            onChange={this.handleChange} placeholder='Search IPV4 address ..' style={{ width: '80vw' }} />
                                    </Form>
                                </Form.Group>
                            </Form>
                        ) : (
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group>
                                        <Form>
                                            <Input
                                                action={{
                                                    icon: "search",
                                                    onClick: () => this.handleClick()
                                                }}
                                                name='ip'
                                                value={ip}
                                                onChange={this.handleChange} placeholder='Search IPV4 address ..' style={{ width: '60vw' }} />
                                        </Form>
                                    </Form.Group>
                                </Form>
                            )
                    }
                </Media>


                <Modal dimmer={dimmer} open={open} onClose={this.close}>
                    <Modal.Header>Select a Photo</Modal.Header>
                    <Modal.Content image>
                        <Image
                            wrapped
                            size='medium'
                            src='https://react.semantic-ui.com/images/avatar/large/rachel.png'
                        />
                        <Modal.Description>
                            <Header>Default Profile Image</Header>
                            <p>
                                We've found the following gravatar image associated with your
                                e-mail address.
              </p>
                            <p>Is it okay to use this photo?</p>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='black' onClick={this.close}>
                            Nope
            </Button>
                        <Button
                            positive
                            icon='checkmark'
                            labelPosition='right'
                            content="Yep, that's me"
                            onClick={this.close}
                        />
                    </Modal.Actions>
                </Modal>


            </Fragment>
        );
    }
}