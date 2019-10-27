import React, { useState } from 'react';
import TextInput from './textInput';
import { Flexbox } from '../../../BaseComponents';
import styled from 'styled-components';
import ADDRESS from '../../../../Address';

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

//http://15.164.225.87:3000/prfinfo?keyword=%EB%8C%80%ED%95%99%EB%A1%9C&startFrom=0&endTo=1
const SearchBar = ({ setConcerts }) => {
	const [keyword, setKeyword] = useState(undefined);

	const onClickBtn = e => {
		if (!keyword) {
			return e;
		}
		fetch(`${ADDRESS}/prfinfo?keyword=${keyword}&startFrom=0&endTo=20`)
			.then(res => {
				return res.json();
			})
			.then(data => {
				setConcerts(data[1].result);
			});
	};

	return (
		<Flexbox>
			<TextInput setKeyword={setKeyword} />
			<SearchBtn id={'search-btn'} onClick={onClickBtn}>
				검색
			</SearchBtn>
		</Flexbox>
	);
};

export default SearchBar;
