import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import {COLORS} from '../constants/theme'
import HeightSpacer from '../components/Reusable/HeightSpacer'
import AssetImage from '../components/Reusable/AssetImage'

const Tab=createMaterialTopTabNavigator();
const AuthTopTab = () => {
  return (
    <View style={{flex:1,backgroundColor:COLORS.lightWhite}}>
        <ScrollView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
        <HeightSpacer height={80} />
        <AssetImage 
            source={require('../assets/images/bg2.png')}
            mode={'contain'}
            height={250}
            width={'100%'}
        />
            <View style={{height:600}}>
            <Tab.Navigator>
            <Tab.Screen name='Login' component={Login}/>
            <Tab.Screen name='Register' component={Register}/>
            </Tab.Navigator>
            </View>
        </ScrollView>
      
    </View>
  )
}

export default AuthTopTab