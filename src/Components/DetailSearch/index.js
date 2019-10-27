import React, { useState, useEffect } from "react";
import Navigator from "../Navigator";
import Filter from "./Filter";
import Concerts from "./Concerts";
import APIClient from "../APIClient";

const DetailSearch = () => {
	const [concerts, setConcerts] = useState([]);
	const fetchInitialData = async () => {
		const data = await APIClient.prfinfo.search({
			keyword: "",
			startFrom: 0,
			endTo: 20
		});

		setConcerts(data);
	};
	useEffect(() => {
		fetchInitialData();
	}, []);
	return (
		<>
			<Navigator />
			<Filter setConcerts={setConcerts} />
			<Concerts concerts={concerts} />
		</>
	);
};

export default DetailSearch;
