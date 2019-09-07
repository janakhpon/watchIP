import React, { Fragment, Component } from 'react';
import { Form, Input, Button, Header, Image, Modal } from 'semantic-ui-react';
import Media from 'react-media';


export default class InputComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }


    show = () => () => this.setState({ open: true })
    handleClick = () => {
        this.setState({ open: true })
    };
    close = () => this.setState({ open: false })

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => this.setState({ email: '', name: '' })

    render() {
        const { name, open, dimmer } = this.state

        return (
            <Fragment>
                <Media query={{ maxWidth: 480 }}>
                    {matches =>
                        matches ? (
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group>
                                    <Form>
                                        <Input action={{ icon: 'search' }} name='name'
                                            value={name}
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
                                                name='name'
                                                value={name}
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