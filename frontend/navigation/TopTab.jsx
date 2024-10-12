import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import TopBookings from '../screens/top/TopBookings';
import TopTrips from '../screens/top/TopTrips';
import TopInfo from '../screens/top/TopInfo';
import AppBar from '../components/Reusable/AppBar'
import NetworkImage from '../components/Reusable/NetworkImage'
import HeightSpacer from '../components/Reusable/HeightSpacer'
import ReusableText from '../components/Reusable/ReusableText';
import { COLORS,SIZES } from '../constants/theme';
const Tab= createMaterialTopTabNavigator();

const TopTab = () => {
  return (
    <View style={{flex:1}}>
      <View style={{backgroundColor: COLORS.lightWhite}}>
        <HeightSpacer height={50} />
        <NetworkImage 
          source={'https://img.freepik.com/free-photo/travel-concept-with-worldwide-landmarks_23-2149153263.jpg?size=626&ext=jpg'}
          width={'100%'}
          height={300}
          radius={10}
        />

        <View style={styles.profile}>
          <Image 
            source={{uri:"https://t4.ftcdn.net/jpg/08/59/98/15/360_F_859981549_FcpQM4nwmoHnbFnE930JJ2AgsDgF3cL4.jpg"}}
            style={styles.image}
          />

          <HeightSpacer height={5}/>

          <View style={styles.name}>
            <View style={{alignItems:'center'}}>
            <ReusableText 
            text={'Username'}
            family={"medium"}
            size={SIZES.medium}
            color={COLORS.black}
            />
            </View>
          </View>
          <HeightSpacer height={5}/>
          
            <View style={{alignItems:'center'}}>
            <ReusableText 
            text={'Email@gmail.com'}
            family={"medium"}
            size={SIZES.medium}
            color={COLORS.white}
            />
            </View>
         
        </View>

      </View>
      <Tab.Navigator>
        <Tab.Screen name="Bookings" component={TopBookings} />
        
        <Tab.Screen name="Trips" component={TopTrips} />

        <Tab.Screen name="Info" component={TopInfo} />
      </Tab.Navigator>
    </View>
  )
}

export default TopTab

const styles = StyleSheet.create({
  profile:{
    position:"absolute",
    left:0,
    right:0,
    top:110,
    alignItems:'center',
  },
  image:{
    resizeMode:"cover",
    width:100,
    height:100,
    borderColor:COLORS.lightWhite,
    borderWidth:2,
    borderRadius:90,
  },
  name:{
    backgroundColor:COLORS.lightWhite,
    borderColor:COLORS.lightWhite,
    padding:10,
    borderRadius:10,
  },
})