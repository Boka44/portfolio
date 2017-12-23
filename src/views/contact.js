	import React, { Component } from 'react';
	import { Button, Col, Grid, Row, Form, FormGroup, FormControl, 
	ControlLabel, Checkbox, Alert } from 'react-bootstrap';

	export class Contact extends Component {
		constructor(props) {
			super(props);
			this.state = {
				name: "",
				email: "",
				message: ""
			}
		}

		onChange = (e) => {
			const state = this.state;
			state[e.target.name] = e.target.value;
			this.setState(state);
		}

		onSubmit = (e) => {
			e.preventDefault();
			const { name, email, message } = this.state;


		}




		render() {
			const { name, email, message } = this.state;
			return(
				<div>
				<div>
					<Alert bsStyle="warning">
					    <strong>Heads up!</strong> This page is still under construction in the back end. 
					    Use the contact info below until the form is complete.
					</Alert>
				</div>
					<Grid>
						<Row id="contactForm">
							<Col xs={2}>
							</Col>
							<Col xs={8}>
								<Form horizontal onSubmit={this.onSubmit} method="POST" action="/contact">
								    <FormGroup >
								      <Col componentClass={ControlLabel} sm={2}>
								        Name
								      </Col>
								      <Col sm={10}>
								        <FormControl required value={name} name="name" type="name" 
								        placeholder="Name" onChange={this.onChange} />
								      </Col>
								    </FormGroup>

								    <FormGroup controlId="formHorizontalPassword">
								      <Col componentClass={ControlLabel} sm={2}>
								        Email
								      </Col>
								      <Col sm={10}>
								        <FormControl required value={email} name="email" type="email" 
								        placeholder="Email" onChange={this.onChange}/>
								      </Col>
								    </FormGroup>

								    <FormGroup>
								    	<Col componentClass={ControlLabel} bsSize="lg" sm={2}>
									        Message
									    </Col>
									    <Col sm={10}>
									        <FormControl required value={message} name="message" componentClass="textarea" style={{ height: 200 }} 
									        type="message" placeholder="Insert message here" onChange={this.onChange}/>
									    </Col>
								    </FormGroup>

								    <FormGroup>
								      <Col smOffset={2} sm={10}>
								        <Checkbox>Flag as important</Checkbox>
								      </Col>
								    </FormGroup>

								    <FormGroup>
								      <Col smOffset={2} sm={10}>
								        <Button type="submit">
								          Send
								        </Button>
								      </Col>
								    </FormGroup>
								</Form>
							</Col>
							<Col xs={2}>
							</Col>
					  	</Row>
					</Grid>
					<div>
						<strong><h2>Nicholas Hrboka</h2></strong>
						<h4>nicholashrboka@gmail.com</h4>
						<h4>310 999 9634</h4>

					</div>
				</div>
			)
		}
	}