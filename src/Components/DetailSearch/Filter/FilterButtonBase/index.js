import React, { useContext } from 'react';
import styled from 'styled-components';
import { FilterContext } from '../index';
const Button = styled.button`
	background-color: ${props => (props.selected ? '#15a085' : '#ffffff')};

	&.clicked {
		background-color: '#15a085';
	}
`;

const FilterButtonBase = ({ keyName, innerText }) => {
	const { filter, dispatchFilter } = useContext(FilterContext);
	const onClickHandler = e => {
		dispatchFilter(`${keyName}`);
	};
	return (
		<Button key={keyName} onClick={onClickHandler}>
			{innerText}
		</Button>
	);
};

export default FilterButtonBase;
