import styled from 'styled-components';

export const Flexbox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;

export const FlexDirectionColumn = styled(Flexbox)`
	flex-direction: column;
`;
