	import React, { Component } from 'react';
	import { Button, Col, Grid, Row, Form, FormGroup, FormControl, 
	ControlLabel } from 'react-bootstrap';

	export class Contact extends Component {
		constructor(props) {
			super(props);
			this.state = {
				name: "",
				email: "",
				text: "",
				button: "Send"
			}
		}

		onChange = (e) => {
			const state = this.state;
			state[e.target.name] = e.target.value;
			this.setState(state);
		}

		onSubmit = (e) => {
			e.preventDefault();
			console.log(this.state.name)
			let data = {
					name: this.state.name,
					email: this.state.email,
					text: this.state.text
				};
			let formBody = []
			for (var property in data) {
				  var encodedKey = encodeURIComponent(property);
				  var encodedValue = encodeURIComponent(data[property]);
				  formBody.push(encodedKey + "=" + encodedValue);
				}
				formBody = formBody.join("&");

			
			const url = 'https://peaceful-reaches-32891.herokuapp.com/'
			fetch(url, {
				method: 'POST',
				headers: {
			    	'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
			    },
			    mode: 'cors',
				body: formBody
			}).then(res => res.json())
			.then(function (data) {
				console.log('Request success: ' + data);
			}).catch(function (error) {
				console.log('Request failure: ' + error);
			})
			this.setState({
				button: "Sent!"
			})
		}




		render() {
			const { name, email, text } = this.state;
			return(
				<div className='footerPadding'>
				<div className = 'fontOS'>
					
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
									        <FormControl required value={text} name="text" componentClass="textarea" style={{ height: 200 }} 
									        type="text" placeholder="Insert message here" onChange={this.onChange}/>
									    </Col>
								    </FormGroup>

								    

								    <FormGroup>
								      <Col smOffset={2} sm={10}>
								        <Button type="submit">
								          {this.state.button}
								        </Button>
								        <strong><h2>Nicholas Hrboka</h2></strong>
										<h4>nicholashrboka@gmail.com</h4>
										<h4>310 999 9634</h4>
								      </Col>
								    </FormGroup>
								</Form>
								
							</Col>
							<Col xs={2}>
							</Col>
					  	</Row>
					</Grid>
					
				</div>
			)
		}
	}