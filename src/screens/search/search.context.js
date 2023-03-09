import { createContext } from 'react';

const defaultValue = {
    searchText: null,
    ingredients: 0,
    fromTime: 0,
    toTime: 100,
    isFilterVisible: false,
    onChangeIngredients: ()=> {},
    onChangeFromTime: ()=> {},
    onChangeToTime: ()=> {},
    onChangeIsVisible: ()=> {},
}
const SearchContext = createContext(defaultValue);
export default SearchContext;