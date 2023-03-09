import React, { useCallback } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import RangeSlider from 'rn-range-slider';
import colors from '../../constants/colors';

const CustomSlider = ({
    customStyle = {},
    leftTitle = '',
    rightTitle = '',
    isRange = false,
    low = 0,
    onChangeLow,
    high = 100,
    onChangeHigh,
}) => {
    const renderThumb = useCallback(() => <View style={styles.thump} />, []);
    const renderRail = useCallback(() => <View style={styles.rail} />, []);
    const renderRailSelected = useCallback(() => <View style={styles.railSelected} />, []);
    const onValueChanged = (low, high) => {
        onChangeLow?.(low);
        onChangeHigh?.(high)
    }
    return (
        <View style={[styles.wrapper, customStyle]}>
            <View style={styles.header}>
                <Text style={styles.leftTitle}>{leftTitle}</Text>
                <Text style={styles.rightTitle}>{`${low}${isRange ? `-${high}` : ''}`} {rightTitle}</Text>
            </View>
            <RangeSlider
                style={styles.slider}
                min={0}
                max={100}
                step={1}
                low={low}
                high={high}
                floatingLabel
                minRange={1}
                renderThumb={renderThumb}
                renderRail={renderRail}
                renderRailSelected={renderRailSelected}
                disableRange={!isRange}
                onTouchEnd={onValueChanged}
            />
        </View>
    );
}
export default React.memo(CustomSlider);