import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import Modal from 'react-native-modal';
import SearchInput from '../SearchInput';
import colors from '../../../../constants/colors';
import AreaHeader from '../AreaHeader';
import {
    MainButton,
    CustomSlider,
} from '../../../../components';
import SearchContext from '../../search.context';

const dumpSearchFor = ['298 recipes', '78 profiles', '326 tags'];
const FilterModal = () => {
    const context = useContext(SearchContext);

    const renderSearchFor = (item) => {
        return (
            <TouchableOpacity
                key={item}
                activeOpacity={0.6}
                style={styles.searchForItem}>
                <Text style={styles.searchForItemTxt}>{item}</Text>
            </TouchableOpacity>
        );
    }
    return (
        <Modal
            isVisible={context?.isFilterVisible}
            style={styles.container}>
            <View style={styles.wrapper}>
                <SearchInput rightTintColor={colors.primary_green} />
                <View style={styles.body}>
                    <AreaHeader
                        leftTitle='Search Filter' />
                    <CustomSlider
                        low={context?.ingredients}
                        onChangeLow={context?.onChangeIngredients}
                        leftTitle='Ingredients' />
                    <CustomSlider
                        isRange
                        low={context?.fromTime}
                        high={context?.toTime}
                        onChangeHigh={context?.onChangeToTime}
                        onChangeLow={context?.onChangeFromTime}
                        leftTitle='Serving Time'
                        customStyle={styles.serviceSlider}
                        rightTitle={'mins'} />
                    <View style={styles.searchForWrapper}>
                        <AreaHeader
                            leftTitle='Search for'
                            customStyle={styles.searchForHeader} />
                        <View style={styles.searchForItemWrapper}>
                            {dumpSearchFor.map(renderSearchFor)}
                        </View>
                    </View>
                    <MainButton
                        title='Apply Filter'
                        customStyle={styles.applyBtn}
                        onPress={() => context?.onChangeIsVisible(false)}
                    />
                </View>
            </View>
        </Modal>
    )
};

export default React.memo(FilterModal);