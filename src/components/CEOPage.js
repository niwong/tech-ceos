import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import CEOMenu from './CEOMenu';
import Medal from './Medal';
import Flag from './Flag';
import ceos from '../data/ceos';

export default class CEOPage extends React.Component {
	render() {
		const id = this.props.params.id;
		const ceo = ceos.filter((ceo) => ceo.id === id)[0];

		if (!ceo) {
			return <NotFoundPage/>;
		}
		const headerStyle = { backgroundImage: `url(/img/${ceo.cover})`};
		return (
			<div className="athlete-full">
				<CEOMenu ceos={ceos}/>
				<div className="athlete">
					<header style={headerStyle}/>
					<div className="picture-container">
						<img src={`/img/${ceo.image}`}/>
						<h2 className="name">{ceo.name}</h2>
					</div>
			        <section className="description">
			        Olympic medalist from <strong><Flag code={ceo.country} showName="true"/></strong>,
			        born in {ceo.birth} (Find out more on <a href={ceo.link} target="_blank">Wikipedia</a>).
			        </section>
			    </div>
			    <div className="navigateBack">
			    	<Link to="/">« Back to the index</Link>
			    </div>
			</div>
		);
	}
}