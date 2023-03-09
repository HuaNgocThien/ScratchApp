import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import {
    avaFake,
    editIcon,
} from '../../assets/images';
import {
    MainButton,
} from '../';

const Profile = ({
    isMe = false,
}) => {
    return (
        <View style={[styles.wrapper, isMe || styles.otherWrapper]}>
            <View style={styles.infoWrapper}>
                <Image
                    source={avaFake}
                    style={styles.userAvatar}
                />
                <View style={styles.detailView}>
                    <Text style={styles.userName}>Nick Evans</Text>
                    <Text style={styles.infoText}>Potato Master</Text>
                    <View style={styles.otherInfoWrapper}>
                        <Text style={styles.infoText}>584 followers</Text>
                        <View style={styles.separatorPoint} />
                        <Text style={styles.infoText}>23k likes</Text>
                    </View>
                </View>
                {isMe && <TouchableOpacity>
                    <Image
                        source={editIcon}
                        style={styles.editBtn}
                    />
                </TouchableOpacity>}
            </View>
            {isMe || <MainButton title='Follow' />}
        </View>
    );
}
export default React.memo(Profile);