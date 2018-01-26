import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Col, Grid, Row } from 'react-bootstrap';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import { Home } from '../views/home';
import { About } from '../views/about';
import { Contact } from '../views/contact';

export class Sidebar extends Component {

	render() {
		return(
			<div>
				<Router>
				<div>
					<Grid>
						<Row>	
							<Col xs={2} className="sidebar">
								<LinkContainer to="/">
									<p>Home</p>
								</LinkContainer>
								<LinkContainer to="/about">
									<p>About</p>
								</LinkContainer>

								
								<LinkContainer to="/contact">
								<p>Contact</p>
								</LinkContainer>
								<div className='hiddenMobile'>
									<a href='https://www.facebook.com/nicholas.hrboka' target='_blank' rel="noopener noreferrer" className="fa fa-facebook"/>
									<a href='https://www.linkedin.com/in/nicholas-hrboka/' target='_blank' rel="noopener noreferrer" className="fa fa-linkedin"/>
									<a href='https://github.com/Boka44' target='_blank' rel="noopener noreferrer" className="fa fa-github"/>
									<a href='https://hrboka.wordpress.com/blog/' target='_blank' rel="noopener noreferrer" className="fa fa-wordpress"/>
									<a href="https://drive.google.com/file/d/1YSDQfzjY9Vdv4bHxpDdUMNKMQUciNdUU/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='fa fa-file-text'/>
								</div>
							</Col>
						</Row>
					</Grid>
					<Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    
                    <Route path="/contact" component={Contact} />
                </div>
                    
				</Router>
			</div>
		)
	}
}