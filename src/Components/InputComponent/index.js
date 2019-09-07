import React, { Fragment, Component } from 'react';
import { Form, Input } from 'semantic-ui-react';

export default class InputComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }


    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => this.setState({ email: '', name: '' })

    render() {
        const { name } = this.state

        return (
            <Fragment>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form>
                        <Input action={{ icon: 'search' }}  name='name'
                            value={name}
                            onChange={this.handleChange} placeholder='Search...' style={{width:'50vw'}} />
                        </Form>
                    </Form.Group>
                </Form>
            </Fragment>
        );
    }
}