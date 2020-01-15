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
import doyleRules from '../images/doylerules.PNG';
import stockApp from '../images/stockApp.PNG';
import dagumbo from '../images/dagumbo.PNG';
import ocean from '../images/oceanPNG.PNG';
import bakhu from '../images/bakhupng.png';

export class Home extends Component {
	

	render(){
		return(
			<div id='homeBG' className='footerPadding'>	
				
				
				
				<Image src={bokaBG} id='homeBGImg' />

				<div id="homeText1">
						<Typist avgTypingDelay={70} >
							<Typist.Delay ms={1200} />
							JavaScript Developer
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
							JavaScript Developer
							<Typist.Delay ms={500} />
								<br />
							Musician
							<Typist.Delay ms={500} />
								<br />
							Creator
						</Typist>
					
					
					</div>

					
				  	<h2>I build full stack, responsive web applications. My clients range from small, local businesses to startups.
				  	Currently building my own company, Dev Dragon, and expanding my network.</h2>
				    <hr/>
				    <div className="fontOS">

						<div className="projectCard">
					    	<img src={bakhu} alt=""/>
					    	<br/>
					    	<a href="" target='_blank' rel="noopener noreferrer">
					    	Click to view site</a>
					    	<a href="https://github.com/Boka44/bakhu" target='_blank' rel="noopener noreferrer">
					    	Click to view code</a>
							<a href="https://github.com/Boka44/bakhuLambda" target='_blank' rel="noopener noreferrer">
					    	Click to view lambda code</a>
					    	<h2>Bakhu</h2>
					    	<p>Site created for Bakhu Holdings</p>
					    	<p>Bakhu Holdings info coming soon...</p>
					    	<p><em>Techs used: Javascript, HTML, CSS, SASS, AWS Lambda and Lightsail, Node, MongoDB, Express.</em></p>
				    	</div>

						<div className="projectCard">
					    	<img src={ocean} alt=""/>
					    	<br/>
					    	<a href="http://oceanpacificdreams.com/" target='_blank' rel="noopener noreferrer">
					    	Click to view site</a>
					    	<a href="https://github.com/Boka44/oceanPacific" target='_blank' rel="noopener noreferrer">
					    	Click to view code</a>
					    	<h2>Ocean Pacific Dreams</h2>
					    	<p>Site created to drive sales for land in Costa Rica.</p>
					    	<p>Ocean Pacific Dreams sells plots of land in various areas of Costa Rica.</p>
					    	<p><em>Techs used: Javascript, HTML, CSS, SASS, AWS S3 Buckets and EB, Node, Express, MongoDB</em></p>
				    	</div>

				    	<div className="projectCard">
					    	<img src={dagumbo} alt=""/>
					    	<br/>
					    	<a href="http://dagumbo.com/" target='_blank' rel="noopener noreferrer">
					    	Click to view site</a>
					    	<a href="https://github.com/Boka44/dagumbo" target='_blank' rel="noopener noreferrer">
					    	Click to view code</a>
					    	<h2>Dagumbo</h2>
					    	<p>Static site made for a client.</p>
					    	<p>Dagumbo is a car restored to perfection by my client Lynn, with the goal of putting her in film and 
					    	photography.</p>
					    	<p><em>Techs used: Javascript, HTML, CSS, SASS, Bootstrap, Surge</em></p>
				    	</div>
				    	
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
					    	<img src={doyleRules} alt=""/>
					    	<br/>
					    	<a href="https://doylerules.band" target='_blank' rel="noopener noreferrer">
					    	Click to view site</a>
					    	<a href="https://github.com/Boka44/doyleRules" target='_blank' rel="noopener noreferrer">
					    	Click to view code</a>
					    	<h2>Doyle Rules</h2>
					    	<p>Site made for the Misfits Tribute Band Doyle Rules.</p>
					    	<p>Set up band login for the CRM so they can edit content and shows. Created geolocation feature that tells
					    	user of the closest show within the next 3 months. Contact form sends emails using Nodemailer.</p>
					    	<p><em>Techs used: Javascript, HTML, CSS, SASS, ejs, MongoDB, Express, Node, AWS, GoDaddy</em></p>
				    	</div>

				    	<div className="projectCard">
					    	<img src={stockApp} alt=""/>
					    	<br/>
					    	<a href="https://github.com/Boka44/bizAppClient" target='_blank' rel="noopener noreferrer">
					    	Click to view client code</a>
					    	<a href="https://github.com/Boka44/bizAppServer" target='_blank' rel="noopener noreferrer">
					    	Click to view server code</a>
					    	<h2>Stock App</h2>
					    	<p>Angular app made for a code challenge.</p>
					    	<p>Learned and implemented Angular 6 to build the app in 6 days. The Challenge:</p>
					    	<p>Develop a website for trading where the traders can either sign up or sign in 
					    	(using Facebook or Google) and they should be navigated to the dashboard screen. 
					    	Traders can mark the stocks as favourites by searching them. All the user favourites 
					    	stocks are shown in the dashboard.</p>
					    	<p>Used social logins like Google and Facebook, along with Json Web Tokens to authenticate the 
					    	server and each endpoint.</p>
					    	<p><em>Techs used: Javascript, HTML, CSS, Angular 6, MongoDB, Express, Node</em></p>
				    	</div>
				    	
				    	<div className="projectCard">
					    	<img src={lookingGlass} alt=""/>
					    	<br/>
					    	<a href="https://stormy-woodland-25699.herokuapp.com/" target='_blank' rel="noopener noreferrer">
					    	Click to view site</a>
					    	<a href="https://github.com/Boka44/Looking-Glass" target='_blank' rel="noopener noreferrer">
					    	Click to view code</a>
					    	<h2>Looking Glass</h2>
					    	<p>Static site made for a client.</p>
					    	<p>Looking Glass is a company in Redondo Beach that specializes in glass bottom boat 
					    	tours. They also offer rentals for kayaks, stand up paddle boards, and pedal boats.</p>
					    	<p>Will be integrating new features soon.</p>
					    	<p><em>Techs used: Javascript, HTML, CSS, Bootstrap, jQuery, Express, Node.</em></p>
				    	</div>
				    	
				    	<div className="projectCard">
					    	<img src={barjoker} alt=""/>
					    	<br/>
					    	<a href="http://barjoker.pub" target='_blank' rel="noopener noreferrer">
					    	Click to view site</a>
					    	<a href="https://github.com/Boka44/barjoker" target='_blank' rel="noopener noreferrer">
					    	Click to view code</a>
					    	<h2>barjoker.pub</h2>
					    	<p>Original application where friends put themselves through situations involving strangers, 
					    	set up as a dare with successes and punishments. Currently a protoype. Version 1 expected soon.</p>
					    	<p>Database is MySql through a droplet on Digital Ocean, hosting through AWS. Serperate server
					    	handles mailing accounts.</p> 
					    	<p><em>Techs used: Javascript, HTML, CSS, Bootstrap, jQuery, ejs, Express, Node, MySql, AWS, 
					    	Digital Ocean.</em></p>
					    	
				    	</div>
				    	
				    	<div className="projectCard">
					    	<img src={westCoast} alt=""/>
					    	<br/>
					    	<a href="http://codeboka.com/westCoast/" target='_blank' rel="noopener noreferrer">
					    	Click to view site</a>
					    	<a href="https://github.com/Boka44/westCoast" target='_blank' rel="noopener noreferrer">
					    	Click to view client code</a>
					    	<a href="https://github.com/Boka44/weatherServer" target='_blank' rel="noopener noreferrer">
					    	Click to view server code</a>
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
					    	<a href="https://github.com/Boka44/fixCase" 
					    	target='_blank' rel="noopener noreferrer">
					    	Click to view code</a>
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