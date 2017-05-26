import React from 'react';

// define flag data
const data = {
	'usa': {
		'name': 'United States of America',
		'icon': 'flag-jp.png'
	},
	'za': {
		'name': 'South Africa',
		'icon': 'flag-jp.png'
	}
};

export default class Flag extends React.Component {
	render () {
		const name = data[this.props.code].name;
		const icon = data[this.props.code].icon;
		return (
			<span className="flag">
				<img className="icon" title={name} src={'img/${icon}'} />
				{this.props.showName && <span className="name"> {name}</span>}
			</span>
		);
	}
}

/*
In a real application with a larger and more complex data set 
you might want to use an API or a different mechanism to connect the data to the component.
*/