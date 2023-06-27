import './index.css';

function SearchField(props: {
	placeholder: string;
	searchText: string;
	setSearchText: (searchText: string) => void;
}) {
	return (
		<input
			className='search-field-input w-100'
			type='text'
			placeholder={props.placeholder}
			value={props.searchText}
			onChange={e => {
				props.setSearchText(e.target.value);
			}}
		/>
	);
}

export default SearchField;
