import React, { Component } from 'react';

export class Footer extends Component {
	render() {
		return (
			<div className='footer'>
				<a href='https://www.facebook.com/nicholas.hrboka' target='_blank' rel="noopener noreferrer" className="fa fa-facebook"/>
				<a href='https://www.linkedin.com/in/nicholas-hrboka/' target='_blank' rel="noopener noreferrer" className="fa fa-linkedin"/>
				<a href='https://github.com/Boka44' target='_blank' rel="noopener noreferrer" className="fa fa-github"/>
				<a href='https://hrboka.wordpress.com/blog/' target='_blank' rel="noopener noreferrer" className="fa fa-wordpress"/>
				<a href="https://drive.google.com/file/d/1YSDQfzjY9Vdv4bHxpDdUMNKMQUciNdUU/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='fa fa-file-text'/>
			</div>
		)
	}
}