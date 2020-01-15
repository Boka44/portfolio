import React, { Component } from 'react';
import { Col, Grid, Row, Image } from 'react-bootstrap';
import me from '../images/me.jpg';



export class About extends Component {

	render() {
		return(
				
			<div id="aboutBG" className='footerPadding'>
		  		<Grid id='aboutContainer'>
		  			<Row>
		  				<Col md={4} sm={12} style={{padding: '0px'}}>
		  					<Image src={me} id='aboutImg' />
		  				</Col>
		  				<Col md={1}>
		  				</Col>
		  				<Col md={7} sm={12}>	      
			  				<MyStory/>
						</Col>
					</Row>	
			   </Grid>
			</div>
						
		)
	}
}





const MyStory = () => (
	<div id="myStory" className="fontP">
		<h1 className="fontN">Nicholas Hrboka</h1> 
		
		<p><em>My name is Nicholas Hrboka. I am a self-taught web developer with a background in sales and recruiting from San Pedro, California. I specialize in web app development, working with anyone from entrepreneurs to startups. With years of experience, I started my own business, Dev Dragon to further pursue my creative passion in development. 
		</em> 
		<br/>
		<br/>
		I believe life should be a constant adventure. Hiking, traveling, live music, sports, swimming, gaming, and the like. I love trying new things and making new experiences.</p>
	
		<p>To read my origin story on my blog, click the link below:</p>
		<a href='https://hrboka.wordpress.com/2017/12/06/gitting-sick-story-time-with-boka-devember-day-5/' target='_blank' rel="noopener noreferrer">
		My Story</a>
	</div>
)
