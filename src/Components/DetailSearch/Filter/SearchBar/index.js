import React, { useState } from "react";
import TextInput from "./textInput";
import { Flexbox } from "../../../BaseComponents";
import styled from "styled-components";
import APIClient from "../../../APIClient";

const SearchBtn = styled.div`
	width: 60px;
	height: 40px;
	text-align: center;
	line-height: 40px;
	background-color: #15a085;
	border-radius: 0.5rem;
	vertical-align: middle;
	text-align: middle;
`;

const SearchBar = ({ setConcerts }) => {
	const [keyword, setKeyword] = useState("");

	const onClickBtn = async e => {
		const concerts = await APIClient.prfinfo.search({
			keyword,
			startFrom: 0,
			endTo: 20
		});

		setConcerts(concerts);
	};

	return (
		<Flexbox>
			<TextInput setKeyword={setKeyword} />
			<SearchBtn id={"search-btn"} onClick={onClickBtn}>
				검색
			</SearchBtn>
		</Flexbox>
	);
};

export default SearchBar;
