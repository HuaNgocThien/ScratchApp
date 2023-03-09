/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { View, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import {
    searchIcon,
    filterIcon
} from '../../../../assets/images';
import colors from '../../../../constants/colors';
import SearchContext from '../../search.context';

const SearchInput = ({
    customStyle = {},
    leftTintColor = 'black',
    rightTintColor = 'black',
}) => {
    const context = useContext(SearchContext);
    return <View style={[styles.searchWrapper, customStyle]}>
        <View style={styles.lrWrapper}>
            <Image
                source={searchIcon}
                style={[styles.icon, { tintColor: leftTintColor }]}
                resizeMode={'stretch'}
            />
        </View>
        <TextInput
            style={styles.input}
            placeholder={'Search recipe, people, or tag'}
            placeholderTextColor={colors.text_content}
            value={context?.searchText?.value}
            onChangeText={context?.searchText?.onChangeText}
        />
        <TouchableOpacity
            onPress={() => context?.onChangeIsVisible(true)}
            activeOpacity={0.4}
            style={styles.lrWrapper}>
            <Image
                source={filterIcon}
                style={[styles.icon, { tintColor: rightTintColor }]}
                resizeMode={'stretch'}
            />
        </TouchableOpacity>
    </View>
};

export default React.memo(SearchInput);
