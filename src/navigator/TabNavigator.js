import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../constants/colors';
import screenName from '../constants/screenName';
import HomeContainer from '../screens/home/home.container';
import SearchContainer from '../screens/search/search.container';
import MyProfileContainer from '../screens/myProfile/myProfile.container';
import UserProfileContainer from '../screens/userProfile/userProfile.container';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const RecipeStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={screenName.RECIPE_FEED_SCREEN} component={HomeContainer} />
            <Stack.Screen name={screenName.USER_PROFILE_SCREEN} component={UserProfileContainer} />
        </Stack.Navigator>
    )
}

function HomeScreen() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: colors.primary_green,
                tabBarIcon: true,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: colors.white,
                    borderTopWidth: 0,
                }
            }}>
            <Tab.Screen
                name={screenName.SEARCH_SCREEN}
                component={SearchContainer}
                options={{
                    tabBarIcon: ({ focused, color }) =>
                        <Feather
                            name='search'
                            color={color}
                            size={30} />
                }} />
            <Tab.Screen
                name={screenName.HOME_SCREEN}
                component={RecipeStack}
                options={{
                    tabBarIcon: ({ focused, color }) => <MaterialCommunityIcons
                        name='newspaper-variant-outline'
                        color={color}
                        size={30} />
                }} />
            <Tab.Screen
                name={screenName.MY_PROFILE_SCREEN}
                component={MyProfileContainer}
                options={{
                    tabBarIcon: ({ focused, color }) =>
                        <MaterialCommunityIcons
                            name='chef-hat'
                            color={color}
                            size={30} />
                }} />
        </Tab.Navigator>
    );
}
export default HomeScreen;