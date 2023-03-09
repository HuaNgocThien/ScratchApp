/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, ScrollView } from 'react-native';
import styles from './search.styles';
import SearchInput from './components/SearchInput';
import TrendingRecipes from './components/TrendingRecipes';
import RecipesByIngredient from './components/RecipesByIngredient';
import FoundRecipes from './components/FoundRecipes';
import FoundProfiles from './components/FoundProfiles';
import FoundTags from './components/FoundTags';
import FilterModal from './components/FilterModal';
import SearchContext from './search.context';



const SearchView = () => {
  const renderSuggestion = () => {
    return (
      <React.Fragment>
        <TrendingRecipes />
        <View style={styles.lineSeparator} />
        <RecipesByIngredient />
      </React.Fragment>
    );
  }
  const renderSearchResult = () => {
    return (
      <React.Fragment>
        <ScrollView>
          <FoundRecipes />
          <View style={styles.lineSeparator} />
          <FoundProfiles />
          <View style={styles.lineSeparator} />
          <FoundTags />
        </ScrollView>
      </React.Fragment>
    );
  }
  return (
    <SearchContext.Consumer>
      {(context) =>
        <View style={styles.container}>
          <SearchInput customStyle={styles.input} />
          {context?.searchText?.value
            ? renderSearchResult()
            : renderSuggestion()}
          <FilterModal />
        </View>
      }
    </SearchContext.Consumer>
  );
};

export default SearchView;
