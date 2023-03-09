/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { avaFake, feedImg } from '../../../../assets/images';
import { scaleHeight } from '../../../../utils';
import {
    OutlineButton
} from '../../../../components';
import colors from '../../../../constants/colors';
import { NavigationServices } from '../../../../utils';
import screenName from '../../../../constants/screenName';

const FeedCard = ({
    index
}) => {
    return <View style={[styles.feedContainer, index == 0 ? styles.firstItem : {}]}>
        <View style={styles.feedHeaderWrapper}>
            <TouchableOpacity
                onPress={()=>NavigationServices.navigate(screenName.USER_PROFILE_SCREEN)}
                activeOpacity={0.6}
                style={styles.feedHeader}>
                <Image
                    source={avaFake}
                    style={styles.userAva}
                />
                <View style={styles.userInfo}>
                    <Text style={styles.userName} numberOfLines={1}>Profile Name</Text>
                    <Text style={styles.userOnlTime} numberOfLines={1}>2h ago</Text>
                </View>
            </TouchableOpacity>
        </View>
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.feedView}>
            <Image
                source={feedImg}
                style={styles.feedImg}
                resizeMode={'stretch'}
            />
            <View style={styles.feedTitleWrapper}>
                <Text style={styles.feedTitle} numberOfLines={1}>Red Wine and Mint Soufflé</Text>
                <TouchableOpacity>
                    <AntDesign name={'hearto'} size={scaleHeight(15)} color={'#363837'} />
                </TouchableOpacity>
            </View>
            <Text style={styles.feedDescription} numberOfLines={2}>
                Apparently we had reached a great height in the atmosphere, for the sky was …
            </Text>
            <View style={styles.footerWrapper}>
                <View style={styles.feedInfo}>
                    <Text style={styles.likeTxt} numberOfLines={1}>32 likes</Text>
                    <View style={styles.dot} />
                    <Text style={styles.likeTxt} numberOfLines={1}>8 Comments</Text>
                </View>
                <OutlineButton
                    isLeftIcon
                    leftIcon={() => <AntDesign
                        name={'plus'}
                        size={scaleHeight(15)}
                        color={colors.primary_green}
                        style={styles.btnIcon}
                    />}
                    title='Save' />
            </View>
        </TouchableOpacity>
    </View>
};

export default React.memo(FeedCard);
