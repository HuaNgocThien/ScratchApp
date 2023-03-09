import React, { useState, useCallback } from 'react';
import SearchView from './search.view';
import {
  useInputChange
} from '../../hooks';
import SearchContext from './search.context';

const SearchContainer = props => {
  const searchText = useInputChange('', 'text', true);
  const [ingredients, setIngredients] = useState(0);
  const [fromTime, setFromTime] = useState(0);
  const [toTime, setToTime] = useState(100);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const onChangeIngredients = useCallback((value) => setIngredients(value), []);
  const onChangeFromTime = useCallback((value) => setFromTime(value), []);
  const onChangeToTime = useCallback((value) => setToTime(value), []);
  const onChangeIsVisible = useCallback((value) => setIsFilterVisible(value), []);
  return (
    <SearchContext.Provider value={{
      searchText,
      ingredients,
      fromTime,
      toTime,
      isFilterVisible,
      onChangeIngredients,
      onChangeFromTime,
      onChangeToTime,
      onChangeIsVisible,
    }}>
      <SearchView />
    </SearchContext.Provider>
  );
};

export default SearchContainer;
