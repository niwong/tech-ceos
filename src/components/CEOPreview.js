import React from 'react';
import { Link } from 'react-router';

export default class CEOpreview extends React.Component {
	render () {
		return (
			<Link to={`ceo/${this.props.id}`}>
				<div className="athlete-preview">
					<img src={`img/${this.props.image}`}/>
					<h2 className="name">{this.props.name}</h2>
					<span className="medals-count">a {this.props.medals.length}</span>
				</div>
			</Link>
		);
	}
}