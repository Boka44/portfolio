import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom';
import { Button, Col, Grid, Row, Modal, Carousel } from 'react-bootstrap';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Image, Thumbnail } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Typist from 'react-typist';
import Javascript from '../images/Javascript.png';
import HTML from '../images/HTML.png';
import Bootstrap from '../images/bootstrap.png';
import CSS from '../images/CSS.png';
import ReactLogo from '../images/react.png';
import Redux from '../images/redux.png';
import Express from '../images/express.png';
import CPP from '../images/cpp.png';
import Node from '../images/node.png';
import MySQL from '../images/mysql.png';
import jQuery from '../images/jquery.png';
import LookingGlass from '../images/Looking_Glass.jpg';
import WeatherApp from '../images/wca.PNG';
import ToDo from '../images/todo.PNG';
import LG1 from '../images/LG1.PNG';
import LG2 from '../images/LG2.PNG';
import LG3 from '../images/LG3.PNG';
import WC1 from '../images/WC1.PNG';
import WC2 from '../images/WC2.PNG';
import WC3 from '../images/WC3.PNG';
import TD1 from '../images/TD1.PNG';
import TD2 from '../images/TD2.PNG';




export class About extends Component {
	render() {
		return(
				
			<div>
				  <Router>
				  		<Grid>
				  			<Row>
				  				
								      
			  					<Col xs={2}>
							   
							    	<Nav bsStyle="pills" stacked='false' id="aboutNav">
								        <LinkContainer to="/about/mystory">
                                   			<NavItem eventKey={1} >My Story</NavItem>
                                		</LinkContainer>
                                		<LinkContainer to="/about/tech">
                                   			<NavItem eventKey={1} >Tech</NavItem>
                                		</LinkContainer>
                                		<LinkContainer to="/about/projects">
                                   			<NavItem eventKey={1} >Projects</NavItem>
                                		</LinkContainer>
                            		</Nav>
							          	
							          	
							     </Col>
							     <Col xs={8}>

							        {routes.map((route, index) => (
							         
							          	<Route
							            	key={index}
							            	path={route.path}
							            	exact={route.exact}
							            	component={route.topbar}
							          	/>
							        ))}
								   <Row>
									
									<Col xs={12} >

									      	
								       	{routes.map((route, index) => (
								         	
								          	<Route
								            	key={index}
								            	path={route.path}
								            	exact={route.exact}
								            	component={route.main}
								          	/>
								        ))}
									      	
								     </Col>

								    
								</Row>
								</Col>
							</Row>
							
					   </Grid>
				  </Router>
			</div>
						
		)
	}
}




const routes = [
  	{ 
  		path: '/about/mystory',
    	exact: true,
    	topbar: () => <h2>My Story</h2>,
    	main: () => <MyStory/>
  	},
  	{ 
  		path: '/about/tech',
    	topbar: () => <h2>Tech</h2>,
    	main: () => <Tech/>
  	},
  	{ 
  		path: '/about/projects',
    	topbar: () => <h2>Projects</h2>,
    	main: () => <Projects/>
  	},
  	{ 
  		path: '/about',
  		exact: true,
    	topbar: () => <h2></h2>,
    	main: () => <div id="myStory" >
    					<Typist avgTypingDelay={70} >
    						<Typist.Delay ms={500} />
							<span>Click a link to the left to hire me</span>
							<Typist.Delay ms={500} />
							<Typist.Backspace count={7} delay={200} />
							<span>get to know me</span>
						</Typist>
					</div>
  	}
]

const MyStory = () => (
	<div id="myStory">

<br/>I'll tell you my story. But first, what is a dream? A dream can be anything. It can be becoming a millionaire, or even finding that perfect sour beer (if you know, please PLEASE share with me). Having one in my opinion is crucial to progressing through life. My question is, have you ever gotten a taste of that dream? It changes everything. The most addictive drug. Try it and I promise you will be hooked.

<br/><br/>Well, my dreams seemed out of reach for a long time. Music, more specifically guitar, has always been one of the biggest passions of my life. As an active musician in Los Angeles, it has brought me so much happiness. Happiness doesn't always mean money though. The hard truth I had to accept is music doesn't pay. I loved creating music regardless. It echoes the true voice of my soul.

<br/><br/><Image src={"https://hrboka.files.wordpress.com/2017/12/rock-profile.jpg"} alt="rock profile" responsive={true} />

<br/><br/>To understand how I work, I want to talk about something else first. Legos.

<br/><br/>Yes, Legos. I had a giant box of them as a child, and I was obsessed. I would be building for hours every day. Although, if you ever witnessed me playing with them, you might have noticed something: The instructions and how to manuals never left there boxes. I created everything myself, and took pride in making the most unique space action robot vehicle thingies you've ever seen. Including a missile that could endlessly blow up with a sarcastic personality.

<br/><br/><Image src={"https://hrboka.files.wordpress.com/2017/12/legos1.jpg"} responsive={true} alt="legos1.jpg"/>

<br/><br/>So, looking back at a younger me, seeing myself with music, and noting that I also have created my own RPG game and board game, I realized they all had one thing in common. Creation. I love creating. I also love tech. See where I'm getting at?

<br/><hr />

<br/>So in December 2016, I started my first day as a funding adviser selling business loans. Coming from a recruiting background, I convinced the director of sales and the VP that I had the right skill set for the position. I wasn't bad either. After doing office jobs with quotas and high pressure environments for so long, I felt something was missing and couldn't say what it was.

<br/><br/>I wasn't happy. I was settling, and I didn't see any way out. Figured if I can make money here I'll have to make it work. Then I met someone very special. Someone I fell for, hard. She inspired me in such a way that words cannot describe, and I confided in her that I always had an interest in tech and programming. Now, I have heard a lot of encouragement from friends and family about taking chances and being successful. There was something different about hearing it from her though. She doesn't care for settling, she is a free, adventurous soul doing whatever makes her happy. I'll get back to the point, because I have plenty to say about her.

<br/><br/>I started teaching myself Javascript on codeacademy.com. I heavily recommend that site if you ever want to see if you are into coding or not. After a few months of learning and teaching myself the concepts, I took a one day class on CSS and HTML, and immediately I dove in. Started creating small static front end sites, and I felt that spark. The spark of creation building inside of me.

<br/><br/><a href="https://www.codecademy.com/learn" target="_blank" rel="noopener">Check out CodeAcademy here!</a>

<br/><br/>It was then, that I got a taste of that dream. The future a head of me for the first time in  my life began to take shape and form. This incredible woman before me, traveling, programming, creating for a living while making money and being <strong>happy</strong>.

<br/><br/>Now, this perfect woman left for the peace corps, and I took action for what feels like the first time in my life. I took control. I quit my job, started school, left my house, and moved into my grandparents basement. Since then, I have learned so much about languages and frameworks, that I've even begun creating complex projects of my own. I even started this blog.

<br/><hr />

<br/>So that's a short and condensed version of my story. As I apply for work in the industry of my dream, I feel it's important to share my story. It's my motivation. Why I work tirelessly every day learning and building my portfolio.

<br/><br/>So cheers, to life! Now go out, and find what motivates you. Enjoy the mess that becomes your life.

<br/><br/><Image src={"https://hrboka.files.wordpress.com/2017/12/1277751_4962655204323_175567180_o.jpg"} alt="1277751_4962655204323_175567180_o" responsive={true} />

 
	</div>
)

class Tech extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
			cards: [
				{
					id: 1,
					text: "Javascript",
					img: Javascript
				},
				{
					id: 2,
					text: "HTML",
					img: HTML
				},
				{
					id: 3,
					text: "CSS",
					img: CSS
				},
				{
					id: 4,
					text: "Bootstrap",
					img: Bootstrap
					
				},
				{
					id:5,
					text:"React",
					img: ReactLogo
				},
				{
					id: 6,
					text: "Redux",
					img: Redux
				},
				{
					id: 7,
					text: "jQuery",
					img: jQuery
				},
				{
					id: 8,
					text: "Node.js",
					img: Node
				},
				{
					id: 9,
					text: "Express.js",
					img: Express
				},
				{
					id: 10,
					text: "MySQL",
					img: MySQL
				},
				{
					id: 11,
					text: "C++",
					img: CPP
				}

			]
	    };
	};

	    render(){
	    	return(
	<div>
		<ul id="cancelPadding">
          {this.state.cards.map(card =>
            <div key={card.id} id="aboutCard" >
              <Card 
                card={card}
                img={card.img}
              />
            </div>
          )}
        </ul>
	</div>
)
}
}
const Card = ({ card, img }) => (
  <div >
    <h3>{card.text}</h3>
    <Image id='cardImg' src={img}/>
  </div>
)

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state={
			showModalLG: false,
			showModalWA: false,
			showModalToDo:false
			
		}
		this.openLG=this.openLG.bind(this);
		this.openWA=this.openWA.bind(this);
		this.openToDo=this.openToDo.bind(this);
		this.closeLG=this.closeLG.bind(this);
		this.closeWA=this.closeWA.bind(this);
		this.closeToDo=this.closeToDo.bind(this);
	}

	openLG() {
		this.setState({
			showModalLG: true
		})
		console.log('Working')
	}
	openWA() {
		this.setState({
			showModalWA: true
		})
	}
	openToDo() {
		this.setState({
			showModalToDo: true
		})
	}

	closeLG() {
		this.setState({
			showModalLG: false
		})
	}
	closeWA() {
		this.setState({
			showModalWA: false
		})
	}
	closeToDo() {
		this.setState({
			showModalToDo: false
		})
	}


	


	render() {

		

		return (
	<div>
		<div>
			<h4>All of the code below can be viewed on my GitHub. See Links.</h4>
			<h5>Other projects will be added on later, as they are still in developement.</h5>
			<h5>Most of those can be viewed on my GitHub. Visit the Links tab above.</h5>
		</div>

	
	<Grid>
	    <Row>
	      <Col md={8} sm={10}>
	        <Thumbnail src={LookingGlass} alt="242x200">
	          <h3>Looking Glass</h3>
	          <p>Static site made for a client.</p>
	          <p>Currently waiting for the last few photos before deploying.</p>
	          <p>Techs used: Javascript, HTML, CSS, Bootstrap, jQuery, Express, Node.</p>
	          <p>
	          <Button bsStyle="primary" onClick={this.openLG}>View Images</Button>
	          </p>
	          
	        </Thumbnail>
	      </Col>
	      <Col md={8} sm={10}>
	        <Thumbnail src={WeatherApp} alt="242x200">
	          <h3>Weather App</h3>
	          <p>Built within my React Playground</p>
	          <p>Takes a user input for a latitude and longitude and fetches an 
	          eight day forecast from an API. User can input new coordinates that will
	          update the app without refeshing the page.</p>
	          <p>Next step is to predefine a list of cities for the user to select
	          from a dropdown list.</p>
	          <p>Not deployed due to API limits</p>
	          <p>Tech: Javascript, HTML, CSS, JSX, React.</p>
	          <p>
	            <Button bsStyle="primary" onClick={this.openWA}>View Images</Button>
	            
	          </p>
	        </Thumbnail>
	      </Col>
	      <Col md={8} sm={10}>
	        <Thumbnail src={ToDo} alt="242x200">
	          <h3>To Do List</h3>
	          <p>Built wihtin my React Playground</p>
	          <p>Takes the users name, displays it, then updates the task list as 
	          tasks are entered. Can click to delete a task.</p>
	          <p>Tech: Javascript, HTML, CSS, JSX, React.</p>
	          <p>
	            
	            <Button bsStyle="primary" onClick={this.openToDo}>View Images</Button>
	          </p>
	        </Thumbnail>
	      </Col>
  

	  <Modal show={this.state.showModalLG} onHide={this.closeLG} >
	    
	      <Modal.Header closeButton>
	        <Modal.Title>Looking Glass</Modal.Title>
	      </Modal.Header>

	      <Modal.Body>
	        <Carousel>
			    <Carousel.Item>
			      <img width={900} height={500} alt="900x500" src={LG1} />
			      <Carousel.Caption id='fontFix'>
			        <h3>Home Page</h3>
			        <p>The goal was to drive sales using the background to help place the user
			        in the ocean while reading about their services.</p>
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			      <img width={900} height={500} alt="900x500" src={LG2} />
			      <Carousel.Caption id='fontFix'>
			        <h3>Services</h3>
			        <p>When clicking on a service, a modal focuses the users atention ona single
			        sercive. Much like I am doing to you now</p>
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			      <img width={900} height={500} alt="900x500" src={LG3} />
			      <Carousel.Caption id='fontFix'>
			        <h3>Contact</h3>
			        <p>Page is mobile responsive, along with a google maps integration.
			        Background was edited by me using GIMP</p>
			      </Carousel.Caption>
			    </Carousel.Item>
			</Carousel>
	      </Modal.Body>

	      <Modal.Footer>
	        <Button onClick={this.closeLG} >Close</Button>
	        
	      </Modal.Footer>

	    
	  </Modal>

	  <Modal show={this.state.showModalWA} onHide={this.closeWA} >
	    
	      <Modal.Header closeButton>
	        <Modal.Title>Weather App</Modal.Title>
	      </Modal.Header>

	      <Modal.Body>
	        <Carousel>
			    <Carousel.Item>
			      <img width={900} height={500} alt="900x500" src={WC2} />
			      <Carousel.Caption id='fontFix'>
			        <h3>Inputs</h3>
			        <p>Asks for user input. Styling comes after completion of app.</p>
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			      <img width={900} height={500} alt="900x500" src={WC1} />
			      <Carousel.Caption id='fontFix'>
			        <h3>Los Angeles</h3>
			        <p>Displays eight day weather forecast.</p>
			    </Carousel.Caption>	   
			    </Carousel.Item>
			    <Carousel.Item>
			      <img width={900} height={500} alt="900x500" src={WC3} />
			      <Carousel.Caption id='fontFix'>
			        <h3>Weather Card</h3>
			        <p>Each card is generated from a single JSX template and uses map() 
			        to request each days data. Uses animated icons as well.</p>
			      </Carousel.Caption>
			    </Carousel.Item>
			</Carousel>
	      </Modal.Body>

	      <Modal.Footer>
	        <Button onClick={this.closeWA} >Close</Button>
	        
	      </Modal.Footer>

	    
	  </Modal>

	  <Modal show={this.state.showModalToDo} onHide={this.closeToDo} >
	    
	      <Modal.Header closeButton>
	        <Modal.Title>ToDo App</Modal.Title>
	      </Modal.Header>

	      <Modal.Body>
	        <Carousel>
			    <Carousel.Item>
			      <img width={900} height={500} alt="900x500" src={TD1} />
			      <Carousel.Caption id='fontFix'>
			        <h3>To Do App</h3>
			        <p>Two inputs. The users name autoupdates in the HTML
			        field below it.</p>
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			      <img width={900} height={500} alt="900x500" src={TD2} />
			      <Carousel.Caption id='fontFix'>
			        <h3>Result</h3>
			        <p>Updates without refreshing. Cna click to delete task.
			        Stores the number of tasks as well.</p>
			      </Carousel.Caption>
			    </Carousel.Item>
			</Carousel>
	      </Modal.Body>

	      <Modal.Footer>
	        <Button onClick={this.closeToDo} >Close</Button>
	        
	      </Modal.Footer>

	    
	  </Modal>
    </Row>
  </Grid>
</div>
)
}
}

