import React from 'react';
import { View, Text, TouchableOpacity, Image, useWindowDimensions, Animated } from 'react-native';
import styles from './styles';
import { TabView, SceneMap } from 'react-native-tab-view';
import TabContent from './TabContent';


const renderScene = SceneMap({
    recipes: (props) => <TabContent route={props.route} />,
    saves: (props) => <TabContent route={props.route} />,
    following: (props) => <TabContent route={props.route} />,
});
const ProfileTabView = ({
    listData = [],
}) => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState(listData);
    const layout = useWindowDimensions();
    const renderTabbar = (tabBarProps) => {
        const inputRange = tabBarProps.navigationState.routes.map((x, i) => i);
        return (
            <React.Fragment>
                <View style={styles.tabBarWrapper}>
                    {tabBarProps?.navigationState?.routes.map((item, i) => {
                        const opacity = tabBarProps.position.interpolate({
                            inputRange,
                            outputRange: inputRange.map((inputIndex) =>
                                inputIndex === i ? 1 : 0.4
                            ),
                        });
                        return (
                            <TouchableOpacity
                                key={item.key}
                                onPress={() => setIndex(i)}
                                style={styles.tabWrapper}>
                                <Animated.Text style={[styles.tabTitleNumber, { opacity }]}>{item.number.toString()}</Animated.Text>
                                <Animated.Text style={[styles.tabTitleTxt, { opacity }]}>{item.title}</Animated.Text>
                                {index == i && <View style={styles.activeTab} />}
                            </TouchableOpacity>
                        );
                    })}
                </View>
                <View style={styles.lineSeparator} />
            </React.Fragment>
        );
    }
    console.log('tabview render')
    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={renderTabbar}
        />
    );
}
export default React.memo(ProfileTabView);