import React, { useState, useReducer } from 'react';
import SearchBar from './SearchBar';
import { Flexbox, FlexDirectionColumn } from '../../BaseComponents';
// import FilterButtonBase from './FilterButtonBase';
// import FilterModalBase from './FilterModalBase';

export const FilterContext = React.createContext();

const LOCATION = ['서울', '대전', '인천', '대구', '부산'];
const GENRE = ['공연', '콘서트', '로맨스'];
const DATE = ['무언가오브젝트'];

const Filter = () => {
	const initialFilter = {
		location: '',
		genre: '',
		date: ''
	};

	const [filterBody, setFilterBody] = useState(LOCATION);

	const reducer = (state, action) => {
		switch (action) {
			case 'location':
				setFilterBody(LOCATION);
				break;

			case 'genre':
				setFilterBody(GENRE);
				break;

			case 'date':
				setFilterBody(DATE);
				break;

			default:
				throw new Error('Custom: Reducer action type not defined');
		}
	};

	const [filter, dispatchFilter] = useReducer(reducer, initialFilter);

	return (
		<div className={'filter'}>
			<FilterContext.Provider value={{ filter, dispatchFilter }}>
				<FlexDirectionColumn>
					<SearchBar />
				</FlexDirectionColumn>
			</FilterContext.Provider>
		</div>
	);
};

export default Filter;
/*
<Flexbox>
						<FilterButtonBase keyName={'location'} innerText={'지역'} />
						<FilterButtonBase keyName={'genre'} innerText={'장르'} />
						<FilterButtonBase keyName={'date'} innerText={'날짜'} />
					</Flexbox>
					<FilterModalBase body={filterBody} />
*/
