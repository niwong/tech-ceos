import React from 'react';
import CEOPreview from './CEOPreview';
import ceos from '../data/ceos';

export default class IndexPage extends React.Component {
	render () {
		return (
			<div className="home">
				<div className="athletes-selector">
					{ceos.map(ceoData => <CEOPreview key={ceoData.id} {...ceoData} />)}
				</div>
			</div>
		);
	}
}

/*

Basically we are iterating over all the available athletes 
from our data module and creating an AthletePreview component for each of them.

*/