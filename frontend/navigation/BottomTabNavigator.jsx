import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Chat, Profile,Home,Location } from '../screens';
import {Ionicons} from '@expo/vector-icons'
import { COLORS } from '../constants/theme';
import TopTab from './TopTab';
import AuthTopTab from './AuthTopTab';
const Tab=createBottomTabNavigator();

const tabbarStyle={
    padding:10,
    borderRadius:20,
    height:80,
    position:"absolute",
    bottom:15,
    left:20,
    right:20,
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    initialRouteName='Home'
    activeColor='#EB6A58'
    tabBarHideKeyBoard={true}
    headerShown={false}
    inactiveColors='#3e2465'
    barStyle={{paddingBottom:48}}
    >
        <Tab.Screen name="Home" component={Home} options={{
            tabBarStyle:tabbarStyle, 
            headerShown:false,
            tabBarShowLabel:false,
            tabBarIcon:({focused})=>(
                <Ionicons 
                name={focused? "grid" : "grid-outline"}
                size={focused?30:26}
                color={focused? COLORS.red: COLORS.gray}
                />
            )
        }}/>
        <Tab.Screen name="Location" component={Location} options={{
            tabBarStyle:tabbarStyle, 
            headerShown:false,
            tabBarShowLabel:false,
            tabBarIcon:({focused})=>(
                <Ionicons 
                name={focused? "location":"location-outline"}
                size={focused?30:26}
                color={focused? COLORS.red: COLORS.gray}
                />
            )
        }}/>
        <Tab.Screen name="Chat" component={AuthTopTab} options={{
            tabBarStyle:tabbarStyle, 
            headerShown:false,
            tabBarShowLabel:false,
            tabBarIcon:({focused})=>(
                <Ionicons 
                name={focused? "chatbubble-ellipses" : "chatbubble-ellipses-outline"}
                size={focused?30:26}
                color={focused? COLORS.red: COLORS.gray}
                />
            )
        }}/>
        <Tab.Screen name="Profile" component={TopTab} options={{
            tabBarStyle:tabbarStyle, 
            headerShown:false,
            tabBarShowLabel:false,
            tabBarIcon:({focused})=>(
                <Ionicons 
                name={focused? "person" : "person-outline"}
                size={focused?30:26}
                color={focused? COLORS.red: COLORS.gray}
                />
            )
        }}/>
    </Tab.Navigator>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({})