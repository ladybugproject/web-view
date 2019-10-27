import React from "react";
import styled from "styled-components";
import { Flexbox, FlexDirectionColumn } from "../../BaseComponents";

/* 컨테이너 속성 */

const WrapFiltered = styled(FlexDirectionColumn)`
	padding: 5px;
`;

const WrapFilteredTitle = styled(Flexbox)`
	display: ${props => (props.show ? "flex" : "none")};
	justify-content: space-between;
`;

const FilteredTitle = styled.div`
	height: 30px;
	font-size: 20px;
	font-weight: 800;
	text-align: center;
	margin-left: 20px;
`;

const FilteredCount = styled.div`
	height: 100%;
	font-weight: 100;
	display: inline-flex;
	align-content: flex-end;
`;

const Line = styled.div`
	display: ${props => (props.show ? "flex" : "none")};
	width: 100%;
	height: 1px;
	border-bottom: 1px solid black;
`;

/* item 속성 */

const WrapFilteredItem = styled(Flexbox)`
	margin: 5px;
	padding: 5px;
`;

const ItemImg = styled.img`
	width: 40%;
	height: 90%;
	margin-left: 5px;
`;

const WrapTitle = styled.div`
	width: 90%;
	height: 40%;
	font-size: 18px;
	font-weight: 600;
	margin-left: 20px;
	margin-right: 10px;
	margin-bottom: 30px;
`;

const WrapContent = styled(FlexDirectionColumn)`
	height: 80%;
`;

const Content = styled(WrapTitle)`
	font-size: 16px;
	font-weight: 300;
	margin-top: 5px;
	margin-bottom: 0px;
`;

const B = styled.b`
	font-weight: 400;
`;

const Item = ({ info }) => {
	return (
		<WrapFilteredItem>
			<ItemImg src={info.poster} alt={"poster"} />
			<FlexDirectionColumn>
				<WrapTitle>{info.prf_name}</WrapTitle>
				<WrapContent>
					<Content>
						<B>장소 </B>
						{info.plc_name}
					</Content>
					<Content>
						<B>장르 </B>
						{info.genre}
					</Content>
					<Content>
						<B>날짜 </B>
						{info.date_from}
						{" ~ "}
						{info.date_to}
					</Content>
					<Content>
						<B>출연진 </B>
						{info.cast.split(",").slice(0, 3)}
					</Content>
				</WrapContent>
			</FlexDirectionColumn>
		</WrapFilteredItem>
	);
};

const Concerts = ({ concerts }) => {
	return (
		<FlexDirectionColumn className={"filtered-concerts"}>
			<WrapFilteredTitle show={concerts.length !== 0}>
				<FilteredTitle>{"오머나! 내가 찾던 거야!"}</FilteredTitle>
				<FilteredCount>{`${concerts.length}가지의 검색결과`}</FilteredCount>
			</WrapFilteredTitle>
			<Line show={concerts.length !== 0} />

			<WrapFiltered>
				{concerts.map(v => (
					<Item key={v.prf_id} info={v}></Item>
				))}
			</WrapFiltered>
		</FlexDirectionColumn>
	);
};

export default Concerts;
