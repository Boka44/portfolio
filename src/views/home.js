import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import Typist from 'react-typist';
import bokaBG from '../images/boka.jpeg';
import westCoast from '../images/westCoast.jpeg';
import lookingGlass from '../images/lookingGlass.jpeg';
import more from '../images/more.jpg';
import portfolio from '../images/portfolio.jpeg';
import barjoker from '../images/barjoker.PNG';
import a2ndlife from '../images/2ndlife.jpg';
import fixCase from '../images/fixCase.PNG';

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

					
				  	<h2>I build full stack, responsive web applications. My clients range from small, local businesses to startups.
				  	Currently looking for a software engineer position within a company that can help me grow as developer.</h2>
				    <hr/>
				    <h1>Below are a few recent projects of mine.</h1>
				    <div className="fontOS">
				    	
				    	<div className="projectCard">
					    	<img src={a2ndlife} alt=""/>
					    	<br/>
					    	<a href="https://a2nd.life/" target='_blank' rel="noopener noreferrer">
					    	Click to view site</a>
					    	<h2>2nd Life</h2>
					    	<p>Optimized page loading times from 20 seconds to 3.</p>
					    	<p>Currently fixing other issues left by previous developers. Soon to start working on a new beta.</p>
					    	<p><em>Techs used: Javascript, HTML, CSS, jQuery, PHP, Laravel, MySql, GoDaddy</em></p>
				    	</div>
				    	
				    	<div className="projectCard">
					    	<img src={lookingGlass} alt=""/>
					    	<br/>
					    	<a href="https://stormy-woodland-25699.herokuapp.com/" target='_blank' rel="noopener noreferrer">
					    	Click to view site</a>
					    	<h2>Looking Glass</h2>
					    	<p>Static site made for a client.</p>
					    	<p>Looking Glass is a company in Redondo Beach that specializes in glass bottom boat 
					    	tours. They also offer rentals for kayaks, stand up paddle boards, and pedal boats.</p>
					    	<p>Will be integrating new features soon.</p>
				    	</div>
				    	
				    	<div className="projectCard">
					    	<img src={barjoker} alt=""/>
					    	<br/>
					    	<a href="http://barjoker.pub" target='_blank' rel="noopener noreferrer">
					    	Click to view site</a>
					    	<h2>barjoker.pub</h2>
					    	<p>Original application where friends put themselves through situations involving strangers, 
					    	set up as a dare with successes and punishments. Currently a protoype. Version 1 expected soon.</p>
					    	<p>Database is MySql through a droplet on Digital Ocean, hosting through AWS. Serperate server
					    	handles mailing accounts.</p> 
					    	<p><em>Techs used: Javascript, HTML, CSS, Bootstrap, jQuery, ejs, Express, Node, MySql, AWS, 
					    	Digital Ocean.</em></p>
					    	
							<p><em>Techs used: Javascript, HTML, CSS, Bootstrap, jQuery, Express, Node.</em></p>
				    	</div>
				    	
				    	<div className="projectCard">
					    	<img src={westCoast} alt=""/>
					    	<br/>
					    	<a href="http://codeboka.com/westCoast/" target='_blank' rel="noopener noreferrer">
					    	Click to view site</a>
					    	<h2>West Coast Weather</h2>
					    	<p>Weather App for West Coast Cities.</p>
					    	<p>User uses the client to select a city and view an eight day forecast.
					    	The data comes from a RESTful API I created using node which stores up to date weather 
					    	information in MongoDB.</p>
					    
					    	<p><em>Techs used: Javascript, HTML, CSS, React, Express, Node, MongoDB.</em></p>
				    	</div>

				    	<div className="projectCard">
					    	<img src={fixCase} alt=""/>
					    	<br/>
					    	<a href="https://chrome.google.com/webstore/detail/fixcase/fnjkbfajkchfileiohngeejgcpgemndm" 
					    	target='_blank' rel="noopener noreferrer">
					    	Click to view in Web Store</a>
					    	<h2>fixCase</h2>
					    	<p>This extension offers a tool to correct capitalization errors in writing.</p>
					    	<p>Offers Standard, camelCase, UPPERCASE, and lowercase conversion.</p>
					    
					    	<p><em>Techs used: Javascript, HTML, CSS.</em></p>
				    	</div>
				    

				    	<p id="smallFont">*Not shown is any work behind a Non Disclosure Agreement.</p>
				    </div>

				</div>

				
			</div>
			
)
}
}