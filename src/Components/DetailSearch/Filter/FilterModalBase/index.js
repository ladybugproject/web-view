import React from 'react';
import styled from 'styled-components';
import { Flexbox } from '../../../BaseComponents';

const WrapModal = styled(Flexbox)`
	width: 100%;
	height: 30%;
	background-color: green;
`;

const FilterModalBase = ({ body }) => {
	return <WrapModal>{body}</WrapModal>;
};

export default FilterModalBase;
