import React, { Component } from 'react';
import { Col, Grid, Row, Image } from 'react-bootstrap';
import CIS from '../images/CIS.jpeg';
import CIS2 from '../images/CIS2-1.jpg';
import CIS3 from '../images/CIS3-1.jpeg';

let events = [
	{
		img: CIS2,
		info: "Moderator at BeachHacks for codeis.software"
	},
	{
		img: CIS,
		info: "codeis.software"
	},
	{
		img: CIS3,
		info: "Moderating the tech panel at BeachHacks."
	}
]

let groups = [
	{
		name: "Code and Coffee",
		type: "Meet up",
		info: "Long Beach meet up of developers at CitiqueIt every Saturday.",
		link: "codeandcoffeelb.org",
		site: "http://codeandcoffeelb.org/",
		inverse: false
	},
	{
		name: "codeis.software",
		type: "Group",
		info: "A collective that advocates for holistic software and continuous integration.",
		link: "codeis.software",
		site: "http://codeis.software/",
		inverse: true
	},
	{
		name: "Uncoded HackNights",
		type: "Group/ Meet ups",
		info: "Long Beach community of developers. Meet up at RebelBite every Tuesday night.",
		link: "www.uncoded.org",
		site: "http://www.uncoded.org/",
		inverse: false
	},
	{
		name: "js.la",
		type: "Meet up",
		info: "js.la hosts various JavaScript focused events throughout Los Angeles.",
		link: "js.la",
		site: "https://js.la/",
		inverse: true
	}
]

const EventMap = ({img, info}) => {
	return(
		<div id="events">
			<Image src={img} id="eventImage"/>
			<br/>
			{info}
		</div>
	)
}

const GroupMap = ({name, type, info, link, site, inverse}) => {
	return(
		inverse ? 
		(<div id="groups" className="inverse">
			<h3><strong>{name}</strong></h3>
			<p>{type}</p>
			<p>{info}</p>
			<a href={site} target='_blank' rel="noopener noreferrer">{link}</a>
		</div>) :
		(<div id="groups" >
			<h3><strong>{name}</strong></h3>
			<p>{type}</p>
			<p>{info}</p>
			<a href={site} target='_blank' rel="noopener noreferrer">{link}</a>
		</div>)
	)
}

export class Outreach extends Component {
	render() {
		return (
			<div className="footerPadding" id="outreach">
				<Grid>
					<Row>
						{events.map((e) => 
							<div className="fontOS">
								<Col lg={4} md={6} sm={6}>
									<EventMap img={e.img} info={e.info}/>
								</Col>
							</div>

						)}
						<br/>
						<Col sm={12}>
						<h2>Groups</h2>
						<hr/>
						{groups.map((g) => 
							<div className="fontOS" id="groupContainer">
								<Col lg={4} md={6} sm={6}>
									<GroupMap 
										name={g.name}
										type={g.type}
										info={g.info}
										link={g.link}
										site={g.site}
										inverse={g.inverse}
									/>
								</Col>
							</div>
						)}
						</Col>
					</Row>
				</Grid>
			</div>			
		)}
}