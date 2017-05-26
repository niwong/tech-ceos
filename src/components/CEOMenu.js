import React from 'react';
import Link from 'react-router';

export default class CEOMenu extends React.Component{
	render () {
		return (
			<nav className="athletes-menu">
				{this.props.ceos.map(menuCEO => {
					return <Link key={menuCEO.id} to={'/ceo/${menuCEO.id}'} activeClassName="active">
						{menuCEO.name}
					</Link>
				})}
			</nav>
		)
	}
}

/* 

We use the map method to iterate over all the athletes 
and generate for every one of them a Link.

Link is a special component provided by React Router to create links between views.

we use the prop activeClassName to use the class active 
when the current route matches the path of the link.
*/


