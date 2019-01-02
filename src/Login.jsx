
import React from 'react';
import {
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';

export default class Login extends React.Component {
    render() {
	return(
	    <>
	      <Form>
		<FormGroup>
		  <Label>Username: </Label>
		  <Input type="text"/>
		  <Label>Password: </Label>
		  <Input/>
		</FormGroup>
	      </Form>
	    </>
	);
    }
}
