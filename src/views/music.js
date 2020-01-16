import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import video from "../videos/boka.webm";


export class Music extends Component {

    constructor (props) {
        super(props);

        this.state = {
            videoURL: video
        }
    }

	render() {
		return(
				
			<div id="musicBG" className='footerPadding'>
		  		<Grid id='musicContainer'>
		  			<Row>
		  				<Col md={12} sm={12} id="">	      
                            <video autoPlay muted loop id="myVideo">
                             <source src={require('../videos/boka.webm')} type="video/webm" />
                            </video>

                            <div className="content">
                            <h1>Singer &#9760; Guitarist &#9760; Songwriter &#9760; Producer &#9760; Promoter</h1>
                            
                            </div>
						</Col>
					</Row>	
			   </Grid>
			</div>
						
		)
	}
}

