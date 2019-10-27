import React from 'react';
import styled from 'styled-components';

const WrapInput = styled.div`
	width: 70%;
	height: 100%;
	padding: 20px;
`;

const Input = styled.input`
	width: 100%;
	height: 30px;
`;

const TextInput = ({ setKeyword }) => {
	const onChangeInput = e => {
		setKeyword(e.target.value);
	};

	const searchBtn = document.getElementById('search-btn');
	const onPressKeyboard = e => {
		if (e.key === 'Enter') {
			searchBtn.click();
		}
	};

	return (
		<>
			<WrapInput>
				<Input
					placeholder={'공연 제목, 공연 장소, 배우'}
					onChange={onChangeInput}
					onKeyPress={onPressKeyboard}
					autoFocus
				></Input>
			</WrapInput>
		</>
	);
};

export default TextInput;
