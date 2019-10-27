import React, { useState } from 'react';
import Navigator from '../Navigator';
import Filter from './Filter';
import Concerts from './Concerts';

const DetailSearch = () => {
	const [concerts, setConcerts] = useState([]);
	return (
		<>
			<Navigator />
			<Filter setConcerts={setConcerts} />
			<Concerts concerts={concerts} />
		</>
	);
};

export default DetailSearch;
