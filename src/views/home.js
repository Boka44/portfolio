import React, { Component } from 'react';
import {
	HashRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom';
import { About } from './about';
import { Button, Col, Grid, Row, Image, ProgressBar, Well, Panel } from 'react-bootstrap';
import Typist from 'react-typist';


export class Home extends Component {
	

	render(){
		return(
			<div>	
			<div id="homeBG">
				<div id="homeText">
					<Typist avgTypingDelay={70} >
						<Typist.Delay ms={1200} />
						I am a dreamer
						<Typist.Delay ms={500} />
							<br />
						a creator
						<Typist.Delay ms={500} />
							<br />
						a web app developer
					</Typist>
				</div>	
			</div>

			<Grid fluid={true} id="profileContainer">
				<Row >
					<Col xs={12} id="homeMe">
						<Me/>
					</Col>
				</Row>
			</Grid>
			<Grid fluid={true}>
				<Row>
					<Col lgHidden md={12} sm={12} id='profileStats'>
						<Info/>
					</Col>
				</Row>
				<Row>
					<div>
					<Col lgHidden md={12} sm={12} id='profileStatsResp'>
						<Stats/>
					</Col>
					<Col lg={6} md={12} id='profileStats' >
						<Image src={require('../images/theChamptest.jpg')} responsive={true}/>
					</Col>
					<Col lg={6} mdHidden smHidden xsHidden id='profileStats'>
						<Info/>
						<Stats/>
						<br/>
						<h3>Part of responsive web design is creating areas that move and dissapear as the screen changes.</h3>
						<h3>Try resizing the page.</h3>
						
					</Col>
					</div>
				</Row>

			</Grid>		
			</div>
					
		)
	}
}

class Stats extends Component {
	constructor(props) {
		super(props)
		this.state={
			isHiddenF: true,
			isHiddenB: true


		}
		this.onClickF = this.onClickF.bind(this);
		this.onClickB = this.onClickB.bind(this);
	}

	onClickF = () => {
		this.setState({
			isHiddenF: !this.state.isHiddenF
		})
	}
	onClickB = () => {
		this.setState({
			isHiddenB: !this.state.isHiddenB
		})
	}

	render(){
	return(
	<div >
	
		<h1 >Front End</h1>
		<Button onClick={this.onClickF} bsStyle="info" bsSize="large">Check Progress</Button>
		<br/><br/>
		{!this.state.isHiddenF && <ProgressBar id="homeButtonF">
		    <ProgressBar active striped bsStyle="success" now={25} key={1} label="Javascript" />
		    <ProgressBar active bsStyle="warning" now={15} key={2} label="HTML" />
		    <ProgressBar active bsStyle="danger" now={15} key={3} label="CSS" />
		    <ProgressBar active now={10} key={4} label="Bootstrap" />
		    <ProgressBar active bsStyle="info" now={15} key={5} label="React" />
		    <ProgressBar active striped bsStyle="success" now={10} key={6} label="jQuery" />
		    <ProgressBar active bsStyle="warning" now={10} key={7} label="EJS" />
  		</ProgressBar>}

  		<h1> Back End</h1>
  		<Button onClick={this.onClickB} bsStyle="info" bsSize="large">Check Progress</Button>
  		<br/><br/>
  		{!this.state.isHiddenB && <ProgressBar id="homeButtonB">
		    <ProgressBar active striped bsStyle="success" now={40} key={1} label="Node" />
		    <ProgressBar active bsStyle="warning" now={20} key={2} label="Express" />
		    <ProgressBar active bsStyle="danger" now={30} key={3} label="C++" />
		    <ProgressBar active bsStyle="primary" now={10} key={4} label="MySQL" /> 
		  </ProgressBar>}
		  
	</div>	
)
}
}

const Me = () => (
	<div>
		<h2>Nicholas Hrboka</h2>
	</div>
)

const Info = () => (
	<div>
  		<h3>I build responsive web applications. Check out the about page to hear my story.</h3>   
	</div>
)
