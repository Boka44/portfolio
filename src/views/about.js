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
		
		<p><em>My name is Nicholas Hrboka. I am a self-taught web developer with a background in sales and 
		recruiting from San Pedro, California. The most important thing you should know about me is that I 
		have a deep passion for creating, rooted in my love for making and performing original music.</em> 
		<br/>
		<br/>
		I absolutely love the concept of creating something organically from scratch. Some things in particular 
		being video games, board games, websites, applications, even a fantasy novel I have been writing for 
		some time. Creation is my constant, and my drive can not get enough of it. </p>
		<hr/>
		<p>In March of 2017, I began teaching myself programming while at the time working a corporate sales 
		job selling business loans. I enjoyed my past careers working with people in sales and recruiting, 
		though I never quite found that feeling of fulfillment I was looking for with them. As I always had 
		an interest in the tech industry, I started learning javascript on codeacademy.com after work every day.
		<br/>
		<br/> 
		Soon after, I began creating personal projects using HTML and CSS. Eventually, I began teaching myself 
		Node and React and found that everything just clicked. Getting a taste of this new found love for 
		programming lead to the quitting of my sales job in August to pursue a career and future as a software 
		developer. Now I create fullstack applications using Javascript, HTML, CSS, Node, React and many more 
		languages and frameworks. Took a C++ class at a local community college where I not only thoroughly enjoyed 
		creating various new programs, 
		I even scored a perfect 100% in the class. Currently working as a freelance developer with multiple clients
		and a quickly growing portfolio.</p>
		<hr/>
		<p>I believe life should be a constant adventure. Hiking, road trips, live music, sports, swimming, gaming, and 
		the like. I love trying new things and making new experiences and look forward to my future as a software 
		developer being one of them.</p>

		<p>To read my full story on my blog, click the link below:</p>
		<a href='https://hrboka.wordpress.com/2017/12/06/gitting-sick-story-time-with-boka-devember-day-5/' target='_blank' rel="noopener noreferrer">
		My Story</a>
	</div>
)
