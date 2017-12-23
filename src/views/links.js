import React, { Component } from 'react';
import { Button, Col, Grid, Row } from 'react-bootstrap';

export class Links extends Component {

	render() {
		return(
			<div>
				<h2>View my resume here!</h2>
				<a href="https://drive.google.com/file/d/1YSDQfzjY9Vdv4bHxpDdUMNKMQUciNdUU/view?usp=sharing" target="_blank">
					Click to View!
				</a>
				<h2>GitHub</h2>
				<a href="https://github.com/Boka44" target='_blank'>
					https://github.com/Boka44
				</a>
				<h2>LinkedIn</h2>
				<a href="https://www.linkedin.com/in/nicholas-hrboka" target='_blank'>
					https://www.linkedin.com/in/nicholas-hrboka/
				</a>
				<h2>Blog</h2>
				<a href="https://hrboka.wordpress.com/blog/" target='_blank'>
					https://hrboka.wordpress.com/blog/
				</a>
			</div>
		)
	}
}
