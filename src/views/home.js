import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import Typist from 'react-typist';
import bokaBG from '../images/boka.png';
import westCoast from '../images/westCoast.PNG';
import lookingGlass from '../images/lookingGlass.PNG';
import more from '../images/more.jpg';
import portfolio from '../images/portfolio.PNG';


export class Home extends Component {
	

	render(){
		return(
			<div id='homeBG' className='footerPadding'>	
				
				
				
				<Image src={bokaBG} id='homeBGImg' />

				<div id="homeText1">
						<Typist avgTypingDelay={70} >
							<Typist.Delay ms={1200} />
							Web App Developer
							<Typist.Delay ms={500} />
								<br />
							Musician
							<Typist.Delay ms={500} />
								<br />
							Creator
						</Typist>
				</div>
				
				<div className="wrapper fontN" >
				
					<div id="homeText2">
						<Typist avgTypingDelay={70} >
							<Typist.Delay ms={1200} />
							Web App Developer
							<Typist.Delay ms={500} />
								<br />
							Musician
							<Typist.Delay ms={500} />
								<br />
							Creator
						</Typist>
					
					
					</div>

					
				  	<h2>I build full stack, responsive web applications. Check out the about page to hear my story.</h2>
				    <p><em>Below are some recent projets I have worked on.</em></p>
				    <div className="fontOS">
				    	<img src={lookingGlass} alt=""/>
				    	<br/>
				    	<a href="https://stormy-woodland-25699.herokuapp.com/" target='_blank' rel="noopener noreferrer">
				    	Click to view site</a>
				    	<p>Static site made for a client.</p>
				    	<p>Will be integrating new features soon.</p>


						<p><em>Techs used: Javascript, HTML, CSS, Bootstrap, jQuery, Express, Node.</em></p>
				    	<img src={westCoast} alt=""/>
				    	<br/>
				    	<a href="https://boka44.github.io/westCoast/" target='_blank' rel="noopener noreferrer">
				    	Click to view site</a>
				    	<p>Weather App for West Coast Cities.</p>
				    	<p>User uses the client to select a city and view an eight day forecast.
				    	The data comes from a RESTful API I created using node which stores up to date weather 
				    	information in MongoDB.</p>

				    	<p><em>Techs used: Javascript, HTML, CSS, React, Express, Node, MongoDB.</em></p>
				    	<img src={portfolio} alt=""/>
				    	<p>The site you are currently viewing.</p>
				    	<p>Built using React. Uses a seperate Node server to handle the contact form with nodeMailer and send
				    	the information to me as an email.</p>
				    	<p><em>Techs used: Javascript, HTML, CSS, React, react-bootstrap, Express, Node.</em></p>
				    	<img src={more} alt=""/>
				    	<p>More projects are coming soon. The code can be viewed publicly on my Github.</p>
				    </div>

				</div>

				
			</div>
			
)
}
}